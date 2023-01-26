console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
    
}

console.log(`I have ${basket} in my basket`);
//Adding eggs to basket
let result = addItem('eggs');
console.log(result);
console.log(`I have ${basket} in my basket`);

//This function will console log everything
function listItems() {
    for (let item of basket) {
        console.log(item);
    }
}
addItem('banana');
listItems();
console.log(`I have ${basket} in my basket`);

//This function will empty basket
function empty() {
    basket = '';
}
empty();
console.log(`I have ${basket} in my basket`);