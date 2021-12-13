// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(arr => {
        for (let obj of arr) {
            console.log(obj)

            let box = document.createElement('div');
            let boxId = document.createElement('div');
            let boxBody = document.createElement('div');
            let boxTitle = document.createElement('div');
            let btn = document.createElement('button');

            boxId.innerText = obj.id;
            boxBody.innerText = obj.body;
            btn.innerText = 'Show Title';

            box.append(boxId,boxBody,btn);
            document.body.appendChild(box);

            btn.onclick = function () {
                boxTitle.innerText = obj.title;
                box.appendChild(boxTitle);
            }
        }
    })