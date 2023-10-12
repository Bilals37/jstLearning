function Bank (bankName, location,ifscCode,branchCode) {
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
}
const yesBank = new Bank ("Yes Bank","Shrirampur","YESB0APSB06","APSB06 ")
const sbiBank = new Bank ("State Bank of India","Shrirampur","SBIN0000340","000340")
const mahaBank = new Bank ("Bank of Maharashrta","Shrirampur","MAHB0000446","000446")
const axisBank  = new Bank ("Axis Bank","Shrirampur","UTIB0000003 ","000003")

console.log(`Bank Details are: Bank Name: ${yesBank.bankName}, Location: ${yesBank.location}, IFSC Code: ${yesBank.ifscCode}, Branch Code: ${yesBank.branchCode}`);
console.log(" ");
console.log(`Bank Details are: Bank Name: ${sbiBank.bankName}, Location: ${sbiBank.location}, IFSC Code: ${sbiBank.ifscCode}, Branch Code: ${sbiBank.branchCode}`);
console.log(" ");
console.log(`Bank Details are: Bank Name: ${mahaBank.bankName},Location: ${mahaBank.location}, IFSC Code: ${mahaBank.ifscCode}, Branch Code: ${mahaBank.branchCode}`);
console.log(" ");
console.log(`Bank Details are: Bank Name: ${axisBank.bankName},Location: ${axisBank.location}, IFSC Code: ${axisBank.ifscCode}, Branch Code: ${axisBank.branchCode}`);
console.log(" ");
Bank.prototype.openTime= ("9 AM IST");
Bank.prototype.closeTime= ("6 PM IST");

console.log(`Opening Time of State Bank of India is ${sbiBank.openTime}`);
console.log(" ");
console.log(`The closing Time of ${axisBank.bankName} is ${axisBank.closeTime}`);
console.log(" ");
console.log(`The Branch Code of ${yesBank.bankName} is ${yesBank.branchCode} and Opening Time is ${yesBank.openTime}`);
console.log(" ");


