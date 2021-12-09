//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
//створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
//Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
let favourites = [];
for (let i = 0; i < users.length; i++) {
    let userName = document.createElement('div');
    let userAge = document.createElement('div');
    let userStatus = document.createElement('div');
    let userBlock = document.createElement('div');
    let favourite = document.createElement('button');
    userBlock.className = `user-${i + 1}`
    favourite.id = `user-${i + 1}`



    favourite.innerText = 'Add to Favourite'
    userName.innerText = users[i].name
    userAge.innerText = users[i].age
    userStatus.innerText = users[i].status

    favourite.onclick = function () {
        favourites.push(users[2])
    }

    userBlock.append(userName, userAge, userStatus, favourite);
    document.body.appendChild(userBlock)
}
console.log(favourites)
