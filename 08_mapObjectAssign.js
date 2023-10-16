class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate) {
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }
}

const axisBank = new Bank("Axis Bank", "Shrirampur", "854762354787", "UTIB0000003", "12%");
const sbiBank = new Bank("State Bank of India", "Shrirampur", "5633404578203", "SBIN0000340", "9%");
const iciciBank = new Bank("ICICI Bank", "Ahmadnagar", "5010059777917", "ICICIC0000966", "10%");
const kotakBank = new Bank("Kotak Mahindra Bank", "Sangamner", "845698752146", "KKBK002023", "13%");
const hdfcBank = new Bank("HDFC Bank", "Shrirampur", "45896325412589", "HDFC000966", "9%");
const punjabBank = new Bank("Punjab National Bank", "Newasa", "854693214789", "PUNB0123456", "12%");

const bankMap = new Map();
bankMap.set(axisBank.accountNo, axisBank);
bankMap.set(sbiBank.accountNo, sbiBank);
bankMap.set(iciciBank.accountNo, iciciBank);
bankMap.set(kotakBank.accountNo, kotakBank);
bankMap.set(hdfcBank.accountNo, hdfcBank);
bankMap.set(punjabBank.accountNo, punjabBank);

const totalKeys = bankMap.keys();
for (const key of totalKeys) {
    const details = bankMap.get(key);
    console.log(`Bank Name: ${details.bankName} Account NO: ${details.accountNo} Interest Rate: ${details.interestRate}`);
}
