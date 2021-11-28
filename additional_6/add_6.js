//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let satisfaction = 'наслаждение';
//
// function oppa(str, n) {
//     for (let i = 0; i < str.length; i += n) {
//         console.log(str.substr(i, n))
//     }
// }
// oppa(satisfaction, 3)

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let mail = 'someemail@gmail.com';
// let mail1 = 'someeMAIL@gmail.com'
// let mail2 = 'someeMAIL@i.ua'
// let mail3 = 'some.email@gmail.com'
// function emailValidator(email) {
//     if (!email.includes('@')) {
//         return console.log('Your email should include @ sign')
//     }
//     let emailSignIndex = email.indexOf('@')
//     if (email.substring(0,emailSignIndex).length < 3) {
//         return console.log('enter minimum 3 charts before @')
//     }
//     if (email.substring(0,emailSignIndex).includes('.')) {
//         return console.log('your email name shouldnt include <.> sign before <@> sign')
//     }
//     let dotIndex = email.indexOf('.')
//     if (email.substring(emailSignIndex,dotIndex).length <= 2) {
//         return console.log('domain name should be longer then 2 charts')
//     } else return console.log(`Your email - ${email} is valid!`)
//
// }
// console.log(emailValidator(mail))
// console.log(emailValidator(mail1))
// console.log(emailValidator(mail2))
// console.log(emailValidator(mail3))

// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];


// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((a, b) => a.modules.length - b.modules.length))
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//

// let astronomy = "Астрономия это наука о небесных объектах";
//
// function count(str, stringsearch) {
//     let temp = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringsearch) {
//             temp.push(str[i])
//         }
//     }
//     return temp.length
// }
//
// console.log(count(astronomy, 'о'));

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";

// let str = "Сила тяжести приложена к центру масс тела";
// function cutString(str, n) {
//     let arr = [];
//     arr = str.split(' ')
//     arr.length = n
//     return arr.join(' ')
// }
//
// console.log(cutString(str, 4))