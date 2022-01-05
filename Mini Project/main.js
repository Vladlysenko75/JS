// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(arr => {
        for (let obj of arr) {
            let main = document.createElement('div');
            let id = document.createElement('div');
            let name = document.createElement('div');
            let btn = document.createElement('a');
            let location = document.getElementById('users')
            let products = 'products';

            id.innerText = `ID: ${obj.id}`;
            name.innerText = `Name: ${obj.name}`;
            btn.innerText = 'Get information about this user';
            btn.setAttribute('href', 'user-details.html');

            btn.onclick = function () {
                let newArr = JSON.parse(localStorage.getItem(products)) || [];
                newArr.push({ id: obj.id, })
                localStorage.setItem(products, JSON.stringify(newArr));
            }

            main.style.border = '5px solid red';
            main.style.margin = '5px';
            main.style.padding = '5px';
            main.style.width = '45vw';

            location.appendChild(main)
            main.append(id, name, btn)
        }
    })

// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)