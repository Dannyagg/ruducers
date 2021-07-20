// array.reduce(callback, initialValue)

const numberArray =[1,2,3,4];
const lettersArray =['r','e','d','u','c','e','r'];
const reducerCallback = (accumulator,item) => {
    console.log ('accumulator, item: ', accumulator, item);
    return accumulator+item;
}

const total = numberArray.reduce(reducerCallback, 0);
const newString = lettersArray.reduce(reducerCallback, '');
console.log('The total is: ',typeof total, total);
console.log('New String is: ',typeof newString, newString);

const stateReducer =(state,action) => {
    switch (action.type) {
        case 'ADD':
            return state + action.item

        case 'RESET':
            return '';

        default:
            return state;
    }
}

//create a global STORE to store the state changes
let worStore = '';
worStore = stateReducer(worStore, {type: 'ADD', item: 'r'});
worStore = stateReducer(worStore, {type: 'ADD', item: 'e'});
worStore = stateReducer(worStore, {type: 'ADD', item: 'd'});
worStore = stateReducer(worStore, {type: 'ADD', item: 'u'});
worStore = stateReducer(worStore, {type: 'ADD', item: 'x'});
console.log('word store value is: ', worStore);

worStore = stateReducer(worStore, {type: 'RESET'});
console.log("word store value is: ", worStore);