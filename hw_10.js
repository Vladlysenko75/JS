// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// let block = document.getElementById('text');
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     block.style.display = 'none';
// }
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.getElementById('btn');
// btn.onclick = function () {
//     btn.style.display = 'none';
// }
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let button = document.getElementById('btnAge')
// button.onclick = function () {
//     let age = document.getElementById('age').value;
//     if (age >= 18) {
//         alert('you can pass')
//     } else alert('you need to grow up')
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let press = document.querySelector('.here');
// let hidden = document.querySelector('.hide');
// press.onclick = function () {
//     hidden.classList.toggle('hidden')
// }
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comments = [
//     {title: 'Leo', body: 'swing your dual blades'},
//     {title: 'Don', body: 'dont break your wooden stick'},
//     {title: 'Mick', body: 'relax and eat some pizza'},
//     {title: 'Raf', body: 'remind me your special power'},
// ];
// for (let comment of comments) {
//     let mainBlock = document.createElement('div')
//     let knopka = document.createElement('button')
//     let comBlock = document.createElement('h2')
//     let comText = document.createElement('p')
//
//     comBlock.innerText = comment.title
//     comText.innerText = comment.body
//     knopka.innerText = 'Press to hide'
//
//     comText.id = `hider${comments.indexOf(comment)}`;
//
//     knopka.onclick = function () {
//         let sr = document.getElementById(`hider${comments.indexOf(comment)}`)
//         sr.classList.toggle('swipe')
//     }
//
//     mainBlock.append(comBlock,knopka,comText)
//     document.body.appendChild(mainBlock)
// }

