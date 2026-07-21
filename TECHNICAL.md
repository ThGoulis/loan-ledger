# Technical Documentation — Personal Finance Dashboard

## 1. Architecture Overview

**Type:** Single-file, static web application (`index.html`). No backend, no build process, no external runtime dependencies beyond Google Fonts (loaded via `@import`).

**Stack:** Vanilla HTML5, CSS3 (custom properties for theming), vanilla JavaScript (ES6+). No frameworks, no bundler.

**Rendering model:** Four tab panels (`#tabSalary`, `#tabBudget`, `#tabMoto`, `#tabLoan`) toggled via inline `style.display`, managed by a `showTab(name)` function. All four panels exist in the DOM simultaneously; only one is visible at a time.

**State management:** No formal state store. All state lives in the DOM (input field values) plus a small set of module-level `let` globals that cache the most recent computed results for cross-tab consumption (see §4.6).

---

## 2. File Structure (single file, logical sections)

```
<head>
  - Meta tags: charset, viewport, title, description, OG/Twitter cards, Google verification
  - Inline <style>: CSS custom properties, base styles, component styles, responsive rules

<body>
  - Letterhead (title, tagline, language toggle, date stamp)
  - Dismissible intro card (first-visit onboarding)
  - Toolbar (Reset to Defaults, Print Report)
  - Summary bar (mini live dashboard: net salary, savings, loan payment, balance, status badge)
  - Tab navigation
  - Tab panels (Salary → Budget → Vehicle Expenses → Loan)
  - Site-wide disclaimer footer
  - Hidden #printReport container (populated on demand)

  <script>
    - TRANSLATIONS dictionary (el/en) + i18n apply/set/load functions
    - Currency formatting helpers (locale-aware)
    - Loan amortization engine (recompute, buildSchedule, monthlyPayment)
    - Prepayment scenario engine (computePrepayment)
    - Salary/tax engine (netFromGross, annualTax, effectiveTaxCredit, recomputeSalary)
    - Budget engine (recomputeBudget) incl. bonus-to-expense allocation, vacation fund,
      DTI indicator, summary bar updates
    - Investment calculator engine (recomputeInvestment)
    - Input validation/clamping (FIELD_BOUNDS)
    - Print report generator (builds a standalone HTML report on demand)
    - Init sequence (initial recompute calls, event listener wiring)
```

---

## 3. Design System

**Palette (CSS custom properties):** warm paper/ink ledger aesthetic — cream paper background with a faint ruled-line texture, dark teal ink for text and primary actions, brass/amber for secondary accents and warnings, red-ink for deductions/deficits.

**Typography:** Fraunces (serif, headings), IBM Plex Mono (monospace, labels/numbers/UI chrome), Inter (sans-serif, body text).

**Layout primitives:**
- `.card` — bordered content block, `min-width:0` to prevent grid/flex overflow
- `.grid` — two-column layout (1.1fr/1fr), collapses to one column ≤760px
- `.results` — 2-column grid for paired result boxes, collapses to one column ≤640px
- `.result-box.big` — spans all columns via `grid-column:1/-1` (not `1/3`, which would hard-code a 2-column assumption and break single-column grids)

**Responsive strategy:** one `@media (max-width:640px)` block handles mobile refinements without touching desktop rules. Both `.grid` and `.results` children get `min-width:0` explicitly — without it, CSS Grid's default `min-width:auto` lets long content (especially English strings, which run longer than Greek) force items wider than their track, causing horizontal overflow that clips or scrolls.

---

## 4. Core Calculation Logic

### 4.1 Net salary (`netFromGross`)
```
ss             = round(gross × ssRate%)
taxable        = gross − ss
annualTaxable  = taxable × 14                    (14-salary system)
grossAnnualTax = bracket_tax(annualTaxable, ageBracket)
usedCredit     = effectiveTaxCredit(baseCredit, annualTaxable)
annualTaxAfterCredit = max(grossAnnualTax − usedCredit, 0)
monthlyTax     = annualTaxAfterCredit / 14
net            = gross − ss − monthlyTax
```
Rounding (`r2`, round-to-cents) is applied after every intermediate step, matching how real payroll systems round, not just at the final result. This was verified line-for-line against a real payslip.

