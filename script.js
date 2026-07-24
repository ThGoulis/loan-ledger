// --- Language / i18n ---
const TRANSLATIONS = {
  el: {
  "eyebrow1": "ΜΙΣΘΟΣ, ΠΡΟΫΠΟΛΟΓΙΣΜΟΣ & ΔΑΝΕΙΟ",
  "h1title": "Οικονομικός Πίνακας Ελέγχου",
  "pageIntro1": "Δωρεάν πίνακας ελέγχου για μισθό (με φορολογική κλίμακα ανά ηλικία), δώρα, προϋπολογισμό, επενδύσεις και δάνειο — όλα συνδεδεμένα σε ένα εργαλείο.",
  "siteFooter1": "Το εργαλείο παρέχεται ενδεικτικά, χωρίς καμία εγγύηση ακρίβειας — δεν αποτελεί φορολογική, νομική ή χρηματοοικονομική συμβουλή. Για αποφάσεις που σας δεσμεύουν, συμβουλευτείτε αρμόδιο επαγγελματία (λογιστή, μισθοδοσία, τραπεζικό σύμβουλο).",
  "startHint1": "\u2192 Ξεκίνα από το tab «Μισθός & Δώρα» για να υπολογίσεις πρώτα το καθαρό σου εισόδημα.",
  "introT1": "Μισθός & Δώρα",
  "introD1": " — καθαρός μισθός, φόρος ανά ηλικία, δώρα Χριστουγέννων/Πάσχα, επίδομα αδείας.",
  "introT2": "Προϋπολογισμός",
  "introD2": " — πόσο σου μένει τον μήνα, πρόταση αποταμίευσης, αποθεματικό διακοπών.",
  "introT3": "Δάνειο",
  "introD3": " — δόση, τόκοι, σενάρια μερικής αποπληρωμής.",
  "introT4": "Έξοδα Οχήματος",
  "introD4": " — ασφάλεια, τέλη, service, καύσιμα (ανεξάρτητα από το αν υπάρχει δάνειο).",
  "introT5": "Επενδύσεις",
  "introD5": " — υπολογιστής ανατοκισμού με τακτικές καταθέσεις.",
  "introExample": "Παράδειγμα: μικτός μισθός 1.500€ → καθαρός ~1.165€ · δάνειο 3.000€ σε 24 δόσεις στο 10% → δόση ~138€/μήνα.",
  "btn43": "Αποθήκευση",
  "btn44": "Προεπιλεγμένες τιμές",
  "btn45": "Εκτύπωση αναφοράς",
  "sumlbl1": "Καθαρός μισθός",
  "sumlbl2": "Προτ. αποταμίευση",
  "sumlbl3": "Δόση δανείου",
  "sumlbl4": "Διαθέσιμο υπόλοιπο",
  "sumlbl5": "Υπόλοιπο μετά την αποταμίευση",
  "btn46": "Μισθός & Δώρα",
  "btn47": "Μπάτζετ",
  "btn48": "Δάνειο",
  "btn49": "Έξοδα Οχήματος",
  "btn50b": "Επένδυση",
  "ariaHub": "Πίνακας",
  "hubSalarySub": "καθαρά αυτόν τον μήνα",
  "hubInvestSub": "τελικό υπόλοιπο",
  "hubMotoSub": "ανά μήνα",
  "hubHint": "\u2192 Πάτα σε μια κάρτα για λεπτομέρειες",
  "h234": "<span class=\"num\">7</span> Στοιχεία Δανείου",
  "lbl1": "Ποσό δανείου",
  "unit97": "€",
  "lbl2": "Προκαταβολή",
  "unit98": "€",
  "lbl3": "Διάρκεια αποπληρωμής",
  "unit99": "δόσεις",
  "lbl4": "Ετήσιο επιτόκιο",
  "unit100": "%",
  "btn50": "Καθαρισμός πεδίων δανείου <span style=\"font-weight:400;\">(εκτός επιτοκίου)</span>",
  "h235": "<span class=\"num\">8</span> Αποτελέσματα",
  "reslbl66": "Μηνιαία δόση",
  "dtiNote1": "Παρακαλώ συμπληρώστε τα πάγια έξοδα του μήνα (συμπεριλαμβανομένων ενοικίου, λογαριασμών και δανείων) στα <a href=\"#\" id=\"dtiFixedExpensesLink\">Λοιπά σταθερά μηνιαία έξοδα</a>, με σκοπό τον καλύτερο υπολογισμό του πραγματικού διαθέσιμου υπολοίπου σου.",
  "reslbl67": "Χρηματοδοτούμενο κεφάλαιο",
  "reslbl68": "Σύνολο τόκων",
  "reslbl69": "Τελικό συνολικό κόστος",
  "reslbl70": "Αριθμός δόσεων",
  "legend1": "Κεφάλαιο",
  "legend2": "Τόκοι",
  "btn51": "Ετήσια προβολή",
  "btn52": "Μηνιαία προβολή",
  "lbl5": "Φίλτρο μηνών",
  "unit101": "από δόση",
  "unit102": "έως δόση",
  "th126": "Δόση",
  "th127": "Ποσό δόσης",
  "th128": "Τόκοι",
  "th129": "Κεφάλαιο",
  "th130": "Υπόλοιπο",
  "h236": "<span class=\"num\">9</span> Μερική Αποπληρωμή",
  "lbl6": "Μήνας εφαρμογής έκτακτης καταβολής",
  "unit103": "μήνας",
  "lbl7": "Ποσό μερικής αποπληρωμής",
  "unit104": "€",
  "lbl8": "Τι θέλετε να πετύχει η καταβολή;",
  "btn53": "Μείωση διάρκειας",
  "btn54": "Μείωση δόσης",
  "btn55": "ΥΠΟΛΟΓΙΣΜΟΣ ΣΕΝΑΡΙΟΥ",
  "h3a": "Χωρίς έκτακτη καταβολή",
  "rowlbl1": "Δόση",
  "rowlbl2": "Υπόλοιπες δόσεις",
  "rowlbl3": "Τόκοι υπολοίπου διάρκειας",
  "h3b": "Με έκτακτη καταβολή",
  "rowlbl4": "Δόση",
  "rowlbl5": "Υπόλοιπες δόσεις",
  "rowlbl6": "Τόκοι υπολοίπου διάρκειας",
  "note92": "Η προσομοίωση υπολογίζει το ανεξόφλητο κεφάλαιο τον μήνα εφαρμογής, αφαιρεί το ποσό της έκτακτης καταβολής και είτε διατηρεί σταθερή τη δόση (μειώνοντας τη διάρκεια) είτε διατηρεί σταθερή την υπόλοιπη διάρκεια (μειώνοντας τη δόση). Οι υπολογισμοί είναι ενδεικτικοί — δεν λαμβάνουν υπόψη έξοδα, ασφάλιστρα ή ενδεχόμενες προμήθειες πρόωρης αποπληρωμής.",
  "h237": "<span class=\"num\">1</span> Μισθός & Δώρα <span style=\"font-weight:400;font-size:11px;color:var(--ink-soft);\">(σύστημα 14 μισθών)</span>",
  "lbl9": "Μικτός μηνιαίος μισθός (τακτικός)",
  "unit105": "€",
  "lbl10": "Ημερομηνία πρόσληψης",
  "lbl11": "Ασφαλιστικές κρατήσεις εργαζομένου",
  "unit106": "%",
  "lbl12": "Βασική ετήσια μείωση φόρου <span style=\"font-weight:400;\">(777€ χωρίς τέκνα — προσαρμόστε βάσει τέκνων, μειώνεται αυτόματα με το εισόδημα)</span>",
  "unit107": "€/έτος",
  "lbl13": "Ηλικία <span style=\"font-weight:400;\">(επηρεάζει τη φορολογική κλίμακα)</span>",
  "opt56": "Έως 25 ετών",
  "opt57": "26 έως 30 ετών",
  "opt58": "Άνω των 30 ετών",
  "lbl14": "Ώρες υπερεργασίας <span style=\"font-weight:400;\">(μηνιαίες, +20%)</span>",
  "unit108": "ώρες",
  "lbl15": "Ώρες αργίας <span style=\"font-weight:400;\">(μηνιαίες, +75%)</span>",
  "unit109": "ώρες",
  "lbl16": "Ώρες υπερωρίας <span style=\"font-weight:400;\">(μηνιαίες, +40%)</span>",
  "unit110": "ώρες",
  "lbl17": "Έξτρα καθαρά μηνιαία <span style=\"font-weight:400;\">(π.χ. Ticket Restaurant)</span>",
  "unit111": "€",
  "reslbl71": "Μικτός μηνιαίος μισθός",
  "reslbl72": "Κρατήσεις ΕΦΚΑ",
  "reslbl73": "Φορολογητέος μισθός",
  "reslbl74": "Μηνιαίος φόρος εισοδήματος",
  "reslbl75": "Καθαρός μηνιαίος μισθός (τακτικός)",
  "reslbl76": "Πρόσθετες αμοιβές <span style=\"font-weight:400;\">(υπερεργασία/αργία/υπερωρία, καθαρό)</span>",
  "reslbl77": "Σύνολο καθαρών μηνιαίων αποδοχών",
  "th131": "Παροχή (φετινή περίοδος)",
  "th132": "Μικτό",
  "th133": "Καθαρό",
  "th134": "Ετήσια εικόνα (14 μισθοί)",
  "th135": "Ποσό",
  "note93": "<p>Ενδεικτικός υπολογισμός με βάση την ισχύουσα φορολογική κλίμακα μισθωτών, η οποία διαφοροποιείται ανάλογα με την ηλικία: <strong>άνω των 30</strong> — 9% έως 10.000€ · 20% από 10.000,01 έως 20.000€ · 26% από 20.000,01 έως 30.000€ · 34% από 30.000,01 έως 40.000€ · 39% από 40.000,01 έως 60.000€ · 44% άνω των 60.000€. <strong>26 έως 30 ετών</strong> — 9% flat έως 20.000€, μετά ίδιο με την βασική κλίμακα (26%/34%/39%/44%). <strong>Έως 25 ετών</strong> — μηδενικός φόρος έως 20.000€, μετά ίδιο με την βασική κλίμακα. Η επιλογή ηλικίας δεν επηρεάζει τις κρατήσεις ΕΦΚΑ ή τη μείωση φόρου, μόνο την κλίμακα φόρου.</p><p>Η ετήσια μείωση φόρου που εισάγετε ισχύει ακέραιη για φορολογητέο εισόδημα έως 12.000€ και μειώνεται κατά 20€ για κάθε 1.000€ επιπλέον εισοδήματος — γι' αυτό υπολογίζεται αυτόματα ξανά για οποιοδήποτε μικτό μισθό βάλετε.</p><p>Τα δώρα/επίδομα υπολογίζονται αναλογικά με βάση τις ημέρες απασχόλησης εντός της αντίστοιχης περιόδου (1/5-31/12 για Χριστούγεννα και Επίδομα Αδείας, 1/1-30/4 για Πάσχα) και φορολογούνται με τον ίδιο μέσο συντελεστή του τακτικού μισθού.</p><p>Για τις πρόσθετες αμοιβές (υπερεργασία: ωρομίσθιο +20% · υπερωρία: ωρομίσθιο +40% · αργία: μόνο η προσαύξηση 75% του ωρομισθίου, αφού η βασική αμοιβή της ημέρας καλύπτεται ήδη από τον μηνιαίο μισθό — όπου ωρομίσθιο = μικτός μισθός/25/6,667), το μικτό ποσό τους προστίθεται στον μηνιαίο μισθό και το σύνολο φορολογείται και ασφαλίζεται μαζί μέσω της ίδιας προοδευτικής κλίμακας — επιβεβαιωμένο βάσει πραγματικής μισθοδοσίας. Το καθαρό ποσό πρόσθετων αμοιβών που εμφανίζεται είναι η οριακή διαφορά που προσθέτουν στο συνολικό καθαρό, όχι ξεχωριστός υπολογισμός.</p><p>Για να διατηρήσετε ακέραιη τη μείωση φόρου, θυμηθείτε ότι απαιτείται να καλύψετε το αντίστοιχο ποσό ηλεκτρονικών συναλλαγών (κάρτες/e-banking) μέσα στο έτος. Η ακριβής μισθοδοσία σας ενδέχεται να διαφέρει ελαφρώς — για ακριβή στοιχεία συμβουλευτείτε τον υπεύθυνο μισθοδοσίας σας.</p>",
  "h238": "<span class=\"num\">2</span> Προσωπικός Προϋπολογισμός",
  "lbl18": "Μηνιαίο καθαρό εισόδημα <span style=\"font-weight:400;\">(συμπληρώνεται αυτόματα από τον καθαρό μηνιαίο μισθό — μπορείτε να το αλλάξετε)</span>",
  "unit112": "€",
  "lbl19": "Λοιπά σταθερά μηνιαία έξοδα <span style=\"font-weight:400;\">(ενοίκιο, λογαριασμοί, λοιπά δάνεια κ.λπ.)</span>",
  "unit113": "€",
  "reslbl78": "Δόση δανείου",
  "reslbl79": "Πάγια έξοδα οχήματος (ισοδύναμο/μήνα)",
  "reslbl80": "Λειτουργικά έξοδα οχήματος/μήνα",
  "reslbl81": "Συνολικό μηνιαίο κόστος οχήματος",
  "reslbl82": "Διαθέσιμο υπόλοιπο <span style=\"font-weight:400;\">(χωρίς δώρα)</span>",
  "reslbl83": "Διαθέσιμο υπόλοιπο <span style=\"font-weight:400;\">(με δώρα)</span>",
  "lbl20": "Ποσοστό αποταμίευσης <span style=\"font-weight:400;\">(από το διαθέσιμο υπόλοιπο, αν είναι θετικό)</span>",
  "unit114": "%",
  "reslbl84": "Υπόλοιπο <span style=\"font-weight:400;\">(πριν την αποταμίευση)</span>",
  "reslbl85": "Προτεινόμενη αποταμίευση <span style=\"font-weight:400;\">(% επί του υπολοίπου χωρίς δώρα)</span>",
  "reslbl86": "Υπόλοιπο <span style=\"font-weight:400;\">(μετά την αποταμίευση)</span>",
  "note94": "Το \"ισοδύναμο/μήνα\" προκύπτει διαιρώντας τα ετήσια πάγια έξοδα (ασφάλεια, τέλη, service) διά 12, ώστε να αποτυπώνεται ρεαλιστικά η μηνιαία επιβάρυνση, ακόμη κι αν πληρώνονται εφάπαξ μία φορά τον χρόνο. \"Χωρίς δώρα\" = μόνο ο τακτικός καθαρός μισθός + έξτρα καθαρά, μείον σταθερά έξοδα και κόστος οχήματος. \"Με δώρα\" προσθέτει επιπλέον τον μέσο μηνιαίο όρο των καθαρών δώρων/επιδόματος (άθροισμα ÷ 12), για μια πιο ρεαλιστική εικόνα σε ετήσια βάση.",
  "h239": "<span class=\"num\">4</span> Επενδυτικός Υπολογιστής",
  "lbl21": "Αρχικό ποσό",
  "unit115": "€",
  "lbl22": "Έτη επένδυσης",
  "unit116": "έτη",
  "lbl23": "Επιπλέον καταθέσεις <span style=\"font-weight:400;\">(συμπληρώνεται αυτόματα από την προτεινόμενη αποταμίευση — μπορείτε να το αλλάξετε)</span>",
  "unit117": "€",
  "resync1": "\u21ba Επανασύνδεση με την προτεινόμενη αποταμίευση",
  "lbl24": "Συχνότητα καταθέσεων",
  "opt59": "Μηνιαία",
  "opt60": "Τριμηνιαία",
  "opt61": "Ετήσια",
  "lbl25": "Υποθετικό ετήσιο ποσοστό απόδοσης",
  "unit118": "%",
  "lbl26": "Ανατοκισμός",
  "opt62": "Ετήσιος",
  "opt63": "Τριμηνιαίος",
  "opt64": "Μηνιαίος",
  "opt65": "Ημερήσιος",
  "reslbl87": "Συνολικές καταθέσεις",
  "reslbl88": "Συνολικά κέρδη",
  "reslbl89": "Τελικό υπόλοιπο",
  "legend3": "Καταθέσεις",
  "legend4": "Κέρδη",
  "note95": "Υποθετικός υπολογισμός με σταθερό ετήσιο ποσοστό απόδοσης (χωρίς διακυμάνσεις αγοράς) και τακτικές καταθέσεις. Δεν λαμβάνει υπόψη φόρους, προμήθειες διαχείρισης ή πληθωρισμό. Μια επενδυτική στρατηγική τακτικών καταθέσεων δεν εγγυάται κέρδος ούτε προστατεύει από ζημία — τα πραγματικά αποτελέσματα θα διαφέρουν.",
  "h240": "<span class=\"num\">3</span> Αποθεματικό",
  "lbl27": "Ήδη αποταμιευμένα",
  "unit119": "€",
  "reslbl90": "Προτεινόμενη προσθήκη <span style=\"font-weight:400;\">(πλεόνασμα δώρων φέτος)</span>",
  "reslbl91": "Νέο σύνολο αν το προσθέσεις",
  "note96": "Ένα ξεχωριστό αποθεματικό για ό,τι εσύ θέλεις — διακοπές, απρόοπτα έξοδα, ή οποιονδήποτε άλλο στόχο. Δεν είναι μέρος του τακτικού μηνιαίου προϋπολογισμού· τροφοδοτείται από το πλεόνασμα των δώρων, αφού πρώτα καλυφθούν τα πάγια έξοδα οχήματος (αν υπάρχουν). Το πεδίο \"ήδη αποταμιευμένα\" το ενημερώνεις εσύ χειροκίνητα, κάθε φορά που προσθέτεις ή ξοδεύεις από αυτό.",
  "h241": "<span class=\"num\">5</span> Πάγια Έξοδα Οχήματος <span style=\"font-weight:400;font-size:11px;color:var(--ink-soft);\">(ετήσια)</span>",
  "lbl28": "Ασφάλεια",
  "unit120": "€/έτος",
  "lbl29": "Τέλη κυκλοφορίας",
  "unit121": "€/έτος",
  "lbl30": "Service / συντήρηση",
  "unit122": "€/έτος",
  "h242": "<span class=\"num\">6</span> Λειτουργικά Έξοδα <span style=\"font-weight:400;font-size:11px;color:var(--ink-soft);\">(μηνιαία)</span>",
  "lbl31": "Καύσιμα",
  "unit123": "€/μήνα",
  "lbl32": "Πάρκινγκ",
  "unit124": "€/μήνα",
  "lbl33": "Λοιπά (πλυντήριο, εξαρτήματα κ.λπ.)",
  "unit125": "€/μήνα",
  "hireDatePh": "ηη/μμ/εεεε",
  "tdlbl1": "Συνολικό φορολογητέο εισόδημα",
  "tdlbl2": "Αρχικός φόρος κλίμακας",
  "tdlbl3": "Ετήσια μείωση φόρου (μετά την αναλογική μείωση)",
  "tdlbl4": "Τελικός ετήσιος φόρος",
  "tdlbl5": "Απαιτούμενες ηλεκτρονικές συναλλαγές (30%)",
  "tdlbl6": "Δώρο Χριστουγέννων",
  "tdlbl7": "Δώρο Πάσχα",
  "tdlbl8": "Επίδομα Αδείας"
},
  en: {
  "eyebrow1": "SALARY, BUDGET & LOAN",
  "h1title": "Personal Finance Dashboard",
  "pageIntro1": "A free dashboard for salary (with the age-based tax scale), bonuses, budget, investments, and loans \u2014 all connected in one tool.",
  "siteFooter1": "This tool is provided for indicative purposes only, with no guarantee of accuracy \u2014 it does not constitute tax, legal, or financial advice. For decisions that commit you, consult a qualified professional (accountant, payroll manager, or bank advisor).",
  "startHint1": "\u2192 Start with the \u00abSalary & Bonuses\u00bb tab to work out your net income first.",
  "introT1": "Salary & Bonuses",
  "introD1": " \u2014 net salary, age-based tax, Christmas/Easter bonuses, leave allowance.",
  "introT2": "Budget",
  "introD2": " \u2014 what's left each month, a savings suggestion, and the vacation fund.",
  "introT3": "Loan",
  "introD3": " \u2014 payment, interest, partial-prepayment scenarios.",
  "introT4": "Vehicle Expenses",
  "introD4": " \u2014 insurance, road tax, service, fuel (independent of whether there's a loan).",
  "introT5": "Investments",
  "introD5": " \u2014 compound-interest calculator with regular contributions.",
  "introExample": "Example: gross salary \u20ac1,500 \u2192 net ~\u20ac1,165 \u00b7 \u20ac3,000 loan over 24 installments at 10% \u2192 payment ~\u20ac138/month.",
  "btn43": "Save",
  "btn44": "Reset to Defaults",
  "btn45": "Print Report",
  "sumlbl1": "Net Salary",
  "sumlbl2": "Sugg. Savings",
  "sumlbl3": "Loan Payment",
  "sumlbl4": "Available Balance",
  "sumlbl5": "Balance After Savings",
  "btn46": "Salary & Bonuses",
  "btn47": "Budget",
  "btn48": "Loan",
  "btn49": "Vehicle Expenses",
  "btn50b": "Investments",
  "ariaHub": "Dashboard",
  "hubSalarySub": "net this month",
  "hubInvestSub": "final balance",
  "hubMotoSub": "per month",
  "hubHint": "\u2192 Tap a card for details",
  "h234": "<span class=\"num\">7</span> Loan Details",
  "lbl1": "Loan Amount",
  "unit97": "€",
  "lbl2": "Down Payment",
  "unit98": "€",
  "lbl3": "Repayment Term",
  "unit99": "installments",
  "lbl4": "Annual Interest Rate",
  "unit100": "%",
  "btn50": "Clear Loan Fields <span style=\"font-weight:400;\">(except interest rate)</span>",
  "h235": "<span class=\"num\">8</span> Results",
  "reslbl66": "Monthly Payment",
  "dtiNote1": "Please fill in your fixed monthly expenses (including rent, bills, and loans) in <a href=\"#\" id=\"dtiFixedExpensesLink\">Other Fixed Monthly Expenses</a>, for a more accurate calculation of your actual available balance.",
  "reslbl67": "Financed Principal",
  "reslbl68": "Total Interest",
  "reslbl69": "Total Final Cost",
  "reslbl70": "Number of Installments",
  "legend1": "Principal",
  "legend2": "Interest",
  "btn51": "Yearly View",
  "btn52": "Monthly View",
  "lbl5": "Month Filter",
  "unit101": "from installment",
  "unit102": "to installment",
  "th126": "Inst.",
  "th127": "Payment Amount",
  "th128": "Interest",
  "th129": "Principal",
  "th130": "Balance",
  "h236": "<span class=\"num\">9</span> Partial Prepayment",
  "lbl6": "Month of Extra Payment",
  "unit103": "month",
  "lbl7": "Prepayment Amount",
  "unit104": "€",
  "lbl8": "What do you want the payment to achieve?",
  "btn53": "Shorten Term",
  "btn54": "Lower Payment",
  "btn55": "CALCULATE SCENARIO",
  "h3a": "Without Extra Payment",
  "rowlbl1": "Payment",
  "rowlbl2": "Remaining Installments",
  "rowlbl3": "Interest over Remaining Term",
  "h3b": "With Extra Payment",
  "rowlbl4": "Payment",
  "rowlbl5": "Remaining Installments",
  "rowlbl6": "Interest over Remaining Term",
  "note92": "The simulation calculates the outstanding principal in the month the payment is applied, subtracts the extra payment amount, and either keeps the payment fixed (shortening the term) or keeps the remaining term fixed (lowering the payment). The figures are indicative -- they do not account for fees, insurance, or possible early-repayment charges.",
  "h237": "<span class=\"num\">1</span> Salary & Bonuses <span style=\"font-weight:400;font-size:11px;color:var(--ink-soft);\">(14-payment system)</span>",
  "lbl9": "Gross Monthly Salary (Regular)",
  "unit105": "€",
  "lbl10": "Hire Date",
  "lbl11": "Employee Social Security Contributions",
  "unit106": "%",
  "lbl12": "Base Annual Tax Credit <span style=\"font-weight:400;\">(EUR777 with no children -- adjust based on children, tapers automatically with income)</span>",
  "unit107": "€/yr",
  "lbl13": "Age <span style=\"font-weight:400;\">(affects the tax scale)</span>",
  "opt56": "Up to 25 years old",
  "opt57": "26 to 30 years old",
  "opt58": "Over 30 years old",
  "lbl14": "Overwork Hours <span style=\"font-weight:400;\">(monthly, +20%)</span>",
  "unit108": "hrs",
  "lbl15": "Holiday-Work Hours <span style=\"font-weight:400;\">(monthly, +75%)</span>",
  "unit109": "hrs",
  "lbl16": "Overtime Hours <span style=\"font-weight:400;\">(monthly, +40%)</span>",
  "unit110": "hrs",
  "lbl17": "Extra Net Monthly <span style=\"font-weight:400;\">(e.g. Ticket Restaurant)</span>",
  "unit111": "€",
  "reslbl71": "Gross Monthly Salary",
  "reslbl72": "Social Security Contributions",
  "reslbl73": "Taxable Salary",
  "reslbl74": "Monthly Income Tax",
  "reslbl75": "Net Monthly Salary (Regular)",
  "reslbl76": "Extra Pay <span style=\"font-weight:400;\">(overwork/holiday/overtime, net)</span>",
  "reslbl77": "Total Net Monthly Earnings",
  "th131": "Benefit (this years period)",
  "th132": "Gross",
  "th133": "Net",
  "th134": "Annual Picture (14 salaries)",
  "th135": "Amount",
  "note93": "<p>Indicative calculation based on the current employee tax scale, which varies by age: <strong>over 30</strong> -- 9% up to EUR10,000, 20% from EUR10,000.01 to EUR20,000, 26% from EUR20,000.01 to EUR30,000, 34% from EUR30,000.01 to EUR40,000, 39% from EUR40,000.01 to EUR60,000, 44% above EUR60,000. <strong>26 to 30 years old</strong> -- flat 9% up to EUR20,000, then same as the base scale (26%/34%/39%/44%). <strong>Up to 25 years old</strong> -- zero tax up to EUR20,000, then same as the base scale. The age selection only affects the tax scale, not social security contributions or the tax credit.</p><p>The annual tax credit you enter applies in full for taxable income up to EUR12,000 and decreases by EUR20 for every EUR1,000 of extra income -- that is why it is automatically recalculated for whatever gross salary you enter.</p><p>Bonuses/allowances are calculated proportionally based on days employed within the relevant period (5/1 to 12/31 for the Christmas bonus and Leave Allowance, 1/1 to 4/30 for Easter) and are taxed at the same average rate as the regular salary.</p><p>For extra pay (overwork: hourly rate +20%, overtime: hourly rate +40%, holiday work: only the 75% supplement, since the base pay for that day is already covered by the monthly salary -- where hourly rate = gross salary / 25 / 6.667), the gross amount is added to the monthly salary and the combined total is taxed and insured together through the same progressive scale -- confirmed against a real payslip. The net amount shown for extra pay is the marginal difference it adds to the total net, not a separate calculation.</p><p>To keep the full tax credit, remember you need to cover the corresponding amount in electronic payments (cards/e-banking) during the year. Your actual payroll may differ slightly -- for exact figures, consult your payroll department.</p>",
  "h238": "<span class=\"num\">2</span> Personal Budget",
  "lbl18": "Net Monthly Income <span style=\"font-weight:400;\">(auto-filled from net monthly salary -- you can change it)</span>",
  "unit112": "€",
  "lbl19": "Other Fixed Monthly Expenses <span style=\"font-weight:400;\">(rent, bills, other loans, etc.)</span>",
  "unit113": "€",
  "reslbl78": "Loan Payment",
  "reslbl79": "Fixed Vehicle Expenses (monthly equiv.)",
  "reslbl80": "Operating Vehicle Expenses/month",
  "reslbl81": "Total Monthly Vehicle Cost",
  "reslbl82": "Available Balance <span style=\"font-weight:400;\">(without bonuses)</span>",
  "reslbl83": "Available Balance <span style=\"font-weight:400;\">(with bonuses)</span>",
  "lbl20": "Savings Percentage <span style=\"font-weight:400;\">(of the available balance, if positive)</span>",
  "unit114": "%",
  "reslbl84": "Balance <span style=\"font-weight:400;\">(before savings)</span>",
  "reslbl85": "Suggested Savings <span style=\"font-weight:400;\">(% of balance without bonuses)</span>",
  "reslbl86": "Balance <span style=\"font-weight:400;\">(after savings)</span>",
  "note94": "The monthly equivalent comes from dividing annual fixed expenses (insurance, road tax, service) by 12, to realistically reflect the monthly burden even though they are paid once a year. Without bonuses = only the regular net salary + extra net, minus fixed expenses and vehicle cost. With bonuses additionally adds the average monthly share of net bonuses/allowance (total divided by 12), for a more realistic year-round picture.",
  "h239": "<span class=\"num\">4</span> Investment Calculator",
  "lbl21": "Starting Amount",
  "unit115": "€",
  "lbl22": "Years to Invest",
  "unit116": "yrs",
  "lbl23": "Additional Contributions <span style=\"font-weight:400;\">(auto-filled from the suggested savings -- you can change it)</span>",
  "unit117": "€",
  "resync1": "\u21ba Re-sync with suggested savings",
  "lbl24": "Contribution Frequency",
  "opt59": "Monthly",
  "opt60": "Quarterly",
  "opt61": "Annually",
  "lbl25": "Hypothetical Annual Rate of Return",
  "unit118": "%",
  "lbl26": "Compounding",
  "opt62": "Annually",
  "opt63": "Quarterly",
  "opt64": "Monthly",
  "opt65": "Daily",
  "reslbl87": "Total Contributions",
  "reslbl88": "Total Growth",
  "reslbl89": "Final Balance",
  "legend3": "Contributions",
  "legend4": "Growth",
  "note95": "Hypothetical calculation with a fixed annual rate of return (no market fluctuation) and regular contributions. Does not account for taxes, management fees, or inflation. A program of regular investing does not guarantee a profit or protect against a loss -- actual results will vary.",
  "h240": "<span class=\"num\">3</span> Reserve Fund",
  "lbl27": "Already Saved",
  "unit119": "€",
  "reslbl90": "Suggested Addition <span style=\"font-weight:400;\">(this years bonus surplus)</span>",
  "reslbl91": "New Total If Added",
  "note96": "A separate reserve for whatever you want it to be -- vacations, unexpected expenses, or any other goal. It is not part of the regular monthly budget; it is fed by the bonus surplus, after covering fixed vehicle expenses (if any). You update the \"already saved\" field manually, each time you add to or spend from it.",
  "h241": "<span class=\"num\">5</span> Fixed Vehicle Expenses <span style=\"font-weight:400;font-size:11px;color:var(--ink-soft);\">(annual)</span>",
  "lbl28": "Insurance",
  "unit120": "€/yr",
  "lbl29": "Road Tax",
  "unit121": "€/yr",
  "lbl30": "Service / Maintenance",
  "unit122": "€/yr",
  "h242": "<span class=\"num\">6</span> Operating Expenses <span style=\"font-weight:400;font-size:11px;color:var(--ink-soft);\">(monthly)</span>",
  "lbl31": "Fuel",
  "unit123": "€/mo",
  "lbl32": "Parking",
  "unit124": "€/mo",
  "lbl33": "Other (car wash, parts, etc.)",
  "unit125": "€/mo",
  "hireDatePh": "dd/mm/yyyy",
  "tdlbl1": "Total Taxable Income",
  "tdlbl2": "Initial Scale Tax",
  "tdlbl3": "Annual Tax Credit (after proportional reduction)",
  "tdlbl4": "Final Annual Tax",
  "tdlbl5": "Required Electronic Transactions (30%)",
  "tdlbl6": "Christmas Bonus",
  "tdlbl7": "Easter Bonus",
  "tdlbl8": "Leave Allowance"
}
};
let currentLang = 'el';

