// - створити функцію яка обчислює та повертає площу прямокутника висотою

// let rectang_area = (side_a, sida_b) => side_a * sida_b;
// console.log(rectang_area(5,10))

//- створити функцію яка обчислює та повертає площу кола

// let round_area = (radius) => Math.PI * Math.pow(radius,2);
// console.log(round_area(12))

//- створити функцію яка обчислює та повертає площу циліндру

// let cylinder_area = (height, radius) => 2 * Math.PI * radius * (radius + height);
// console.log(cylinder_area(15,10))

//- створити функцію яка приймає масив та виводить кожен його елемент

// let array = [5, 7, 'hello', true];
//
// array.filter((x) => {
//     console.log(x)
// })

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// let text = (insert) => document.write(`<p>${insert}</p>`);
// text('dfgdfg dfgdfgdfg ddfgdfgdfg')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let list = (insert) => document.write(`<ul><li>${insert}</li><li>${insert}</li><li>${insert}</li></ul>`);
// console.log(list('insert'))

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (insert, quantity) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < quantity; i++) {
//         document.write(`<li>${insert}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// list('work', 10)

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrays = [5, 7, 'hello', true];
//
// let array_inlist = (array) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// console.log(array_inlist(arrays))

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let list = [{id: 1, name: 'Stepan', age: 40}, {id: 2, name: 'Grisha', age: 32}, {id: 3, name: 'Volodya', age: 74}];
// function ar_sampler(array) {
//     for (const person of array) {
//         document.write(`<div>${person.id}. ${person.name}, ${person.age}</div>`)
//     }
// }
//
// ar_sampler(list)
//
// let list = [{id: 1, name: 'Stepan', age: 40}, {id: 2, name: 'Grisha', age: 32}, {id: 3, name: 'Volodya', age: 74}];
//
// let ar_sampler = (array) => {
//     for (const person of array) {
//         document.write(`<div>${person.id}. ${person.name}, ${person.age}</div>`)
//     }
// }
//
// ar_sampler(list)