### 4.2 Age-based tax brackets
Three bracket tables (`TAX_BRACKETS_BY_AGE`), selected by the `ageBracket` field:
```
standard (>30):    9% | 20% | 26% | 34% | 39% | 44%
                   thresholds: €10k / €20k / €30k / €40k / €60k

young30 (26-30):   9% flat to €20k, then same upper brackets as standard
                   (26% | 34% | 39% | 44%)

young25 (≤25):     0% to €20k, then same upper brackets as standard
                   (26% | 34% | 39% | 44%)
```
Age only changes the tax scale — it does not affect EFKA contributions or the tax credit.

### 4.3 Tax credit taper (`effectiveTaxCredit`)
```
if annualTaxable <= 12000:
    usedCredit = baseCredit
else:
    reduction  = 20 × (annualTaxable − 12000) / 1000
    usedCredit = max(baseCredit − reduction, 0)
```
Full credit (default €777, adjustable for dependents) applies for annual taxable income ≤ €12,000; above that it decreases €20 per additional €1,000, floored at 0.

### 4.4 Bonuses (Christmas, Easter, leave allowance)
```
employedDays = days between max(hireDate, periodStart) and periodEnd
totalDays    = days between periodStart and periodEnd
ratio        = employedDays / totalDays              (0 if hireDate > periodEnd)
bonusGross   = fullAmount × ratio
bonusNet     = bonusGross × (regularNet / regularGross)
```
Periods: Christmas + leave allowance → **May 1 – Dec 31** of the current year. Easter → **Jan 1 – Apr 30** of the current year.

Each bonus's **net** amount is derived by applying the regular salary's effective net ratio (`net / gross`), not a separate tax calculation — bonuses are taxed at the same average rate as the regular salary rather than being independently annualized.

### 4.5 Extra hours (overwork / overtime / holiday work)
```
hourlyWage    = gross / 25 / 6.667
overworkGross = hours × hourlyWage × 1.20
overtimeGross = hours × hourlyWage × 1.40
holidayGross  = hours × hourlyWage × 0.75   (supplement only — base day pay
                                              is already covered by the monthly salary)
```
**Important correction (verified against a real payslip):** extra-hours gross pay is *not* taxed separately at a flat rate. It is added to the regular gross, and the **combined total** is run through the same EFKA + progressive-tax pipeline as §4.1:
```
combinedGross = gross + extraGross
combinedNet   = netFromGross(combinedGross, ssRate, taxCredit, ageBracket)
extraPayNet   = combinedNet − regularNet          (marginal contribution)
```
The extra pay's displayed "net" figure is the *marginal difference* between the combined-total net and the regular-only net — i.e. what the extra hours actually add to take-home pay once progressive taxation is accounted for, not an isolated flat-rate calculation.

Known gap: a fourth premium tier exists in law (Ν.4808/2021) for legal overtime beyond 150 hours/year (+60%) and illegal overtime (+120%). The tool currently only models +20% (overwork) / +40% (overtime) / +75%-supplement (holiday work).

### 4.6 Cross-tab state (module-level globals)
`recomputeSalary()` writes: `lastNetSalary`, `lastExtraNet`, `lastAvgBonusEquiv`, `lastXmasNet`, `lastEasterNet`, `lastLeaveNet`.
`recompute()` (loan) writes: `lastMonthlyPayment`.
`recomputeBudget()` writes: `lastSavingsSuggestion`, `lastAllocationSurplus`.
These are read across tabs — e.g. the Budget tab's remaining-balance calculation reads `lastNetSalary` regardless of which tab is currently visible, which is what lets the tool present a coherent picture instead of four isolated calculators.

### 4.7 Loan amortization
```
r = annualRate / 12
M = P × r / (1 − (1 + r)^-n)
```
Standard French amortization (fixed monthly payment `M`, principal `P`, `n` installments). Schedule built month-by-month (`buildSchedule`) tracking interest/principal/balance per row.

### 4.8 Partial prepayment
```
newBalance = balanceAtMonth − prepaymentAmount

mode = "shorten":  keep M fixed,  solve for new n  (fewer remaining installments)
mode = "lower":    keep n fixed,  solve for new M  (smaller installment)
```
Both modes rebuild a full schedule from the reduced balance to compute interest saved.

### 4.9 Debt-to-income (DTI) indicator
```
pct = (lastMonthlyPayment / lastNetSalary) × 100

pct < 30        -> "ok"   (surplus)
30 <= pct <= 35 -> "warn" (caution)
pct > 35        -> "over" (above typical bank threshold)
```
Compared against the 30–35% range Greek banks commonly use as a lending guideline. Framed explicitly as a bank rule of thumb, not a guarantee or the tool's own recommendation.