function applyStaticTranslations(){
  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if(dict[key] !== undefined) el.placeholder = dict[key];
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if(dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });
  document.documentElement.lang = currentLang;
  document.title = currentLang === 'en' ? 'Personal Finance Dashboard — Net Salary, Loan & Budget Calculator' : 'Οικονομικός Πίνακας Ελέγχου — Υπολογισμός Καθαρού Μισθού, Δανείου & Προϋπολογισμού';
  const toggleBtn = document.getElementById('langToggleBtn');
  if(toggleBtn) toggleBtn.textContent = currentLang === 'el' ? '\uD83C\uDF10 EN' : '\uD83C\uDF10 EL';
}

function setLanguage(lang){
  currentLang = lang;
  try { localStorage.setItem('vivlio-lang', lang); } catch(err) {}
  applyStaticTranslations();
  if(typeof updateStampDate === 'function') updateStampDate();
  // re-run all computations so dynamically generated text (tips, banners, badges, print report)
  // regenerates in the newly selected language
  recompute();
  recomputeSalary();
  recomputeBudget();
  recomputeInvestment();
}

function loadSavedLanguage(){
  let lang = 'el';
  try { lang = localStorage.getItem('vivlio-lang') || 'el'; } catch(err) {}
  currentLang = lang;
  applyStaticTranslations();
  if(typeof updateStampDate === 'function') updateStampDate();
}

