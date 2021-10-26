function validateRecipeWithQuantity(fridge, ingredients) {
if(fridge['tomato']>=ingredients['tomato'] && fridge['onion']>=ingredients['onion'])return true; else return false
}
console.log(validateRecipeWithQuantity({'tomato': 3, 'onion': 4},  {'tomato': 1, 'onion': 4}))