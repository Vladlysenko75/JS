// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let numbers = [5, 7, 17, 21, 27];
// let words = ['Anna', 'Igor', 'Grisha', 'Vlada', 'Dmytro'];
// let mix = [5, true, 'Anna', 27, 'Viktor'];
// console.log(numbers)
// console.log(words)
// console.log(mix)

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let empty = [];
// empty[0] = 'start';
// empty[1] = 23;
// empty[2] = false;
// console.log(empty)

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let a = 0; a <= 10; a++) {
//     document.write('<div>item</div>')
// }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let a = 0; a <= 10; a++) {
//     document.write(`<div>item ${a}</div>`)
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let a = 0;
// while (a <= 19) {
//     document.write(`<div><h1>OP</h1></div>`)
//     a++
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let a = 0;
// while (a <= 19) {
//     document.write(`<div><h1>OP ${a}</h1></div>`)
//     a++
// }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let array = [5, 7, 17, 21, 27, 34, 47, 74, 88, 99];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let array = ['Anna', 'Igor', 'Grisha', 'Vlada', 'Dmytro', 'Poltava', 'Kyiv', 'Odessa', 'Chop', 'Gorb'];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let array = ['Anna', 2, 'Grisha', 'Vlada', 23, 'Poltava', true, 'Odessa', false, 'Gorb'];
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let array = ['Anna', 2, 'Grisha', 'Vlada', 23, 'Poltava', true, 'Odessa', false, 'Gorb'];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'boolean')
//     console.log(array[i])
// }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let array = ['Anna', 2, 'Grisha', 'Vlada', 23, 'Poltava', true, 'Odessa', false, 'Gorb'];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'number')
//         console.log(array[i])
// }

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = ['Anna', 2, 'Grisha', 'Vlada', 23, 'Poltava', true, 'Odessa', false, 'Gorb'];
// for (i = 0; i < array.length; i++) {
//     if (typeof array[i] === 'string')
//         console.log(array[i])
// }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let array = [];
//
// array[0] = 'start';
// array[1] = 23;
// array[2] = false;
// array[3] = 'end';
// array[4] = 'Grisha';
// array[5] = 74;
// array[6] = true;
// array[7] = 54;
// array[8] = 'water';
// array[9] = 'middle';
//
// for (i = 0; i <array.length; i++) {
//     console.log(array[i])
// }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 10; i++) {
//     console.log('поточний номер кроку' + [i])
//     document.write('поточний номер кроку' + [i])
// }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i++) {
//     console.log('поточний номер кроку' + [i])
//     document.write('поточний номер кроку' + [i])
// }

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (i = 0; i < 100; i+=2) {
//     console.log('поточний номер кроку' + [i])
//     document.write('поточний номер кроку' + [i])
// }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0)
//     console.log('поточний номер кроку' + [i])
//     document.write('поточний номер кроку' + [i])
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (i = 0; i < 100; i++) {
//     if (i % 3 === 0)
//         console.log('поточний номер кроку' + [i])
//     document.write('поточний номер кроку' + [i])
// }