const euro = v => v.toLocaleString(currentLang==='en' ? 'en-IE' : 'el-GR', {style:'currency', currency:'EUR', maximumFractionDigits:0});
const euroDec = v => v.toLocaleString(currentLang==='en' ? 'en-IE' : 'el-GR', {style:'currency', currency:'EUR', minimumFractionDigits:2, maximumFractionDigits:2});

function updateStampDate(){
  document.getElementById('stampDate').textContent = (currentLang==='en' ? 'Calculation date: ' : 'Ημ/νία υπολογισμού: ') + new Date().toLocaleDateString(currentLang==='en' ? 'en-GB' : 'el-GR');
}
updateStampDate();

function getInputs(){
  const amount = parseFloat(document.getElementById('amount').value)||0;
  const down = parseFloat(document.getElementById('down').value)||0;
  const months = Math.max(Math.round(parseFloat(document.getElementById('installments').value)||1), 1);
  const rate = parseFloat(document.getElementById('rate').value)||0;
  const principal = Math.max(amount - down, 0);
  const r = (rate/100)/12;
  return {amount, down, rate, principal, months, r};
}

function monthlyPayment(principal, r, months){
  if(months<=0) return 0;
  if(r === 0) return principal/months;
  return principal * r / (1 - Math.pow(1+r, -months));
}