### 4.10 Investment calculator
Month-by-month simulation (not a closed-form formula), so mismatched contribution/compounding frequencies resolve correctly:
```
effectiveAnnualRate = (1 + rate/compoundFreq)^compoundFreq − 1
monthlyRate          = (1 + effectiveAnnualRate)^(1/12) − 1

for each month:
    balance = balance × (1 + monthlyRate)
    if contribution is due this month:
        balance = balance + contributionAmount
```

### 4.11 Budget & bonus allocation
```
for each of the 6 permutations of {insurance, roadTax, service}
    assigned to {Christmas, Easter, leaveAllowance}:
        covered   = count of pairs where bonus >= expense
        shortfall = sum of |bonus − expense| across all pairs
pick the permutation maximizing `covered`, then minimizing `shortfall`
surplus = sum(bonus − matchedExpense) across the winning permutation
```
Any surplus feeds the suggested vacation-fund addition. This runs independent of whether a loan exists, since vehicle expenses are meaningful whether or not the vehicle was financed.

---

## 5. Internationalization (i18n)

Every static string carries a `data-i18n="key"` attribute. Two dictionaries (`TRANSLATIONS.el`, `TRANSLATIONS.en`) hold the full innerHTML for each key (including nested `<span>` sub-notes, so translation can't accidentally strip inline styling). `applyStaticTranslations()` walks all `[data-i18n]` elements on load and on language toggle, replacing `innerHTML` from the active dictionary. Placeholder text uses a parallel `data-i18n-ph` attribute.

Dynamic (JS-generated) strings — tips, banners, badge text, the print report — are **not** in the dictionary; each call site branches on `currentLang` directly with inline ternaries.

**Known trap:** static elements' *initial* HTML content is cosmetic only — the dictionary entry is what actually renders, since `applyStaticTranslations()` overwrites it immediately on load. Any change to a numbered section label (e.g. renumbering) must be made in **both** the HTML and the corresponding dictionary entries in both languages, or the dictionary's stale value silently reappears. This caused a real regression once during development (renumbered sections showing old numbers) and is worth remembering for any future content changes.

Currency formatting (`euro`/`euroDec`) switches locale (`el-GR` vs `en-IE`) based on `currentLang`, so the same numeric value renders as `1.234,56 €` or `€1,234.56` correctly.

---

## 6. Input Validation

HTML `min`/`max` attributes only affect the spinner arrows — they do **not** block manually typed out-of-range values. Real enforcement happens in a `FIELD_BOUNDS` map plus a `blur` listener per field that clamps the typed value (not on every keystroke, so users can type freely mid-edit):
```
if min is set and value < min: value = min
if max is set and value > max: value = max
```
Applied bounds: percentages capped 0–100 (interest rate, EFKA rate, savings %, investment return), non-negative amounts everywhere, sane upper caps on hour fields (300) and terms (installments ≤600, investment years ≤100).

---

## 7. Known Limitations

- Extra-hours premium tiers beyond +40% (the 150-hour/year threshold and illegal-overtime rates) are not modeled (§4.5).
- The bonus-to-vehicle-expense allocation assumes exactly three fixed expense categories; it isn't generalized for arbitrary category counts.
- No persistence — there is intentionally no save/load mechanism (removed by design once the print report existed as an alternative); each session starts from defaults.
- Loan prepayment assumes no fees/insurance/early-repayment penalties.
- A ~1-cent discrepancy occasionally appears in some display splits, sourced from floating-point rounding order differences versus an independent reference implementation; it does not affect final totals and has been reproduced and judged negligible.

---

## 8. Deployment & SEO

Hosted on GitHub Pages (`main` branch, root). SEO surface: descriptive `<title>`/`<meta description>`, Open Graph + Twitter Card tags with a generated 1200×630 preview image, `sitemap.xml`, `robots.txt`, Google Search Console verification (both meta-tag and HTML-file methods present for redundancy). `lang="el"` on `<html>` ensures correct Greek uppercase mapping (tonos-stripping) wherever `text-transform:uppercase` is used — this only works correctly when the language attribute is set, which is worth remembering if the markup is ever repurposed (e.g. the OG-image generation template initially lacked it and rendered incorrectly as a result).
