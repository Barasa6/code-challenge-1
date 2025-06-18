const amount = parseFloat(prompt("Enter amount to send (KES):"))

const basicFee = amount * 0.015
const transactionFee = 
    basicFee < 10 ? 10 : 
    basicFee > 70 ? 70 : 
    basicFee;

const totalAmount = amount + transactionFee

console.log(`Amount to send: KES ${amount.toFixed(2)}`)
console.log(`Transaction fee: KES ${transactionFee.toFixed(2)}`)
console.log(`Total amount: KES ${totalAmount.toFixed(2)}`)