function buildSchedule(principal, r, months, M){
  let balance = principal;
  const schedule = [];
  for(let i=1;i<=months && balance > 0.01;i++){
    const interest = balance*r;
    let principalPaid = M - interest;
    if(principalPaid > balance) principalPaid = balance;
    balance -= principalPaid;
    schedule.push({month:i, interest, principalPaid, balance});
  }
  return schedule;
}

function renderLedger(schedule){
  const container = document.getElementById('ledgerBars');
  container.innerHTML = '';
  // group by year
  const years = {};
  schedule.forEach(row=>{
    const y = Math.ceil(row.month/12);
    if(!years[y]) years[y] = {principal:0, interest:0};
    years[y].principal += row.principalPaid;
    years[y].interest += row.interest;
  });
  const maxTotal = Math.max(...Object.values(years).map(y=>y.principal+y.interest), 1);
  Object.keys(years).forEach(y=>{
    const {principal, interest} = years[y];
    const total = principal+interest;
    const row = document.createElement('div');
    row.className = 'ledger-row';
    const widthPct = (total/maxTotal)*100;
    row.innerHTML = `
      <span class="yr">${currentLang==='en' ? 'Y' : 'Ε'}${y}</span>
      <div class="bar" style="width:${widthPct}%">
        <div class="principal" style="width:${(principal/total*100)||0}%"></div>
        <div class="interest" style="width:${(interest/total*100)||0}%"></div>
      </div>
    `;
    container.appendChild(row);
  });
}

function recompute(){
  const {principal, months, r} = getInputs();
  const M = monthlyPayment(principal, r, months);
  const schedule = buildSchedule(principal, r, months, M);
  const totalInterest = schedule.reduce((s,row)=>s+row.interest,0);
  const totalPaid = totalInterest + principal;

  document.getElementById('rMonthly').textContent = euroDec(M);
  document.getElementById('rPrincipal').textContent = euro(principal);
  document.getElementById('rInterest').textContent = euro(totalInterest);
  document.getElementById('rTotal').textContent = euro(totalPaid);
  document.getElementById('rMonths').textContent = schedule.length + (currentLang==='en' ? ' installments' : ' δόσεις');

  renderLedger(schedule);
  currentSchedule = schedule;
  const filterTo = document.getElementById('filterTo');
  if(parseInt(filterTo.value) > schedule.length || filterTo.dataset.touched !== 'true'){
    filterTo.value = Math.min(12, schedule.length);
  }
  document.getElementById('filterFrom').max = schedule.length;
  filterTo.max = schedule.length;
  if(viewMode==='monthly') renderMonthlyTable();
  lastMonthlyPayment = M;
  if(typeof recomputeBudget === 'function') recomputeBudget();
  if(typeof updateDtiIndicator === 'function') updateDtiIndicator();
  return {principal, months, r, M, schedule};
}

let currentSchedule = [];

function updateDtiIndicator(){
  const indicator = document.getElementById('dtiIndicator');
  const note = document.getElementById('dtiNote');
  const amount = parseFloat(document.getElementById('amount').value)||0;
  if(amount <= 0 || lastNetSalary <= 0){
    indicator.style.display = 'none';
    note.style.display = 'none';
    return;
  }
  const pct = (lastMonthlyPayment / lastNetSalary) * 100;
  const badge = document.getElementById('dtiBadge');
  const text = document.getElementById('dtiText');
  badge.classList.remove('ok','warn','over');

  let level, msg;
  if(pct < 30){
    level = 'ok';
    msg = currentLang==='en'
      ? `${pct.toFixed(0)}% of net salary \u2014 within the 30\u201335% rule of thumb Greek banks typically use for loan affordability.`
      : `${pct.toFixed(0)}% του καθαρού μισθού — εντός του εμπειρικού ορίου 30-35% που συνήθως εφαρμόζουν οι τράπεζες.`;
  } else if(pct <= 35){
    level = 'warn';
    msg = currentLang==='en'
      ? `${pct.toFixed(0)}% of net salary \u2014 at the edge of the 30\u201335% range banks typically allow.`
      : `${pct.toFixed(0)}% του καθαρού μισθού — στο όριο του εύρους 30-35% που συνήθως επιτρέπουν οι τράπεζες.`;
  } else {
    level = 'over';
    msg = currentLang==='en'
      ? `${pct.toFixed(0)}% of net salary \u2014 above the 30\u201335% range banks typically use; approval may be harder.`
      : `${pct.toFixed(0)}% του καθαρού μισθού — πάνω από το σύνηθες εύρος 30-35% που εφαρμόζουν οι τράπεζες· η έγκριση μπορεί να είναι πιο δύσκολη.`;
  }
  badge.classList.add(level);
  badge.textContent = pct.toFixed(0) + '%';
  text.textContent = msg;
  indicator.style.display = 'flex';
  note.style.display = 'block';
}

document.addEventListener('click', (e)=>{
  if(e.target && e.target.id === 'dtiFixedExpensesLink'){
    e.preventDefault();
    showTab('budget');
    setTimeout(()=>{
      const field = document.getElementById('fixedExpenses');
      field.focus();
      field.select();
      field.scrollIntoView({behavior:'smooth', block:'center'});
    }, 100);
  }
});

let viewMode = 'yearly';

document.getElementById('viewYearly').addEventListener('click', ()=>{
  viewMode='yearly';
  document.getElementById('viewYearly').classList.add('active');
  document.getElementById('viewMonthly').classList.remove('active');
  document.getElementById('yearlyView').style.display='block';
  document.getElementById('monthlyView').style.display='none';
});
document.getElementById('viewMonthly').addEventListener('click', ()=>{
  viewMode='monthly';
  document.getElementById('viewMonthly').classList.add('active');
  document.getElementById('viewYearly').classList.remove('active');
  document.getElementById('yearlyView').style.display='none';
  document.getElementById('monthlyView').style.display='block';
  renderMonthlyTable();
});
document.getElementById('filterTo').addEventListener('input', function(){ this.dataset.touched = 'true'; });
['filterFrom','filterTo'].forEach(id=>{
  document.getElementById(id).addEventListener('input', renderMonthlyTable);
});

