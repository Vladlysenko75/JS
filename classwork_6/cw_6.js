// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let n4 = 'Albus---__..Damb'
//
// let norm = (string) => {
//     return string
//         .replace('..', ' ')
//         .replace('---', ' ')
//         .replace('__', ' ')
//         .replace('   ', ' ')
// }
// console.log(norm(n4))

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function random_array(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array;
// }
// document.write(random_array(15))

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// function random_array(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array;
// }
// console.log(random_array(10).sort((a, b) => a - b))
// console.log(random_array(10).sort((a, b) => b - a))

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// function random_array(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array.filter(number => number % 2 === 0)
// }
//
// console.log(random_array(10))

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// function random_array(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array;
// }
//
// console.log(random_array(10).map(value => value + ''))

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// function random_array(length) {
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random() * 100));
//     }
//     return array;
// }
//
// let sortNums = (array, direction) => {
//     if (direction === 'ascending') {
//        return array.sort((a, b) => a - b)
//     }
//     if (direction === 'descending') {
//        return array.sort((a, b) => b - a)
//     }
// }
//
// console.log(sortNums(random_array(10),'descending'))

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
//console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// console.log(coursesAndDurationArray.filter(op => op.monthDuration > 5))
