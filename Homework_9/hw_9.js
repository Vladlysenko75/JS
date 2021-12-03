// Все робити за допомоги js.
// - створити блок,
let div = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
div.classList.add('wrap','collapse','alpha','beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
div.style.backgroundColor = 'red';
div.style.color = 'blue';
div.style.fontSize = '40px';
div.style.height = '40px';
// - додати цей блок в body.
document.body.appendChild(div);
// - клонувати його повністю, та додати клон в body.
let newDiv = div.cloneNode(true);
document.body.appendChild(newDiv);
//
// - Є масив:
let arr = ['Main','Products','About us','Contacts'];
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
for (let element of arr) {
    let li = document.createElement('li')
    li.innerText = element
    let location = document.getElementsByClassName('menu')
    location[0].appendChild(li)
}
// Завдання робити через цикли.
//
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let course of coursesAndDurationArray) {
    let diva = document.createElement('div')
    diva.innerText = `${course.title} ${course.monthDuration}`
    document.body.appendChild(diva)
}
//
// - Є масив
let coursesAndDurationArrays = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (let course of coursesAndDurationArrays) {
    let divs = document.createElement('div')
    divs.className = 'item'
    let h1 = document.createElement('h1')
    h1.className = 'heading'
    h1.innerText = course.title
    let p = document.createElement('p')
    p.className = 'description'
    p.innerText = course.monthDuration

    divs.append(h1,p)
    document.body.appendChild(divs)
}