function renderMonthlyTable(){
  const body = document.getElementById('amortBody');
  body.innerHTML = '';
  if(!currentSchedule.length) return;
  let from = Math.max(parseInt(document.getElementById('filterFrom').value)||1, 1);
  let to = Math.min(parseInt(document.getElementById('filterTo').value)||currentSchedule.length, currentSchedule.length);
  if(from > to) [from, to] = [to, from];
  currentSchedule.filter(row=>row.month>=from && row.month<=to).forEach(row=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.month}</td><td>${euroDec(row.principalPaid+row.interest)}</td><td>${euroDec(row.interest)}</td><td>${euroDec(row.principalPaid)}</td><td>${euroDec(Math.max(row.balance,0))}</td>`;
    body.appendChild(tr);
  });
}
let prepMode = 'shorten';
document.getElementById('modeShorten').addEventListener('click', ()=>{
  prepMode = 'shorten';
  document.getElementById('modeShorten').classList.add('active');
  document.getElementById('modeLower').classList.remove('active');
});
document.getElementById('modeLower').addEventListener('click', ()=>{
  prepMode = 'lower';
  document.getElementById('modeLower').classList.add('active');
  document.getElementById('modeShorten').classList.remove('active');
});

function computePrepayment(){
  const base = recompute();
  const {principal, months, r, M, schedule} = base;
  const prepMonth = Math.min(Math.max(parseInt(document.getElementById('prepMonth').value)||1,1), months);
  const prepAmount = Math.max(parseFloat(document.getElementById('prepAmount').value)||0, 0);

  // balance right before the prepayment month's payment is applied normally
  const idx = prepMonth - 1;
  const balanceBeforePrepMonth = idx===0 ? principal : schedule[idx-1].balance;

  // scenario BEFORE (no prepayment): remaining schedule from this month onward, original M
  const remainingMonthsOriginal = months - (prepMonth-1);
  const beforeSchedule = buildSchedule(balanceBeforePrepMonth, r, remainingMonthsOriginal, M);
  const beforeInterest = beforeSchedule.reduce((s,row)=>s+row.interest,0);

  // apply prepayment: reduce balance, then either recompute term (fixed M) or recompute M (fixed remaining months)
  let newBalance = Math.max(balanceBeforePrepMonth - prepAmount, 0);
  let afterMonthly, afterMonthsCount, afterInterest;

  if(prepMode === 'shorten'){
    // keep M fixed, iterate until balance depletes
    const sch = buildSchedule(newBalance, r, 100000, M); // large cap, will stop when balance<=0
    afterMonthly = M;
    afterMonthsCount = sch.length;
    afterInterest = sch.reduce((s,row)=>s+row.interest,0);
  } else {
    // keep remaining months fixed, recompute installment
    const remaining = remainingMonthsOriginal; // same remaining count as original plan
    const newM = monthlyPayment(newBalance, r, remaining);
    const sch = buildSchedule(newBalance, r, remaining, newM);
    afterMonthly = newM;
    afterMonthsCount = sch.length;
    afterInterest = sch.reduce((s,row)=>s+row.interest,0);
  }

  document.getElementById('beforeMonthly').textContent = euroDec(M);
  document.getElementById('beforeMonths').textContent = beforeSchedule.length + (currentLang==='en' ? ' installments' : ' δόσεις');
  document.getElementById('beforeInterest').textContent = euro(beforeInterest);

  document.getElementById('afterMonthly').textContent = euroDec(afterMonthly);
  document.getElementById('afterMonths').textContent = afterMonthsCount + (currentLang==='en' ? ' installments' : ' δόσεις');
  document.getElementById('afterInterest').textContent = euro(afterInterest);

  document.getElementById('compareBox').style.display = 'grid';

  const interestSaved = beforeInterest - afterInterest;
  const monthsSaved = beforeSchedule.length - afterMonthsCount;
  let msg = currentLang==='en' ? `Interest saved: ${euro(interestSaved)}` : `Εξοικονόμηση τόκων: ${euro(interestSaved)}`;
  if(prepMode==='shorten'){
    msg += currentLang==='en' ? ` \u00b7 Term shortened by ${monthsSaved} installments` : ` · Μείωση διάρκειας κατά ${monthsSaved} δόσεις`;
  } else {
    msg += currentLang==='en' ? ` \u00b7 New payment reduced by ${euroDec(M-afterMonthly)}` : ` · Νέα δόση μειωμένη κατά ${euroDec(M-afterMonthly)}`;
  }
  const banner = document.getElementById('savingsBanner');
  banner.textContent = msg;
  banner.style.display = 'block';
}

document.getElementById('computeBtn').addEventListener('click', computePrepayment);

['amount','down','installments','rate'].forEach(id=>{
  document.getElementById(id).addEventListener('input', recompute);
});

// --- Tabs ---
const tabButtons = {
  loan: document.getElementById('tabBtnLoan'),
  moto: document.getElementById('tabBtnMoto'),
  salary: document.getElementById('tabBtnSalary'),
  budget: document.getElementById('tabBtnBudget'),
  invest: document.getElementById('tabBtnInvest'),
  hub: document.getElementById('tabBtnHub')
};
const tabPanels = {
  loan: document.getElementById('tabLoan'),
  moto: document.getElementById('tabMoto'),
  salary: document.getElementById('tabSalary'),
  budget: document.getElementById('tabBudget'),
  invest: document.getElementById('tabInvest'),
  hub: document.getElementById('tabHub')
};
function showTab(name){
  Object.keys(tabPanels).forEach(key=>{
    tabPanels[key].style.display = (key===name) ? 'block' : 'none';
    tabButtons[key].classList.toggle('active', key===name);
  });
  if(name==='salary') recomputeSalary();
  if(name==='budget') recomputeBudget();
  if(name==='invest') recomputeInvestment();
  if(name==='hub') updateHubCards();

  const summaryBar = document.getElementById('summaryBar');
  if(summaryBar) summaryBar.style.display = (name==='hub') ? 'none' : 'flex';
}
tabButtons.loan.addEventListener('click', ()=>showTab('loan'));
tabButtons.moto.addEventListener('click', ()=>showTab('moto'));
tabButtons.salary.addEventListener('click', ()=>showTab('salary'));
tabButtons.budget.addEventListener('click', ()=>showTab('budget'));
tabButtons.invest.addEventListener('click', ()=>showTab('invest'));
tabButtons.hub.addEventListener('click', ()=>showTab('hub'));

document.querySelectorAll('.hub-card').forEach(card=>{
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  const go = () => showTab(card.dataset.target);
  card.addEventListener('click', go);
  card.addEventListener('keydown', e=>{
    if(e.key==='Enter' || e.key===' '){ e.preventDefault(); go(); }
  });
});


document.getElementById('clearLoanBtn').addEventListener('click', ()=>{
  document.getElementById('amount').value = '';
  document.getElementById('down').value = '';
  document.getElementById('installments').value = '';
  recompute();
});

let lastMonthlyPayment = 0;
let lastPureVehicleCost = 0;
let lastNetSalary = 0;
let lastAvgBonusEquiv = 0;
let lastExtraNet = 0;
let lastXmasNet = 0, lastEasterNet = 0, lastLeaveNet = 0;
let lastAllocationSurplus = 0;
let lastSavingsSuggestion = 0;

function recomputeBudget(){
  const hasLoan = parseFloat(document.getElementById('amount').value) > 0;

  const insurance = parseFloat(document.getElementById('motoInsurance').value)||0;
  const roadTax = parseFloat(document.getElementById('motoRoadTax').value)||0;
  const service = parseFloat(document.getElementById('motoService').value)||0;
  const fixedMonthlyEquiv = (insurance+roadTax+service)/12;

  const fuel = parseFloat(document.getElementById('motoFuel').value)||0;
  const parking = parseFloat(document.getElementById('motoParking').value)||0;
  const other = parseFloat(document.getElementById('motoOther').value)||0;
  const variableMonthly = fuel+parking+other;

  const motoTotal = lastMonthlyPayment + fixedMonthlyEquiv + variableMonthly;
  lastPureVehicleCost = fixedMonthlyEquiv + variableMonthly;

  document.getElementById('fMotoLoan').textContent = euroDec(lastMonthlyPayment);
  document.getElementById('fMotoFixed').textContent = euroDec(fixedMonthlyEquiv);
  document.getElementById('fMotoVar').textContent = euroDec(variableMonthly);
  document.getElementById('fMotoTotal').textContent = euroDec(motoTotal);

  const income = parseFloat(document.getElementById('income').value)||0;
  const otherFixed = parseFloat(document.getElementById('fixedExpenses').value)||0;
  const remaining = income - otherFixed - motoTotal + lastExtraNet;

  const extraCaption = currentLang==='en'
    ? `Includes extra net monthly (e.g. Ticket Restaurant): ${euroDec(lastExtraNet)}`
    : `Περιλαμβάνει έξτρα καθαρά μηνιαία (π.χ. Ticket Restaurant): ${euroDec(lastExtraNet)}`;
  document.getElementById('capBudgetBanner').textContent = extraCaption;
  document.getElementById('capRemainNoBonus').textContent = extraCaption;

  const banner = document.getElementById('budgetBanner');
  if(remaining >= 0){
    banner.textContent = currentLang==='en'
      ? `Available balance after all expenses: ${euroDec(remaining)} / month`
      : `Διαθέσιμο υπόλοιπο μετά από όλα τα έξοδα: ${euroDec(remaining)} / μήνα`;
    banner.style.background = 'var(--brass-soft)';
    banner.style.color = 'var(--teal-deep)';
  } else {
    banner.textContent = currentLang==='en'
      ? `Warning: deficit of ${euroDec(Math.abs(remaining))} / month \u2014 expenses exceed income`
      : `Προσοχή: έλλειμμα ${euroDec(Math.abs(remaining))} / μήνα — τα έξοδα ξεπερνούν το εισόδημα`;
    banner.style.background = '#f1dcd6';
    banner.style.color = 'var(--red-ink)';
  }

  const remainNoBonus = lastNetSalary + lastExtraNet - otherFixed - motoTotal;
  const remainWithBonus = lastNetSalary + lastAvgBonusEquiv + lastExtraNet - otherFixed - motoTotal;

  const noBonusBox = document.getElementById('fRemainNoBonus');
  noBonusBox.textContent = euroDec(remainNoBonus);
  noBonusBox.closest('.result-box').classList.toggle('negative', remainNoBonus < 0);

  // --- Recommendation tips ---
  const tips = [];
  const motoSharePct = income > 0 ? (motoTotal/income)*100 : 0;

  if(motoSharePct > 20){
    tips.push(currentLang==='en'
      ? `The vehicle absorbs about <strong>${motoSharePct.toFixed(0)}%</strong> of your monthly income \u2014 quite a high share. It's worth reviewing the numbers (loan terms and/or running costs) to ease your monthly budget.`
      : `Το όχημα απορροφά περίπου <strong>${motoSharePct.toFixed(0)}%</strong> του μηνιαίου σου εισοδήματος — αρκετά υψηλό ποσοστό. Αξίζει να ξανακοιτάξεις τα νούμερα (όρους δανείου ή/και τρέχοντα έξοδα) για να ελαφρύνει τον μηνιαίο προϋπολογισμό σου.`);
  } else if(motoSharePct > 0){
    tips.push(currentLang==='en'
      ? `The vehicle absorbs about <strong>${motoSharePct.toFixed(0)}%</strong> of your monthly income \u2014 a reasonable range.`
      : `Το όχημα απορροφά περίπου <strong>${motoSharePct.toFixed(0)}%</strong> του μηνιαίου σου εισοδήματος — σε λογικά πλαίσια.`);
  }

  // --- Smart bonus-to-expense allocation (best-fit by amount, not fixed pairing) ---
  // Runs regardless of whether a loan is active: bonuses/allowance vs. whatever
  // vehicle expenses are entered, so the vacation fund suggestion never depends
  // on there being an active loan.
  {
  const roadTaxCost = parseFloat(document.getElementById('motoRoadTax').value)||0;
  const serviceCost = parseFloat(document.getElementById('motoService').value)||0;
  const insuranceCost = parseFloat(document.getElementById('motoInsurance').value)||0;

  const bonuses = [
    {label: currentLang==='en' ? 'Christmas Bonus' : 'Δώρο Χριστουγέννων', month: currentLang==='en' ? 'December' : 'Δεκέμβριο', amount:lastXmasNet},
    {label: currentLang==='en' ? 'Easter Bonus' : 'Δώρο Πάσχα', month: currentLang==='en' ? 'April' : 'Απρίλιο', amount:lastEasterNet},
    {label: currentLang==='en' ? 'Leave Allowance' : 'Επίδομα Αδείας', month: currentLang==='en' ? 'summer' : 'καλοκαίρι', amount:lastLeaveNet}
  ];
  const expenses = [
    {label: currentLang==='en' ? 'the Road Tax' : 'τα Τέλη Κυκλοφορίας', cost:roadTaxCost},
    {label: currentLang==='en' ? 'the Service/maintenance' : 'το Service/συντήρηση', cost:serviceCost},
    {label: currentLang==='en' ? 'the Insurance' : 'την Ασφάλεια', cost:insuranceCost}
  ];

  // try all 6 permutations of expenses assigned to bonuses; pick the one
  // that covers the most expenses in full, then minimizes total |difference|
  function permutations(arr){
    if(arr.length<=1) return [arr];
    const result=[];
    arr.forEach((item,i)=>{
      const rest=arr.slice(0,i).concat(arr.slice(i+1));
      permutations(rest).forEach(p=>result.push([item,...p]));
    });
    return result;
  }
  let bestPerm = null, bestScore = null;
  permutations(expenses).forEach(perm=>{
    let covered=0, totalAbsDiff=0;
    perm.forEach((exp,i)=>{
      const diff = bonuses[i].amount - exp.cost;
      if(diff>=0) covered++;
      totalAbsDiff += Math.abs(diff);
    });
    const score = [-covered, totalAbsDiff]; // maximize covered, then minimize deviation
    if(bestScore===null || score[0]<bestScore[0] || (score[0]===bestScore[0] && score[1]<bestScore[1])){
      bestScore = score;
      bestPerm = perm;
    }
  });

  const allocations = bonuses.map((b,i)=>({...b, expenseLabel:bestPerm[i].label, expenseCost:bestPerm[i].cost}));

  let allocText = currentLang==='en'
    ? '<strong>Bonus allocation suggestion (by amount):</strong><br>'
    : '<strong>Πρόταση κατανομής δώρων (βάσει ποσού):</strong><br>';
  let totalSurplus = 0;
  allocations.forEach(a=>{
    const diff = a.amount - a.expenseCost;
    totalSurplus += diff;
    if(a.amount <= 0.5){ return; }
    if(diff >= 0){
      allocText += currentLang==='en'
        ? `\u2192 The ${a.label} (${euroDec(a.amount)}, ${a.month}) covers ${a.expenseLabel} (${euroDec(a.expenseCost)}) with ${euroDec(diff)} left over.<br>`
        : `→ Το ${a.label} (${euroDec(a.amount)}, ${a.month}) καλύπτει ${a.expenseLabel} (${euroDec(a.expenseCost)}) και περισσεύουν ${euroDec(diff)}.<br>`;
    } else {
      allocText += currentLang==='en'
        ? `\u2192 The ${a.label} (${euroDec(a.amount)}, ${a.month}) is not enough for ${a.expenseLabel} (${euroDec(a.expenseCost)}) \u2014 ${euroDec(Math.abs(diff))} short from elsewhere.<br>`
        : `→ Το ${a.label} (${euroDec(a.amount)}, ${a.month}) δεν επαρκεί για ${a.expenseLabel} (${euroDec(a.expenseCost)}) — λείπουν ${euroDec(Math.abs(diff))} από αλλού.<br>`;
    }
  });
  if(totalSurplus > 0){
    allocText += currentLang==='en'
      ? `After covering all three expenses, <strong>${euroDec(totalSurplus)}</strong> is left over from the bonuses this year \u2014 this feeds the vacation fund below.`
      : `Μετά την κάλυψη και των τριών εξόδων, μένει συνολικά <strong>${euroDec(totalSurplus)}</strong> από τα δώρα τον χρόνο — αυτό τροφοδοτεί το αποθεματικό διακοπών παρακάτω.`;
  } else if(totalSurplus < 0){
    allocText += currentLang==='en'
      ? `Overall, the bonuses fall short by <strong>${euroDec(Math.abs(totalSurplus))}</strong> of covering all three fixed vehicle expenses \u2014 the shortfall will need to come from the regular salary.`
      : `Συνολικά, τα δώρα υπολείπονται κατά <strong>${euroDec(Math.abs(totalSurplus))}</strong> από το να καλύψουν και τα τρία πάγια έξοδα οχήματος — θα χρειαστεί συμπλήρωμα από τον τακτικό μισθό.`;
  }
  tips.push(allocText);
  lastAllocationSurplus = totalSurplus;
  updateVacationFund();
  }

  const savingsBox = document.getElementById('fSavingsGroup');
  const invContribField = document.getElementById('invContribution');
  lastSavingsSuggestion = 0;
  let afterSavingsAmount = null;
  const savingsPct = parseFloat(document.getElementById('savingsPct').value)||0;
  if(remainNoBonus < 0 && remainWithBonus >= 0){
    tips.push(currentLang==='en'
      ? `Without bonuses the balance is negative, but it's covered once they're factored in. Watch out for months with no bonus (i.e. outside December/April/summer) \u2014 that's when you need the fund.`
      : `Χωρίς τα δώρα το υπόλοιπο βγαίνει αρνητικό, αλλά καλύπτεται όταν υπολογιστούν και αυτά. Πρόσεξε τους μήνες χωρίς δώρο (π.χ. εκτός Δεκεμβρίου/Απριλίου/καλοκαιριού) — εκεί χρειάζεσαι το αποθεματικό.`);
    savingsBox.style.display = 'none';
  } else if(remainWithBonus < 0){
    tips.push(currentLang==='en'
      ? `Even with bonuses, the balance comes out negative. It's worth reconsidering the loan amount or term before proceeding.`
      : `Ακόμη και με τα δώρα, το υπόλοιπο βγαίνει αρνητικό. Αξίζει να ξανακοιτάξεις το ποσό ή τη διάρκεια του δανείου πριν προχωρήσεις.`);
    savingsBox.style.display = 'none';
  } else if(remainNoBonus > 0 && savingsPct > 0){
    const savingsSuggestion = r2(remainNoBonus*(savingsPct/100));
    lastSavingsSuggestion = savingsSuggestion;
    afterSavingsAmount = r2(remainNoBonus - savingsSuggestion);
    document.getElementById('fBeforeSavings').textContent = euroDec(remainNoBonus);
    document.getElementById('fSavingsAmount').textContent = euroDec(savingsSuggestion);
    document.getElementById('fAfterSavings').textContent = euroDec(afterSavingsAmount);
    savingsBox.style.display = 'grid';
    if(invContribField.dataset.touched !== 'true'){
      invContribField.value = savingsSuggestion.toFixed(2);
      if(typeof recomputeInvestment === 'function') recomputeInvestment();
    }
  } else {
    savingsBox.style.display = 'none';
  }

  document.getElementById('budgetTips').innerHTML = tips.map(t=>
    t.includes('<br>')
      ? `<div class="tip-item"><span>${t}</span></div>`
      : `<div class="tip-item"><span class="tip-icon">→</span><span>${t}</span></div>`
  ).join('');

  updateSummaryBar(hasLoan, income, remainNoBonus, remaining, afterSavingsAmount);
  updateHubCards();
}

