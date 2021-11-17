// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//
// let array = [];
// let x = 0
// for (let i = 0; i < 50; i++) {
//     x++
//     if (x % 2 === 0){
//         array[array.length] = x;
//     }
// }
// console.log(array);

// b. заповнити його 50 непарними числами за допомоги циклу.

// let array = [];
// let x = 0
// for (let i = 0; i < 50; i++) {
//     x++
//     if (x % 2 !== 0){
//         array[array.length] = x;
//     }
// }
// console.log(array);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// var array = new Uint32Array(20);
// window.crypto.getRandomValues(array);
//
// console.log("Ваше счастливое число:");
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
//

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732

// let array = [];
// let min = 8;
// let max = 732;
// for (let i = 0; i < 20; i++) {
//     array.push(randomInteger(min, max))
// }
//
// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1)
//     rand = Math.round(rand);
//     return rand;
// }
//
// console.log(array)


//2. Вивести за допомогою console.log кожен третій елемен
// let array = [];
// let min = 8;
// let max = 732;
// for (let i = 0; i < 20; i+=3) {
//     array.push(randomInteger(min, max))
// }
//
// function randomInteger(min, max) {
//     let rand = min - 0.5 + Math.random() * (max - min + 1)
//     rand = Math.round(rand);
//     return rand;
// }
//
// console.log(array)

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// let array = [];
// let min = 8;
// let max = 732;
// for (let i = 0; i < 20; i += 3) {
//     array.push(randomInteger(min, max))
// }
// console.log( array.filter(elem => elem % 2 === 0) );
//
// function randomInteger(min, max) {
//     let getRandomInt = () => Math.round(Math.random() * (max - min) + min)
//     return getRandomInt();
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let array = [];
// let newarray = [];
// newarray = array;
// let min = 8;
// let max = 732;
// for (let i = 0; i < 20; i += 3) {
//     array.push(randomInteger(min, max))
// }
// console.log( array.filter(elem => elem % 2 === 0) );
// console.log(newarray.filter(elem => elem % 2 === 0))
//
// function randomInteger(min, max) {
//     let getRandomInt = () => Math.round(Math.random() * (max - min) + min)
//     return getRandomInt();
// }

// or :)
//
// let array = [];
// let min = 8;
// let max = 732;
// for (let i = 0; i < 20; i += 3) {
//     array.push(randomInteger(min, max))
// }
// console.log( array.filter(elem => elem % 2 === 0) );
// let newarray = [];
// let mix = array.concat(newarray)
// console.log(mix.filter(elem => elem % 2 === 0))
//
// function randomInteger(min, max) {
//     let getRandomInt = () => Math.round(Math.random() * (max - min) + min)
//     return getRandomInt();
// }

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let array = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < array.length; i++) {
//     if (array[i+1] % 2 === 0) {
//         console.log(array[i])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
// console.log(average([100,250,50,168,120,345,188]))

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let array = new Uint32Array(20);
// window.crypto.getRandomValues(array);
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//     let newarray = array[i] * 5;
//     console.log(newarray)
// }

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let array = ['color', 23, 'taste', 'view', true, 54]
//
// for (let i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number')
//     console.log(array[i])
// }

// 9. - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}},
//     {id: 2, name: 'petya', age: 30, status: true, adress: {user_id: 2, country: 'Poland', city: 'Krakow'}},
//     {id: 3, name: 'kolya', age: 29, status: true, adress: {user_id: 3, country: 'USA', city: 'Portland'}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {user_id: 4, country: 'USA', city: 'Miami'}}
// ]

// 10. - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let array = [];
// let x = 0
// for (let i = 0; i < 10; i++) {
//     x++
//     if (x % 2 === 0) {
//         array[array.length] = x;
//     }
// }
// console.log(array);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < array.length; i++) {
//     let empty = [];
//     empty = array[i];
//     console.log(empty)
// }

// or

// let array = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < array.length; i++) {
// }
// let empty = [];
// let newempty = empty.concat(array)
// console.log(newempty)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let sum = '';
// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }
// console.log(sum)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let array = [ 'a', 'b', 'c'];
// let i = 0;
// let sum ='';
// while (i < array.length) {
//     sum += array[i];
//     i++
// }
// console.log(sum)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
//
// let iterable = [ 'a', 'b', 'c'];
// let sum ='';
// for (let value of iterable) {
//     sum += value
// }
// console.log(sum)


// or

// const elements = ['a', 'b', 'c'];
// console.log(elements.join(''));