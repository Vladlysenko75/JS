// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//
// function smallest(number1, number2, number3) {
//     if (number1 < number2 && number1 < number3) {
//         document.write(`<div>${number1}</div>`)
//     } else if (number2 < number1 && number2 < number3) {
//         document.write(`<div>${number2}</div>`)
//     } else if (number3 < number2 && number3 < number1) {
//         document.write(`<div>${number3}</div>`)
//     }
// }
//
// smallest(30,50,90)

// - створити функцію яка повертає найбільше число з масиву
//
// function biggest (number1, number2, number3) {
//     if (number1 > number2 && number1 > number3) {
//         document.write(`<div>${number1}</div>`)
//     } else if (number2 > number1 && number2 > number3) {
//         document.write(`<div>${number2}</div>`)
//     } else if (number3 > number2 && number3 > number1) {
//         document.write(`<div>${number3}</div>`)
//     }
// }
//
// biggest(30,50,90)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1,2,10]
// function array_sum (array) {
//     let sum = 0;
//     for (element of array) {
//         sum += element;
//     }
//     return sum;
// }
//
// document.write(array_sum(array))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [1,2,10]
// function array_mid (array) {
//     let sum = 0;
//     for (element of array) {
//         sum += element;
//     }
//     return sum/array.length;
// }
// document.write(array_mid(array))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function smallest() {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const numbers of arguments) {
//         if (numbers > max) {
//             max = numbers;
//         }
//         if (numbers < min) {
//             min = numbers;
//         }
//     }
//     console.log(max)
//     return min;
// }
// smallest(5, 6, 8, 20, 2, 15)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random_array(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array;
// }
// document.write(random_array(15))

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function random_array(length, limit) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * limit));
//     }
//     return array;
// }
// document.write(random_array(15, 14))

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let forward = [1,2,3];
// function reverse(array) {
//     let backward = array.reverse()
//     return backward;
// }
// console.log(reverse(forward))