function updateHubCards(){
  document.getElementById('hubSalaryValue').textContent = document.getElementById('sumNetSalary').textContent;

  const sumBadge = document.getElementById('sumStatusBadge');
  const hubBudgetBadge = document.getElementById('hubBudgetBadge');
  hubBudgetBadge.textContent = sumBadge.textContent;
  hubBudgetBadge.className = 'hub-card-badge';
  if(sumBadge.classList.contains('risk')) hubBudgetBadge.classList.add('warn');
  if(sumBadge.classList.contains('deficit')) hubBudgetBadge.classList.add('over');

  const remainingText = document.getElementById('sumRemaining').textContent;
  document.getElementById('hubBudgetSub').textContent = currentLang==='en'
    ? remainingText + ' available'
    : remainingText + ' διαθέσιμο';

  document.getElementById('hubInvestValue').textContent = document.getElementById('invFinalBalance').textContent;
  document.getElementById('hubMotoValue').textContent = euroDec(lastPureVehicleCost);

  const invContribution = parseFloat(document.getElementById('invContribution').value)||0;
  const invYears = document.getElementById('invYears').value;
  const invRate = document.getElementById('invRate').value;
  const freqLabels = { '12': currentLang==='en' ? '/mo' : '/μήνα', '4': currentLang==='en' ? '/qtr' : '/τρίμηνο', '1': currentLang==='en' ? '/yr' : '/έτος' };
  const freqSuffix = freqLabels[document.getElementById('invContribFreq').value] || '';
  const yearsWord = currentLang==='en' ? (invYears==1 ? 'yr' : 'yrs') : (invYears==1 ? 'έτος' : 'χρόνια');
  document.getElementById('hubInvestDetail').textContent =
    `${Math.round(invContribution)}€${freqSuffix} \u00b7 ${invYears} ${yearsWord} \u00b7 ${invRate}%`;

  const hasLoan = document.getElementById('sumLoanItem').style.display !== 'none';
  const hubLoanBadge = document.getElementById('hubLoanBadge');
  if(hasLoan){
    const suffix = currentLang==='en' ? '/mo' : '/μήνα';
    document.getElementById('hubLoanValue').textContent = document.getElementById('sumLoan').textContent + suffix;
    const dtiBadge = document.getElementById('dtiBadge');
    hubLoanBadge.textContent = dtiBadge.textContent;
    hubLoanBadge.className = 'hub-card-badge';
    if(dtiBadge.classList.contains('warn')) hubLoanBadge.classList.add('warn');
    if(dtiBadge.classList.contains('over')) hubLoanBadge.classList.add('over');
    hubLoanBadge.style.display = 'inline-block';

    const amount = parseFloat(document.getElementById('amount').value)||0;
    const installments = document.getElementById('installments').value;
    const rate = document.getElementById('rate').value;
    const instWord = currentLang==='en' ? 'installments' : 'δόσεις';
    document.getElementById('hubLoanDetail').textContent =
      `${euro(amount)} \u00b7 ${installments} ${instWord} \u00b7 ${rate}%`;
  } else {
    document.getElementById('hubLoanValue').textContent = currentLang==='en' ? 'No active loan' : 'Χωρίς ενεργό δάνειο';
    document.getElementById('hubLoanDetail').textContent = '';
    hubLoanBadge.style.display = 'none';
  }
}

function updateSummaryBar(hasLoan, income, remainNoBonus, remaining, afterSavingsAmount){
  document.getElementById('sumNetSalary').textContent = euroDec(lastNetSalary);

  const loanItem = document.getElementById('sumLoanItem');
  if(hasLoan){
    document.getElementById('sumLoan').textContent = euroDec(lastMonthlyPayment);
    loanItem.style.display = 'flex';
  } else {
    loanItem.style.display = 'none';
  }

  const savingsItem = document.getElementById('sumSavingsItem');
  if(afterSavingsAmount !== null){
    document.getElementById('sumSavings').textContent = euroDec(lastSavingsSuggestion);
    savingsItem.style.display = 'flex';
  } else {
    savingsItem.style.display = 'none';
  }

  const displayedBalance = afterSavingsAmount !== null ? afterSavingsAmount : remaining;
  document.getElementById('sumRemaining').textContent = euroDec(displayedBalance);

  const ratio = income > 0 ? remainNoBonus/income : (remainNoBonus < 0 ? -1 : 0);
  const badge = document.getElementById('sumStatusBadge');
  badge.classList.remove('surplus','risk','deficit');
  if(remainNoBonus < 0){
    badge.textContent = currentLang==='en' ? 'Insufficient' : 'Ανεπαρκές';
    badge.classList.add('deficit');
  } else if(ratio < 0.10){
    badge.textContent = currentLang==='en' ? 'Marginal' : 'Οριακό';
    badge.classList.add('risk');
  } else {
    badge.textContent = currentLang==='en' ? 'Sufficient' : 'Επαρκές';
    badge.classList.add('surplus');
  }
}

['motoInsurance','motoRoadTax','motoService','motoFuel','motoParking','motoOther','income','fixedExpenses','savingsPct'].forEach(id=>{
  document.getElementById(id).addEventListener('input', recomputeBudget);
});

function updateVacationFund(){
  const saved = parseFloat(document.getElementById('vacationSaved').value)||0;
  const suggestedAdd = Math.max(lastAllocationSurplus, 0);
  document.getElementById('vacationSuggestedAdd').textContent = euroDec(suggestedAdd);
  document.getElementById('vacationNewTotal').textContent = euroDec(saved + suggestedAdd);
}
document.getElementById('vacationSaved').addEventListener('input', updateVacationFund);

// --- Salary & bonuses (14-payment system) ---
function daysBetween(d1,d2){ return Math.round((d2-d1)/(1000*60*60*24)); }

function parseGreekDate(str){
  if(!str) return null;
  const m = str.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if(!m) return null;
  const day = parseInt(m[1],10), month = parseInt(m[2],10), year = parseInt(m[3],10);
  if(month<1||month>12||day<1||day>31) return null;
  const d = new Date(year, month-1, day);
  if(d.getMonth() !== month-1) return null; // rejects e.g. 31/02
  return d;
}

document.getElementById('hireDate').addEventListener('input', function(e){
  let digits = e.target.value.replace(/\D/g,'').slice(0,8);
  let formatted = digits;
  if(digits.length>4) formatted = digits.slice(0,2)+'/'+digits.slice(2,4)+'/'+digits.slice(4);
  else if(digits.length>2) formatted = digits.slice(0,2)+'/'+digits.slice(2);
  e.target.value = formatted;
  const parsed = parseGreekDate(formatted);
  if(parsed){
    const iso = parsed.getFullYear()+'-'+String(parsed.getMonth()+1).padStart(2,'0')+'-'+String(parsed.getDate()).padStart(2,'0');
    document.getElementById('hireDatePicker').value = iso;
  }
});

