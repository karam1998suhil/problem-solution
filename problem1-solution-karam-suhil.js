function validateRecipe(fridge, ingredients) {
    k=0;
    for (let i = 0; i < fridge.length; i++) {
        for (let j = 0; j < i; j++) {
            if(fridge[i]==ingredients[j]){
                k=k+1;
            }
        }
    }
   if( k==ingredients.length )  return true; else return false;   
    }
   console.log( validateRecipe(['tomato', 'banana','apple' , 'onion' , 'cheses'],  ['banana', 'onion', 'cheses']))