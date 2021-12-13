
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// let loca = document.getElementById('here');
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(resp => resp.json())
//     .then(arr => {
//         for (let obj of arr) {
//             let box = document.createElement('div');
//             let idBox = document.createElement('div');
//             let body = document.createElement('div');
//             let title = document.createElement('div');
//
//             box.className = 'post';
//
//             idBox.innerText = obj.id;
//             body.innerText = obj.body;
//             title.innerText = obj.title;
//
//             box.append(idBox,title,body);
//             loca.appendChild(box);
//         }
//     })
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments


let loca = document.getElementById('here');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(resp => resp.json())
    .then(arr => {
        for (let obj of arr) {
            let box = document.createElement('div');
            let idBox = document.createElement('div');
            let body = document.createElement('div');
            let email = document.createElement('div');
            let name = document.createElement('div');

            console.log(obj)
            box.className = 'comment';

            idBox.innerText = obj.id;
            body.innerText = obj.body;
            email.innerText = obj.email;
            name.innerText = obj.name;
            //
            box.append(idBox,email,name,body)
            loca.appendChild(box);
        }
    })