document.getElementById('hireDatePicker').addEventListener('input', function(e){
  const iso = e.target.value;
  if(!iso) return;
  const [y,m,d] = iso.split('-');
  const textField = document.getElementById('hireDate');
  textField.value = `${d}/${m}/${y}`;
  textField.dispatchEvent(new Event('input'));
});

function proportionalBonus(hireDate, periodStart, periodEnd, fullAmount){
  const empStart = hireDate > periodStart ? hireDate : periodStart;
  if(empStart > periodEnd) return 0;
  const totalDays = daysBetween(periodStart, periodEnd) + 1;
  const workedDays = daysBetween(empStart, periodEnd) + 1;
  const ratio = Math.min(Math.max(workedDays/totalDays, 0), 1);
  return fullAmount * ratio;
}

function r2(x){ return Math.round(x*100)/100; }

const TAX_BRACKETS_BY_AGE = {
  standard: [
    {limit:10000, rate:0.09},
    {limit:20000, rate:0.20},
    {limit:30000, rate:0.26},
    {limit:40000, rate:0.34},
    {limit:60000, rate:0.39},
    {limit:Infinity, rate:0.44}
  ],
  young30: [ // 26-30 ετών: 9% flat έως 20.000€, μετά ίδιο με τη βασική κλίμακα
    {limit:20000, rate:0.09},
    {limit:30000, rate:0.26},
    {limit:40000, rate:0.34},
    {limit:60000, rate:0.39},
    {limit:Infinity, rate:0.44}
  ],
  young25: [ // έως 25 ετών: μηδενικός φόρος έως 20.000€, μετά ίδιο με τη βασική κλίμακα
    {limit:20000, rate:0.00},
    {limit:30000, rate:0.26},
    {limit:40000, rate:0.34},
    {limit:60000, rate:0.39},
    {limit:Infinity, rate:0.44}
  ]
};

function annualTax(annualTaxable, ageBracket){
  const brackets = TAX_BRACKETS_BY_AGE[ageBracket] || TAX_BRACKETS_BY_AGE.standard;
  let tax=0, prev=0;
  for(const b of brackets){
    if(annualTaxable > prev){
      tax += (Math.min(annualTaxable,b.limit)-prev) * b.rate;
      prev = b.limit;
    } else break;
  }
  return r2(tax);
}

function effectiveTaxCredit(baseCredit, annualTaxable){
  if(annualTaxable <= 12000) return r2(baseCredit);
  const reduction = r2(20 * (annualTaxable-12000)/1000);
  return Math.max(r2(baseCredit - reduction), 0);
}

function netFromGross(gross, ssRatePct, baseTaxCredit, ageBracket){
  const ss = r2(gross * (ssRatePct/100));
  const taxable = Math.max(r2(gross - ss), 0);
  const annualTaxable = r2(taxable * 14);
  const grossAnnualTax = annualTax(annualTaxable, ageBracket);
  const usedCredit = effectiveTaxCredit(baseTaxCredit, annualTaxable);
  const annualTaxAfterCredit = Math.max(r2(grossAnnualTax - usedCredit), 0);
  const monthlyTax = r2(annualTaxAfterCredit/14);
  return {
    net: Math.max(r2(gross - ss - monthlyTax), 0),
    ss, taxable, annualTaxable, grossAnnualTax, usedCredit, annualTaxAfterCredit, monthlyTax
  };
}

function recomputeSalary(){
  const gross = parseFloat(document.getElementById('grossSalary').value)||0;
  const ssRate = parseFloat(document.getElementById('ssRate').value)||0;
  const taxCredit = parseFloat(document.getElementById('taxCredit').value)||0;
  const extraNet = parseFloat(document.getElementById('extraNet').value)||0;
  const ageBracket = document.getElementById('ageBracket').value;
  const hireDateVal = document.getElementById('hireDate').value;
  const hireDate = parseGreekDate(hireDateVal) || new Date();

  const calc = netFromGross(gross, ssRate, taxCredit, ageBracket);
  const net = calc.net;
  const netRatio = gross > 0 ? net/gross : 0;

  // --- Extra hour-based pay: overwork / holiday / overtime ---
  // Confirmed against a real payslip: ΕΦΚΑ and income tax are calculated on the
  // COMBINED total (regular salary + extra hours), through the same progressive
  // scale (annualized ×14) as the regular salary — NOT a separate flat rate with
  // no EFKA. Hourly wage derived as gross/25 (daily) /6.667 (hours/day).
  const overworkHours = parseFloat(document.getElementById('overworkHours').value)||0;
  const holidayHours = parseFloat(document.getElementById('holidayHours').value)||0;
  const overtimeHours = parseFloat(document.getElementById('overtimeHours').value)||0;

  const hourlyWage = gross/25/6.667;
  const extraGross = overworkHours*hourlyWage*1.20 + holidayHours*hourlyWage*0.75 + overtimeHours*hourlyWage*1.40;

  const combinedCalc = netFromGross(gross + extraGross, ssRate, taxCredit, ageBracket);
  const extraPayNet = r2(combinedCalc.net - net);
  const netTotal = combinedCalc.net;

  document.getElementById('sExtraPayNet').textContent = euroDec(extraPayNet);
  document.getElementById('sNetTotal').textContent = euroDec(netTotal);


  const year = new Date().getFullYear();
  const xmasStart = new Date(year,4,1), xmasEnd = new Date(year,11,31);
  const easterStart = new Date(year,0,1), easterEnd = new Date(year,3,30);
  const leaveStart = new Date(year,4,1), leaveEnd = new Date(year,11,31);

  const xmasGross = proportionalBonus(hireDate, xmasStart, xmasEnd, gross);
  const easterGross = proportionalBonus(hireDate, easterStart, easterEnd, gross/2);
  const leaveGross = proportionalBonus(hireDate, leaveStart, leaveEnd, gross/2);

  const xmasNet = xmasGross*netRatio;
  const easterNet = easterGross*netRatio;
  const leaveNet = leaveGross*netRatio;

  document.getElementById('sGross').textContent = euroDec(gross);
  document.getElementById('sSS').textContent = '-' + euroDec(calc.ss);
  document.getElementById('sTaxable').textContent = euroDec(calc.taxable);
  document.getElementById('sTax').textContent = '-' + euroDec(calc.monthlyTax);
  document.getElementById('sNet').textContent = euroDec(net);

  document.getElementById('sAnnualTaxable').textContent = euroDec(calc.annualTaxable);
  document.getElementById('sGrossTax').textContent = euroDec(calc.grossAnnualTax);
  document.getElementById('sCredit').textContent = '-' + euroDec(calc.usedCredit);
  document.getElementById('sFinalTax').textContent = euroDec(calc.annualTaxAfterCredit);
  document.getElementById('sEReceipts').textContent = euroDec(calc.annualTaxable*0.30);

  document.getElementById('xmasGross').textContent = euroDec(xmasGross);
  document.getElementById('xmasNet').textContent = euroDec(xmasNet);
  document.getElementById('easterGross').textContent = euroDec(easterGross);
  document.getElementById('easterNet').textContent = euroDec(easterNet);
  document.getElementById('leaveGross').textContent = euroDec(leaveGross);
  document.getElementById('leaveNet').textContent = euroDec(leaveNet);

  const avgBonusEquiv = (xmasNet+easterNet+leaveNet)/12;
  const estimatedIncome = net + avgBonusEquiv + extraNet;

  lastNetSalary = netTotal;
  lastAvgBonusEquiv = avgBonusEquiv;
  lastExtraNet = extraNet;
  lastXmasNet = xmasNet;
  lastEasterNet = easterNet;
  lastLeaveNet = leaveNet;
  if(typeof updateDtiIndicator === 'function') updateDtiIndicator();

  document.getElementById('incomeBanner').textContent = currentLang==='en'
    ? `Estimated net monthly income (salary + bonus average + extra): ${euroDec(estimatedIncome)}`
    : `Εκτιμώμενο μηνιαίο καθαρό εισόδημα (μισθός + μέσος όρος δώρων + έξτρα): ${euroDec(estimatedIncome)}`;

  const incomeField = document.getElementById('income');
  if(incomeField.dataset.touched !== 'true'){
    incomeField.value = net.toFixed(2);
  }
  recomputeBudget();
}

document.getElementById('income').addEventListener('input', function(){ this.dataset.touched = 'true'; });
['grossSalary','hireDate','ssRate','taxCredit','extraNet','overworkHours','holidayHours','overtimeHours','ageBracket'].forEach(id=>{
  document.getElementById(id).addEventListener('input', recomputeSalary);
});
document.getElementById('ageBracket').addEventListener('change', recomputeSalary);

// --- Investment calculator ---
function recomputeInvestment(){
  const start = parseFloat(document.getElementById('invStart').value)||0;
  const years = Math.max(parseInt(document.getElementById('invYears').value)||1, 1);
  const contribution = parseFloat(document.getElementById('invContribution').value)||0;
  const contribFreq = parseInt(document.getElementById('invContribFreq').value)||12;
  const annualRatePct = parseFloat(document.getElementById('invRate').value)||0;
  const compoundFreq = parseInt(document.getElementById('invCompound').value)||12;

  const annualRate = annualRatePct/100;
  const effectiveAnnualRate = compoundFreq>0 ? Math.pow(1+annualRate/compoundFreq, compoundFreq)-1 : annualRate;
  const monthlyRate = Math.pow(1+effectiveAnnualRate, 1/12)-1;

  const monthsPerContribution = 12/contribFreq;

  let balance = start;
  let totalContributions = start;
  const yearlyData = [];

  for(let month=1; month<=years*12; month++){
    balance *= (1+monthlyRate);
    if(month % monthsPerContribution === 0){
      balance += contribution;
      totalContributions += contribution;
    }
    if(month % 12 === 0){
      yearlyData.push({year: month/12, contributions: totalContributions, balance});
    }
  }

  const totalGrowth = balance - totalContributions;

  document.getElementById('invTotalContrib').textContent = euroDec(totalContributions);
  document.getElementById('invTotalGrowth').textContent = euroDec(totalGrowth);
  document.getElementById('invFinalBalance').textContent = euroDec(balance);

  const container = document.getElementById('invLedgerBars');
  container.innerHTML = '';
  let prevContrib = start, prevBalance = start;
  const maxBalance = Math.max(...yearlyData.map(y=>y.balance), 1);
  yearlyData.forEach(y=>{
    const yearContrib = y.contributions - prevContrib;
    const yearGrowth = (y.balance - y.contributions) - (prevBalance - prevContrib);
    const yearTotal = yearContrib + yearGrowth;
    const widthPct = (y.balance/maxBalance)*100;
    const row = document.createElement('div');
    row.className = 'ledger-row';
    row.innerHTML = `
      <span class="yr">${currentLang==='en' ? 'Y' : 'Ε'}${y.year}</span>
      <div class="bar" style="width:${widthPct}%">
        <div class="principal" style="width:${Math.max(yearContrib,0)/Math.max(yearTotal,0.01)*100}%"></div>
        <div class="interest" style="width:${Math.max(yearGrowth,0)/Math.max(yearTotal,0.01)*100}%"></div>
      </div>
    `;
    container.appendChild(row);
    prevContrib = y.contributions;
    prevBalance = y.balance;
  });
}

