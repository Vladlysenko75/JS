// 1. - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function rectang_area (side_a, sida_b) {
//     let result = side_a * sida_b;
//     return result;
// }
//
// let x = rectang_area(5,10)
// console.log(x)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function round_area (radius) {
//     let result = Math.PI * Math.pow(radius,2)
//     return result;
// }
//
// let x = round_area(12)
// console.log(x)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function cylinder_area(height, radius) {
//     let s = 2 * Math.PI * radius * (radius + height)
//     return s;
// }
//
// let x = cylinder_area(15, 10)
// console.log(x)

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [5, 7, 'hello', true];
//
// function array_receiver(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i])
//     }
// }
//
// array_receiver(array)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function text (insert) {
//     document.write(`<p>${insert}</p>`)
// }
//
// text('dfgdfg, dfgdfgkkk, dfgdfgd, dfgdgdg ,dfggg dgdfgdf dfgd dfgg')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function list(insert) {
//     document.write(`<ul>
//         <li>${insert}</li>
//         <li>${insert}</li>
//         <li>${insert}</li>
//     </ul>`)
// }
//
// list('work')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function list(insert, quantity) {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${insert}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list('work', 10)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [5, 7, 'hello', true];

// function array_inlist(array) {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// array_inlist(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let list = [{id: 1, name: 'Stepan', age: 40}, {id: 2, name: 'Grisha', age: 32}, {id: 3, name: 'Volodya', age: 74}];
// function ar_sampler(array) {
//     for (const person of array) {
//         document.write(`<div>${person.id}. ${person.name}, ${person.age}</div>`)
//     }
// }
//
// ar_sampler(list)