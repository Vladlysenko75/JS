// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.length)
// console.log(b.length)
// console.log(c.length)

//- Перевести до великого регістру наступні стрінгові значення

// let a = 'hello world';
// let b = 'lorem ipsum';
// let c = 'javascript is cool';
//
// console.log(a.toUpperCase())
// console.log(b.toUpperCase())
// console.log(c.toUpperCase())

//- Перевести до нижнього регістру настипні стрінгові значення

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
//
// console.log(a.toLowerCase())
// console.log(b.toLowerCase())
// console.log(c.toLowerCase())

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let cleanStr = str.trim()
// console.log(str, str.length)
// console.log(cleanStr, cleanStr.length)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']


// let stringToarray = (str) => {
//     return str.split(' ')
// }
// let str = 'Каждый охотник желает знать';
// console.log(stringToarray(str))

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

// let delete_characters = (str, length) => str.substr(0, length)
//
// let str = 'Каждый охотник желает знать';
// console.log(delete_characters(str,7))

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => str.split(' ').join('-').toUpperCase()
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str))

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let frst_Up = (str) => str.substr(0, 1).toUpperCase().concat(str.substr(1))
// let str = 'каждый охотник желает знать'
// console.log(frst_Up(str))

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// let capitalize = (str) => {
//     let splitter = str.split(' ')
//     for (i = 0; i < splitter.length; i++) {
//         // for (j = 0; j < splitter.length ;j++)
//             console.log(splitter[i][0].toUpperCase())
//     }
// }
// let str = 'каждый охотник желает знать';
// console.log(capitalize(str))

// let capitalize = (str) => {
//     let splitter = str.split(' ')
//     let newArr = []
//     for (const word of splitter) {
//         let newWord = word.slice(0, 1).toUpperCase() + word.slice(1)
//         newArr.push(newWord)
//     }
//     return newArr.join(' ')
// }
// let str = 'каждый охотник желает знать';
// console.log(capitalize(str))