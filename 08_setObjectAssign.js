class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}

const axisBank = new Bank("Axis Bank", "Shrirampur", 854762354787, "UTIB0000003", 0.12); // 12%
const sbiBank = new Bank("State Bank of India", "Shrirampur", 5633404578203, "SBIN0000340", 0.09); // 9%
const iciciBank = new Bank("ICICI Bank", "Ahmadnagar", 5010059777917, "ICICIC0000966", 0.10); // 10%
const kotakBank = new Bank("Kotak Mahindra Bank", "Sangamner", 845698752146, "KKBK002023", 0.13); // 13%
const hdfcBank = new Bank("HDFC Bank", "Shrirampur", 45896325412589, "HDFC000966", 0.09); // 9%
const punjabBank = new Bank("Punjab National Bank", "Newasa", 854693214789, "PUNB0123456", 0.12); // 12%

const banks = new Set([axisBank, sbiBank, iciciBank, kotakBank, hdfcBank, punjabBank]);

for (const bank of banks) {
    console.log(`Bank name==> ${bank.bankName}, Location==> ${bank.location}`);
}
