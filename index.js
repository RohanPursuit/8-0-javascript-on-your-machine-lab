/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const operator = process.argv[2];
    const inputs = process.argv.slice(3);
    let number = 0;

    if(!operator) {
        return 'No operation provided...'
    }
    
    if(operator === 'plus' && inputs.length) {
        for(let i = 0; i < inputs.length; i++) {
            
            number += Number(inputs[i]);
        }
        return number;


    } else if (operator === 'minus' && inputs.length) {
        number = Number(inputs[0]);
        for(let i = 1; i < inputs.length; i++) {
            
           number -= Number(inputs[i]);

        }
        return number;

    } else if (operator === 'divide') {
        return 'Invalid operation: divide'

    } else if (operator === 'multiply') {
        return 'Invalid operation: multiply'

    } else if (operator === 'modulo') {
        return 'Invalid operation: modulo'

    } else {
        return 'No numbers provided...'
    }

    return 'done'
}





// Don't change anything below this line.
module.exports = calculator;
