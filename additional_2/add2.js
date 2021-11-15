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