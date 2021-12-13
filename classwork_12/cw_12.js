// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(arr => {
        for (let obj of arr) {
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