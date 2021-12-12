// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// //     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// //     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// let cop = document.getElementById('stop');
// cop.style.width = '150px'
// cop.style.height = '30px'
// cop.style.background = 'gold'
// document.addEventListener('click', function (e) {
//     console.log(e.target.localName);
//     console.log(e.target.classList);
//     console.log(e.target.id);
//     console.log(`${e.srcElement.clientHeight}*${e.srcElement.clientWidth}`);
// })
//
// // - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// //     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// //     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// //
//
// document.addEventListener('click', function (e) {
//     let modal = document.createElement('div');
//     modal.className = 'modal';
//     modal.id = 'modality';
//     modal.style.position = 'fixed';
//     modal.style.padding = '20px';
//     modal.style.top = '50%';
//     modal.style.left = '50%';
//     modal.style.border = '1px solid gold';
//     modal.style.borderRadius = '10px';
//     modal.style.zIndex = '10';
//     modal.style.backgroundColor = 'gray';
//     modal.style.width = '500px';
//     modal.style.height = '200px';
//     modal.innerText = `Element:${e.target.localName} Class names:${e.target.classList} Id: ${e.target.id} Size: ${e.srcElement.clientHeight}*${e.srcElement.clientWidth} `
//
//     document.body.appendChild(modal)
// })


//-- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
//- Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.

//1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)

//2й - оставляет старше 29 лет включительно

//3й - оставляет тех у кого город киев

let status = document.getElementById('status')
let age = document.getElementById('age');
let city = document.getElementById('city');
let destination = document.getElementById('Write_here')

function fun1() {
    if (status.checked === true) {
        let falseStatus = usersWithAddress.filter(st => st.status === false);
        destination.innerText = JSON.stringify(falseStatus);
    }
    if (age.checked === true) {
        let old = usersWithAddress.filter((old => old.age >= 29));
        destination.innerText = JSON.stringify(old)
    }
    if (city.checked === true) {
        let city = usersWithAddress.filter(city => city.address.city === 'Kyiv');
        destination.innerText = JSON.stringify(city)
    }
    if (status.checked && age.checked) {
        let statusAge = usersWithAddress.filter(st => st.status === false && st.age >= 29);
        destination.innerText = JSON.stringify(statusAge);
    }
    if (status.checked && city.checked) {
        let statusAge = usersWithAddress.filter(st => st.status === false && st.address.city === 'Kyiv');
        destination.innerText = JSON.stringify(statusAge)
    }

    if (age.checked && city.checked) {
        let statusAge = usersWithAddress.filter(st => st.address.city === 'Kyiv' && st.age >= 29);
        destination.innerText = JSON.stringify(statusAge)
    }
    if (status.checked && age.checked && city.checked) {
        let statusAge = usersWithAddress.filter(st => st.status === false && st.age >= 29 && st.address.city === 'Kyiv');
        destination.innerText = JSON.stringify(statusAge)
    }
}

// Данные выводить в документ
//

//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// let forward = document.createElement('button');
// let backward = document.createElement('button');
// forward.innerText = 'Forward';
// backward.innerText = 'Backward';
// document.body.append(forward)
// document.body.append(backward)
// let dom = [];
//
// function recursion(startElement) {
//     // console.log(startElement)
//     dom.push(startElement)
//     if (startElement.children.length) {
//         for (let i = 0; i < startElement.children.length; i++)
//             recursion(startElement.children[i])
//     }
// }
//
// recursion(document.body)
// let count = 0;
// forward.onclick = function () {
//     let next = dom[count];
//     console.log(next)
//     if (count < dom.length) {
//         count++
//     }
//     if (count === dom.length) {
//         return console.log('That`s all folks! Move Backward!')
//     }
// };
// backward.onclick = function () {
//     let current = dom[count];
//     count--
//     console.log(current)
//     if (current === undefined) {
//         console.log('That`s all folks! Move Forward!')
//     }
// };

//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

// let i = 1;
// let images = [];
// let nextPic = document.createElement('button');
// let previousPic = document.createElement('button');
// nextPic.innerText = 'Next Picture';
// previousPic.innerText = 'Previous Picture';
// document.body.append(nextPic, previousPic)
//
// images[0] = "https://salvemusic.com.ua/wp-content/uploads/2020/12/jim-morrison.jpg";
// images[1] = "https://i.hurimg.com/i/hdn/75/600x400/60ded33f4e3fdf0bfcebef57.jpeg";
// images[2] = "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F041ad41a-4828-11ea-a5b7-24df8ee7a872.jpg?crop=3120%2C3120%2C31%2C210";
// images[3] = "https://lastfm.freetls.fastly.net/i/u/770x0/4dcc6ee88ea14805a62b3b3e54a87c78.jpg";
//
// nextPic.onclick = function () {
//     document.slide.src = images[i];
//     if (i < images.length - 1) {
//         i++;
//     } else i = 0;
// }
// previousPic.onclick = function () {
//     document.slide.src = images[i];
//     if (i) {
//         i--;
//     } else i = 3;
// }

//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// document.onmouseup = function wrapSelectedText() {
//     let selection= window.getSelection().getRangeAt(0);
//     let selectedText = selection.extractContents();
//     let span= document.createElement("span");
//     span.style.fontWeight = "Bold";
//     span.appendChild(selectedText);
//     selection.insertNode(span);
// }

