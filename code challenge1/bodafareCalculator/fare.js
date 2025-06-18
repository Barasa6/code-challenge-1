const distance = parseFloat(prompt("Unafika wapi Mkubwa? Kilometer ngapi: "))


const baseFare = 50
const distanceCharge = distance * 15
const totalFare = baseFare + distanceCharge

console.log(`Uko kwote? hio ni ${distance} km;`)
console.log(`faer yako ni : KES ${baseFare}`)
console.log(`Mpaka marudio: KES ${distanceCharge}`)
console.log(`Total: KES ${totalFare}`)
console.log("\nPanda bodaboda!")