['invStart','invYears','invContribution','invContribFreq','invRate','invCompound'].forEach(id=>{
  document.getElementById(id).addEventListener('input', recomputeInvestment);
  document.getElementById(id).addEventListener('change', recomputeInvestment);
});
document.getElementById('invContribution').addEventListener('input', function(){ this.dataset.touched = 'true'; });
document.getElementById('invContribResyncBtn').addEventListener('click', ()=>{
  const field = document.getElementById('invContribution');
  field.dataset.touched = 'false';
  field.value = lastSavingsSuggestion.toFixed(2);
  recomputeInvestment();
});

recompute();
recomputeSalary();
recomputeInvestment();
showTab('hub');

// --- Export / Import data (Excel .xlsx via SheetJS) ---
const EXPORT_FIELD_IDS = [
  'amount','down','installments','rate',
  'prepMonth','prepAmount',
  'grossSalary','hireDate','ssRate','taxCredit','extraNet','overworkHours','holidayHours','overtimeHours','ageBracket',
  'motoInsurance','motoRoadTax','motoService','motoFuel','motoParking','motoOther',
  'income','fixedExpenses','vacationSaved','savingsPct',
  'invStart','invYears','invContribution','invContribFreq','invRate','invCompound'
];

const DEFAULT_VALUES = {
  amount:'0', down:'0', installments:'24', rate:'10',
  prepMonth:'0', prepAmount:'0',
  grossSalary:'1500', hireDate:'01/01/2020', ssRate:'13.37', taxCredit:'777', extraNet:'0', ageBracket:'standard',
  overworkHours:'0', holidayHours:'0', overtimeHours:'0',
  motoInsurance:'0', motoRoadTax:'0', motoService:'0', motoFuel:'0', motoParking:'0', motoOther:'0',
  income:'1400', fixedExpenses:'0', vacationSaved:'0', savingsPct:'20',
  invStart:'0', invYears:'15', invContribution:'50', invContribFreq:'12', invRate:'6', invCompound:'12'
};

document.getElementById('printBtn').addEventListener('click', ()=>{
  const txt = id => document.getElementById(id).textContent;
  const val = id => document.getElementById(id).value;
  const pt = (el, en) => currentLang==='en' ? en : el;

  const hasLoan = parseFloat(val('amount')) > 0;

  let html = `
    <h1>${pt('Οικονομικός Πίνακας Ελέγχου — Αναφορά','Personal Finance Dashboard — Report')}</h1>
    <div class="print-date">${new Date().toLocaleDateString(currentLang==='en' ? 'en-GB' : 'el-GR')}</div>

    <h2>${pt('Μισθός & Δώρα','Salary & Bonuses')}</h2>
    <table>
      <tr><td>${pt('Μικτός μηνιαίος μισθός','Gross Monthly Salary')}</td><td>${txt('sGross')}</td></tr>
      <tr><td>${pt('Κρατήσεις ΕΦΚΑ','Social Security Contributions')}</td><td>${txt('sSS')}</td></tr>
      <tr><td>${pt('Μηνιαίος φόρος εισοδήματος','Monthly Income Tax')}</td><td>${txt('sTax')}</td></tr>
      <tr><td>${pt('Καθαρός μηνιαίος μισθός (τακτικός)','Net Monthly Salary (Regular)')}</td><td>${txt('sNet')}</td></tr>
      <tr><td>${pt('Πρόσθετες αμοιβές (καθαρό)','Extra Pay (net)')}</td><td>${txt('sExtraPayNet')}</td></tr>
      <tr><td><strong>${pt('Σύνολο καθαρών μηνιαίων αποδοχών','Total Net Monthly Earnings')}</strong></td><td><strong>${txt('sNetTotal')}</strong></td></tr>
      <tr><td>${pt('Δώρο Χριστουγέννων (καθαρό)','Christmas Bonus (net)')}</td><td>${txt('xmasNet')}</td></tr>
      <tr><td>${pt('Δώρο Πάσχα (καθαρό)','Easter Bonus (net)')}</td><td>${txt('easterNet')}</td></tr>
      <tr><td>${pt('Επίδομα Αδείας (καθαρό)','Leave Allowance (net)')}</td><td>${txt('leaveNet')}</td></tr>
    </table>

    ${hasLoan ? `
    <h2>${pt('Δάνειο','Loan')}</h2>
    <table>
      <tr><td>${pt('Ποσό δανείου','Loan Amount')}</td><td>${val('amount')} €</td></tr>
      <tr><td>${pt('Προκαταβολή','Down Payment')}</td><td>${val('down')} €</td></tr>
      <tr><td>${pt('Διάρκεια','Term')}</td><td>${val('installments')} ${pt('δόσεις','installments')}</td></tr>
      <tr><td>${pt('Ετήσιο επιτόκιο','Annual Interest Rate')}</td><td>${val('rate')}%</td></tr>
      <tr><td>${pt('Μηνιαία δόση','Monthly Payment')}</td><td>${txt('rMonthly')}</td></tr>
      <tr><td>${pt('Σύνολο τόκων','Total Interest')}</td><td>${txt('rInterest')}</td></tr>
      <tr><td>${pt('Τελικό συνολικό κόστος','Total Final Cost')}</td><td>${txt('rTotal')}</td></tr>
    </table>
    ` : ''}

    <h2>${pt('Έξοδα Οχήματος','Vehicle Expenses')}</h2>
    <table>
      <tr><td>${pt('Πάγια έξοδα οχήματος (ισοδύναμο/μήνα)','Fixed Vehicle Expenses (monthly equiv.)')}</td><td>${txt('fMotoFixed')}</td></tr>
      <tr><td>${pt('Λειτουργικά έξοδα οχήματος/μήνα','Operating Vehicle Expenses/month')}</td><td>${txt('fMotoVar')}</td></tr>
      <tr><td><strong>${pt('Συνολικό μηνιαίο κόστος οχήματος','Total Monthly Vehicle Cost')}</strong></td><td><strong>${euroDec(lastPureVehicleCost)}</strong></td></tr>
    </table>

    <h2>${pt('Προϋπολογισμός','Budget')}</h2>
    <table>
      <tr><td>${pt('Μηνιαίο καθαρό εισόδημα','Net Monthly Income')}</td><td>${val('income')} €</td></tr>
      <tr><td>${pt('Λοιπά σταθερά μηνιαία έξοδα','Other Fixed Monthly Expenses')}</td><td>${val('fixedExpenses')} €</td></tr>
      <tr><td>${pt('Διαθέσιμο υπόλοιπο (χωρίς δώρα)','Available Balance (without bonuses)')}</td><td>${txt('fRemainNoBonus')}</td></tr>
      <tr><td>${pt('Ποσοστό αποταμίευσης','Savings Percentage')}</td><td>${val('savingsPct')}%</td></tr>
      ${document.getElementById('fSavingsGroup').style.display !== 'none' ? `
      <tr><td>${pt('Υπόλοιπο (πριν την αποταμίευση)','Balance (before savings)')}</td><td>${txt('fBeforeSavings')}</td></tr>
      <tr><td><strong>${pt('Προτεινόμενη αποταμίευση','Suggested Savings')}</strong></td><td><strong>${txt('fSavingsAmount')}</strong></td></tr>
      <tr><td>${pt('Υπόλοιπο (μετά την αποταμίευση)','Balance (after savings)')}</td><td>${txt('fAfterSavings')}</td></tr>
      ` : ''}
      <tr><td>${pt('Αποθεματικό - Ήδη αποταμιευμένα','Reserve Fund - Already Saved')}</td><td>${val('vacationSaved')} €</td></tr>
      <tr><td>${pt('Αποθεματικό - Προτεινόμενη προσθήκη','Reserve Fund - Suggested Addition')}</td><td>${txt('vacationSuggestedAdd')}</td></tr>
      <tr><td>${pt('Αποθεματικό - Νέο σύνολο','Reserve Fund - New Total')}</td><td>${txt('vacationNewTotal')}</td></tr>
    </table>
  `;

  document.getElementById('printReport').innerHTML = html;
  window.print();
});

document.getElementById('defaultsBtn').addEventListener('click', ()=>{
  EXPORT_FIELD_IDS.forEach(id=>{
    if(DEFAULT_VALUES[id] !== undefined) document.getElementById(id).value = DEFAULT_VALUES[id];
  });
  document.getElementById('income').dataset.touched = 'false';
  document.getElementById('invContribution').dataset.touched = 'false';
  document.getElementById('modeShorten').click();
  document.getElementById('hireDate').dispatchEvent(new Event('input'));
  recompute();
  recomputeSalary();
  recomputeBudget();
  recomputeInvestment();
  showSaveStatus(currentLang==='en' ? 'Default values restored.' : 'Επαναφέρθηκαν οι προεπιλεγμένες τιμές.');
});

function showSaveStatus(msg){
  const status = document.getElementById('saveStatus');
  status.textContent = msg;
}

document.getElementById('langToggleBtn').addEventListener('click', ()=>{
  setLanguage(currentLang === 'el' ? 'en' : 'el');
});
loadSavedLanguage();

// --- Input validation / clamping ---
// HTML min/max attributes only affect the spinner arrows, not manually typed
// values, so we enforce real bounds here on blur (not on every keystroke,
// so the user can still type freely mid-edit).
const FIELD_BOUNDS = {
  amount: {min:0}, down: {min:0}, installments: {min:1, max:600}, rate: {min:0, max:100},
  prepMonth: {min:1}, prepAmount: {min:0},
  grossSalary: {min:0}, ssRate: {min:0, max:100}, taxCredit: {min:0},
  overworkHours: {min:0, max:300}, holidayHours: {min:0, max:300}, overtimeHours: {min:0, max:300},
  extraNet: {min:0},
  motoInsurance: {min:0}, motoRoadTax: {min:0}, motoService: {min:0},
  motoFuel: {min:0}, motoParking: {min:0}, motoOther: {min:0},
  income: {min:0}, fixedExpenses: {min:0}, savingsPct: {min:0, max:100}, vacationSaved: {min:0},
  invStart: {min:0}, invYears: {min:1, max:100}, invContribution: {min:0}, invRate: {min:0, max:100}
};

Object.keys(FIELD_BOUNDS).forEach(id=>{
  const el = document.getElementById(id);
  if(!el) return;
  const {min, max} = FIELD_BOUNDS[id];
  el.addEventListener('blur', function(){
    if(this.value === '') return; // allow empty while editing/clearing
    let v = parseFloat(this.value);
    if(isNaN(v)) return;
    if(min !== undefined && v < min) v = min;
    if(max !== undefined && v > max) v = max;
    if(v !== parseFloat(this.value)){
      this.value = v;
      this.dispatchEvent(new Event('input'));
    }
  });
});


// --- Intro card dismissal ---
(function(){
  const introCard = document.getElementById('introCard');
  let dismissed = false;
  try { dismissed = localStorage.getItem('vivlio-intro-dismissed') === 'true'; } catch(err) {}
  if(dismissed){ introCard.style.display = 'none'; }
  document.getElementById('introCloseBtn').addEventListener('click', ()=>{
    introCard.style.display = 'none';
    try { localStorage.setItem('vivlio-intro-dismissed', 'true'); } catch(err) {}
  });
})();
