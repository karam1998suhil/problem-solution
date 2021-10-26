function whereIsMyFood(fridge, item) {
for (let i = 0; i < fridge.length; i++) {
  if(fridge[i]==item){
    return item;
  }
}
return -1
}
console.log(whereIsMyFood(['tomato', 'banana','apple' , 'onion' , 'cheses'],  'cheses'))