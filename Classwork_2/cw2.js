// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let number1 = +prompt('Enter number 1')
// let number2 = +prompt('Enter number 2')
//
// if (number1 > number2) {
//     alert(number1)
// }
// else if (number1 === number2) {
//     alert('they both equal')
// }
// else {
//     alert(number2)
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let apartment = +prompt('Enter apartment number from 1 to 90')

if (apartment <=20) {
    alert(1)
}
if (apartment >20 && apartment <=48) {
    alert(2)
}
if (apartment >48 && apartment <=90) {
    alert(3)
}
//- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('enter number')
// if (number === 10) {
//     alert('ВІРНО')
// } else {
//     alert('НЕВІРНО')
// }

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = 2;
// if (typeof x === "number") {
//     alert(1)
// }
// else if (typeof x === "string") {
//     alert(2)
// }
// else if (typeof x === "boolean") {
//     alert(3)
// }
// else if (typeof x === "object") {
//     alert(3)
// }
// else {
//     alert('dont enter this again')
// }
// console.log(x)

// let x = 'dfgdfg';
// if (typeof x === "number") {
//     alert(1)
// }
// else if (typeof x === "string") {
//     alert(2)
// }
// else if (typeof x === "boolean") {
//     alert(3)
// }
// else if (typeof x === "object") {
//     alert(3)
// }
// else {
//     alert('dont enter this again')
// }
// console.log(x)

// let x = true;
// if (typeof x === "number") {
//     alert(1)
// }
// else if (typeof x === "string") {
//     alert(2)
// }
// else if (typeof x === "boolean") {
//     alert(3)
// }
// else if (typeof x === "object") {
//     alert(3)
// }
// else {
//     alert('dont enter this again')
// }
// console.log(x)



// let x = [1, 2, 4];
// if (typeof x === "number") {
//     alert(1)
// }
// else if (typeof x === "string") {
//     alert(2)
// }
// else if (typeof x === "boolean") {
//     alert(3)
// }
// else if (typeof x === "object") {
//     alert(3)
// }
// else {
//     alert('dont enter this again')
// }
// console.log(x)

// let x = {a: 1};
// if (typeof x === "number") {
//     alert(1)
// }
// else if (typeof x === "string") {
//     alert(2)
// }
// else if (typeof x === "boolean") {
//     alert(3)
// }
// else if (typeof x === "object") {
//     alert(3)
// }
// else {
//     alert('dont enter this again')
// }
// console.log(x)

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temp = 10;
// if (temp >= 10 && temp < 23) {
//     alert('ми йдемо ВЧИТИСЯ')
// } else {
//     alert('сидимо вдома і вчимося ОНЛАЙН')
// }
//
// console.log(temp)

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let quiz = +prompt('Enter number from 1 to 5')
// switch (quiz) {
//     case 1:
//         alert('Car');
//         break;
//     case 2:
//         alert('motorcycle');
//         break;
//     case 3:
//         alert('Phone');
//         break;
//     case 4:
//         alert('Cruiz');
//         break;
//     case 5:
//         alert('Sanatorium');
//         break;
//     default :
//         alert('No prize')
// }

// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >=3) {
//     alert('This array is big, it  consists of more then 3 elements')
// } else {
//     alert('This array is small, it  consists of less then 3 elements')
// }
//
// console.log(friends)

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

// let number1 = 20, number2 = 10, number3 = 30;
//
// if (number1 > number2 && number1 < number3) {
//     alert(number1)
// } else if (number2 >number1 && number2 < number3) {
//     alert(number2)
// } else if (number3 > number1 && number3 < number2) {
//     alert(number3)
// }
//
// console.log(number1)

// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// let a = 1, b = 2;
// let result = a + b < 4? 'Мало' : 'Багато';
// console.log(result)

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором

// let number = -74;
// let result = number > 0? 'positive' : number === 0? 'zero' : 'negative';
// console.log(result)