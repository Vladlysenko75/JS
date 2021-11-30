// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює клас тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)

// document.getElementById('main_header').className = 'sept-2021';
// console.log(document.getElementById('main_header').classList.value);

// b) робить шириниу елементу ul 400px

// let list = document.getElementsByTagName("ul")
// for (const l of list) {
//     l.style.width = '400px'
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let link = document.getElementsByClassName('linkList')
// for (l of link) {
//     l.style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// console.log(document.getElementsByClassName('listElement2')[0].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let lee = document.getElementsByTagName('li')
// for (l of lee) {
//     l.style.backgroundColor = 'grey'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
//
// let classer = document.getElementsByTagName('a');
// for (let c of classer) {
//     c.className = 'anchor'
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let changer = document.getElementsByTagName('a')
// for (const ch of changer) {
//     if (ch.innerText === 'link3') {
//         ch.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let ayer = document.getElementsByTagName('a')
// for (let a of ayer) {
//     a.className = `element_${a.innerText}`
//     console.log(a.classList);
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let sub = document.getElementsByClassName('sub-header');
// for (let s of sub) {
//     s.style.backgroundColor = prompt('Enter your desirable color')
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let sub = document.getElementsByClassName('sub-header');
// for (let s of sub) {
//     if (s.innerHTML === 'content 2 segment') {
//         s.style.color = prompt()
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// document.getElementsByClassName('content_1')[0].innerText = prompt()

// l) отримати елементи p та змінити їм padding на 20px

// let pesik = document.getElementsByTagName('p');
// for (p of pesik) {
//     p.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)

// let tex = document.getElementsByClassName('text2');
// for (let t of tex) {
//     t.innerText = 'sep-2021'
// }

