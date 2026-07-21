# Personal Finance Dashboard (Οικονομικός Πίνακας Ελέγχου)

A free, single-file, bilingual (Greek/English) web calculator for Greek payroll, loans, and personal budgeting. No sign-up, no backend, no tracking — everything runs client-side in the browser.

**Live site:** https://thgoulis.github.io/personal-finance-dashboard/

---

## What it does

The tool is organized into four connected tabs, each feeding data into the others:

### 1. Salary & Bonuses
- Net salary calculation from gross, using the current Greek employee tax scale (2026), with three age-based brackets:
  - Over 30 (standard scale)
  - 26–30 years old (flat 9% up to €20,000, then standard scale)
  - Up to 25 years old (0% tax up to €20,000, then standard scale)
- Christmas bonus, Easter bonus, and leave allowance, prorated automatically by hire date
- Overwork (+20%), overtime (+40%), and holiday-work (+75% supplement) extra pay, combined with the regular salary and taxed/insured together through the same progressive scale (confirmed against a real payslip)
- Annual tax credit tapering (€777 base, reduced €20 per €1,000 of income above €12,000)

### 2. Budget
- Personal monthly budget: income, fixed expenses, available balance
- Savings percentage suggestion, feeding automatically into the investment calculator
- Investment calculator: starting amount, contributions, compound interest, with a year-by-year growth chart
- Vacation/activities fund, fed by any bonus surplus left over after vehicle expenses

### 3. Vehicle Expenses
- Fixed annual costs (insurance, road tax, service) and operating monthly costs (fuel, parking, other)
- Fully independent of whether a loan exists — usable for a vehicle owned outright

### 4. Loan
- French amortization schedule (fixed monthly payment), with yearly/monthly views
- Partial prepayment scenarios: shorten the term or lower the payment
- Debt-to-income indicator, flagging when the payment exceeds the 30–35% rule of thumb Greek banks typically use for loan affordability

---

## Design notes

- **No backend, no build step.** It's one HTML file with inline CSS and JavaScript. Open it directly in a browser or host it anywhere that serves static files.
- **Bilingual.** A single toggle switches every label, tip, and generated report between Greek and English. Currency formatting adapts to the selected language's locale.
- **Input validation.** Numeric fields are clamped to sensible bounds (percentages capped at 100%, non-negative amounts, etc.) on blur.
- **Printable report.** A dedicated print view summarizes the active tabs into a clean, non-interactive report.

## Disclaimer

This tool is provided for indicative purposes only, with no guarantee of accuracy. It does not constitute tax, legal, or financial advice. For decisions that commit you, consult a qualified professional (accountant, payroll manager, or bank advisor).

## Running locally

No installation needed — clone the repo and open `index.html` in any modern browser:

```bash
git clone https://github.com/thgoulis/personal-finance-dashboard.git
cd personal-finance-dashboard
open index.html   # or just double-click the file
```

## Deploying your own copy

The repo is set up for GitHub Pages (Settings → Pages → deploy from `main` branch, root folder). Any static host (Netlify, Vercel, Cloudflare Pages) works the same way — just upload `index.html`.

## License

See repository license file (or add one — this project doesn't currently declare a license).
