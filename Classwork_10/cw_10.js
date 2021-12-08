// // - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// //
// // let form1 = document.createElement('form')
// // let form2 = document.createElement('form')
// // let input1 = document.createElement('input')
// // input1.setAttribute('type', 'number')
// // let input2 = document.createElement('input')
// // input2.setAttribute('type', 'email')
// // let input3 = document.createElement('input')
// // input3.setAttribute('type', 'string')
// // let input4 = document.createElement('input')
// // input4.setAttribute('type', 'password')
// // let button = document.createElement('button')
// //
// // button.innerText = 'collect'
// //
// // form1.append(input1, input2)
// // form2.append(input3, input4)
// // document.body.append(form1, form2)
// // document.body.append(button)
// // button.onclick = function () {
// //     for (let i = 0; i < document.forms.length; i++) {
// //         for (let j = 0; j < document.forms[i].elements.length; j++)
// //             console.log(document.forms[i].elements[j].value)
// //     }
// // }
// //
// // - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// // (Додатковачастина для завдання)
// //
// // let input1 = document.createElement('input')
// // input1.setAttribute('type', 'number')
// // let input2 = document.createElement('input')
// // input2.setAttribute('type', 'number')
// // let input3 = document.createElement('input')
// // input3.setAttribute('value', 'value')
// // let btn = document.createElement('button')
// //
// // btn.innerText = 'Generate';
// //
// // document.body.append(input1, input2, input3, btn)
// // btn.onclick = function () {
// //     let table = document.createElement('table')
// //     table.setAttribute('border',3)
// //     for (let i = 0; i < input1.value; i++) {
// //         let string = document.createElement('tr')
// //         for (let j = 0; j < input2.value; j++) {
// //             let box = document.createElement('td')
// //             box.innerText = input3.value
// //             string.append(box)
// //         }
// //         document.body.appendChild(table)
// //         table.append(string)
// //     }
// // }
//
// // - Сворити масив не цензцрних слів.
// let censored = ['опа','нишпора','грива'];
// //     Сворити інпут текстового типу.
// let input = document.createElement('input');
// input.setAttribute('type','text')
// document.body.append(input)
// // if (input)
// //     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// // кинути алерт з попередженням.
// //     Перевірку робити при натисканні на кнопку
// let btn = document.createElement('button');
// document.body.append(btn)
// btn.innerText = 'check';
// // btn.onclick = function () {
// //     for (let word of censored) {
// //         if (word === input.value ) {
// //             alert('be polite');
// //             input.value = '';
// //             return;
// //         }
// //     }
// //     if (input.value) {
// //         alert('everything is fine');
// //         input.value = '';
// //     }
// // }
//
// //
// //
// // - Сворити масив не цензцрних слів.
// //     Сворити інпут текстового типу.
// //     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// //     Кинути алерт з попередженням у випадку якщо містить.
// //     Перевірку робити при натисканні на кнопку
// //
//
// btn.onclick = function () {
//     for (let word of censored) {
//         if (input.value.includes(word) ) {
//             alert('be polite');
//             input.value = '';le
//             return;
//         }
//     }
//     if (input.value) {
//         alert('everything is fine');
//         input.value = '';
//     }
// }
//