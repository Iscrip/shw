// console.log('Hello')

const state = {
    ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 4,
        meat: 2
    }
}

const arr1 = [[1, 2], [3,4], [5,6], [7,8]];
const arr2 = [5, 6];

const c = arr1.reduce((a, b) => {
    console.log(b);
    return [...a, b];
});
console.log(c);
// console.log(state)


// console.log(Object.keys(state.ingredients));  

// console.log(Object.values(state.ingredients)); 
const transformedIngredients = Object.keys(state.ingredients)
        .map(igKey => { 
       //     console.log(igKey)
      //      console.log(state.ingredients[igKey])
         //  console.log([...Array(state.ingredients[igKey])])
            // return [...Array(props.ingredients[igKey])].map((_, i) => {
            //     return <BurgerIngredient key={igKey + i} type={igKey} />;
                
            // });
        });