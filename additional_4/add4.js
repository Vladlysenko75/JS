// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// function esli() {
//     let x = arguments[0];
//     if (arguments[1] === undefined ) {
//     } else x = arguments[1] + (arguments[0])
//     return x;
// }
// console.log(esli(5, 10))
// console.log(esli(5))

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
// [3,5,7,9]
//

// let raz = [1, 2, 3, 4];
// let dva = [2, 3, 4, 5];
//
// function indexsum(array1, array2) {
//     let arraysum = [];
//     for (let i = 0, p = 0, s = 0; i < array1.length, p < array2.length; i++, p++, s++) {
//         arraysum[s] = raz[i] + dva[p]
//     }
//     return arraysum
// }
//
// console.log(indexsum(raz, dva))

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// let obj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let davai = [];
// for (let i = 0, k = 0; i < obj.length; i++, k++)
//     for (let [key] of Object.entries(obj[i])) {
//         davai.push(key)
//     }
// console.log(davai)

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let obj = [{name: 'Dima', age: 13}, {model: 'Camry'}];
// let davai = [];
// for (let i = 0, k = 0; i < obj.length; i++, k++)
//     for (let [key, value] of Object.entries(obj[i])) {
//         davai.push(value)
//     }
// console.log(davai)