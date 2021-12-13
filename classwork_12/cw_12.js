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

                box.style.border = '5px dashed blue'
                box.style.margin = '5px'
                box.style.padding = '5px'

                boxId.innerText = `ID: ${obj.id}`;
                boxBody.innerText = `Body: ${obj.body}`;
                boxTitle.innerText = `Title: ${obj.title}`;
                btn.innerText = 'Show Title';

                box.append(boxId, boxBody, boxTitle, btn);
                document.body.appendChild(box);

                btn.onclick = function () {
                    fetch('https://jsonplaceholder.typicode.com/comments')
                        .then(resp => resp.json())
                        .then(coms => {
                                for (let com of coms) {
                                    if (obj.id === com.postId) {
                                        let inBox = document.createElement('div');
                                        let comBody = document.createElement('div');
                                        let email = document.createElement('div');
                                        let comID = document.createElement('div');
                                        let name = document.createElement('div');

                                        comBody.innerText = `Body: ${com.body}`;
                                        email.innerText = `Email: ${com.email}`;
                                        comID.innerText = `ID: ${com.id}`;
                                        name.innerText = `Name: ${com.name}`;

                                        inBox.style.border = '5px solid red';
                                        inBox.style.margin = '5px';
                                        inBox.style.padding = '5px';

                                        inBox.append(comBody,email,comID,name);
                                        box.appendChild(inBox)
                                    }

                            }
                        })
                }

            }
        }
    )