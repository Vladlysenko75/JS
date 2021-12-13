// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt('Enter number from 0 to 59');
// if (time <=15) {
//     console.log('first quarter')
//     } else if (time <=30) {
//     console.log('second quarter')
//     } else if (time <=45) {
//     console.log('third quarter')
//     } else if (time <=59) {
//     console.log('fourth quarter')
//     } else {
//         console.log('enter allowed numbers')
// }

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

// let day = +prompt('enter number from 1 to 31')
// if (day <=10) {
//     console.log('first decade')
// } else if (day <=20) {
//     console.log('second decade')
// } else if (day <=31) {
//     console.log('third decade')
// } else {
//     console.log('Enter valid iformation')
// }

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = true
// if (test !== true) {
//     console.log('Вірно')
// } else {
//     console.log('Неправильно')
// }

// let test = false
// if (test !== true) {
//     console.log('Вірно')
// } else {
//     console.log('Неправильно')
// }

// let test = true
// let asd = test !== true? 'Неправильно' : 'Вірно';
// console.log(asd)

//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a = 1;
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log ('Невірно')
// }

// let a = 0;
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log ('Невірно')
// }

// let a = -3;
// if (a !== 0) {
//     console.log('Вірно')
// } else {
//     console.log ('Невірно')
// }

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.

// let day = prompt('Enter day of the week(from uppercase)')
//
// switch (day) {
//     case 'Monday':
//         console.log('prepare for Tuesday work');
//         break;
//     case 'Tuesday':
//         console.log('prepare for Thursday work');
//         break;
//     case 'Thursday':
//         console.log('prepare for Friday work');
//         break;
//     case 'Friday':
//         console.log('Just chill');
//         break;
//     case 'Saturday':
//         console.log('chill after chill');
//         break;
//     case 'Sunday':
//         console.log('repeat the cycle');
//         break;
//     default :
//         console.log('GET A JOB! or attend OWU courses:)')
// }

//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4

// let number = +prompt('Enter a year')
//
// if (number %4 === 0) {
//     console.log('Високосний')
// } else {
//     console.log('не високосний')
// }

//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

// let js = prompt('Яка «офіційна» назва JavaScript?')
//
// if (js === 'ECMAScript') {
//     alert('Правильно!')
// } else {
//     alert('Не знаєте? ECMAScript!')
// }

