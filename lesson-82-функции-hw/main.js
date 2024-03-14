function sayHello(name) {
    return `Hello ${name}!`
}

console.log(sayHello('Alex'))
console.log('-----------')

// --------------------------

const numbers = [1, 22, 333, 4, 5, 6, 7, 88]
const numbersLowerTen = [1, 2, 3, 4, 5]

function filterGreaterNumber(array) {
    let found = false;
    let arrayGreaterTen = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            arrayGreaterTen.push(array[i]);
            found = true;
        }
    }
    if (!found) {
        return 'В массиве нет чисел больше 10';
    }
    return arrayGreaterTen
}

console.log(filterGreaterNumber(numbers))
console.log(filterGreaterNumber(numbersLowerTen))
console.log('-----------')

// --------------------------

function calculator(firstNumber, secondNumber, operator) {
    let result = 0

    if (operator === '+') {
        result = firstNumber + secondNumber;
    }
    else if (operator === '-') {
        result = firstNumber - secondNumber;
    }
    else if (operator === '*') {
        result = firstNumber * secondNumber;
    }
    else if (operator === '/') {
        result = firstNumber / secondNumber
    }
    else {
        result = 'Ошибка'
    }
    return result
}

console.log(calculator(2, 3, '+'))
console.log(calculator(2, 3, '-'))
console.log(calculator(2, 3, '*'))
console.log(calculator(2, 3, '/'))
console.log(calculator(2, 3, '**'))