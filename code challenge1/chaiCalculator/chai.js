const numberOfCups = parseFloat(prompt("How many cups of chai do you want to make?:  "))

const water = numberOfCups * 200
const milk = numberOfCups * 50
const teaLeaves = numberOfCups
const sugar = numberOfCups * 2


console.log(
`For ${numberOfCups} cup(s) of Kenyan chai, you will need:
- Water: ${water} ml
- Milk: ${milk} ml
- Tea Leaves: ${teaLeaves} tablespoon(s)
- Sugar: ${sugar} teaspoon(s)`)