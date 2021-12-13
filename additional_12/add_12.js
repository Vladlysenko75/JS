// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(arr => {
            for (let obj of arr) {
                let main = document.createElement('div');
                let id = document.createElement('div');
                let name = document.createElement('div');
                let username = document.createElement('div');
                let email = document.createElement('div');
                let address = document.createElement('div');
                let street = document.createElement('div');
                let suit = document.createElement('div');
                let city = document.createElement('div');
                let zipcode = document.createElement('div');
                let geo = document.createElement('div');
                let lat = document.createElement('div');
                let lng = document.createElement('div');
                let phone = document.createElement('div');
                let website = document.createElement('div');
                let company = document.createElement('div');
                let companyName = document.createElement('div');
                let catchPhrase = document.createElement('div');
                let bs = document.createElement('div');
                let btn = document.createElement('button')

                id.innerText = obj.id;
                name.innerText = obj.name;
                username.innerText = obj.username;
                email.innerText = obj.email;
                street.innerText = obj.address.street;
                suit.innerText = obj.address.suite;
                city.innerText = obj.address.city;
                zipcode.innerText = obj.address.zipcode;
                lat.innerText = obj.address.geo.lat;
                lng.innerText = obj.address.geo.lng;
                phone.innerText = obj.phone;
                website.innerText = obj.website;
                companyName.innerText = obj.company.name;
                catchPhrase.innerText = obj.company.catchPhrase;
                bs.innerText = obj.company.bs;
                btn.innerText = 'Get Posts';

                main.style.border = '5px solid red';
                main.style.margin = '5px';
                main.style.padding = '5px';

                document.body.appendChild(main)
                main.append(id, name, username, email, address, phone, website, company, btn)
                address.append(street, suit, city, zipcode, geo)
                geo.append(lat, lng)
                company.append(companyName, catchPhrase, bs)

                btn.onclick = function () {
                    fetch('https://jsonplaceholder.typicode.com/posts')
                        .then(resp => resp.json())
                        .then(posts => {
                            for (let post of posts) {
                                if (obj.id === post.userId) {
                                    let postBox = document.createElement('div');
                                    let postId = document.createElement('div');
                                    let postBody = document.createElement('div');
                                    let postTitle = document.createElement('div');
                                    let postBtn = document.createElement('button');

                                    postBox.style.border = '5px dashed blue';
                                    postBox.style.margin = '5px';
                                    postBox.style.padding = '5px';

                                    postId.innerText = `ID: ${post.id}`;
                                    postBody.innerText = `Body: ${post.body}`;
                                    postTitle.innerText = `Title: ${post.title}`;
                                    postBtn.innerText = 'Show Comments';

                                    postBox.append(postId,postBody,postTitle,postBtn);
                                    main.append(postBox)

                                    postBtn.onclick = function () {
                                        fetch('https://jsonplaceholder.typicode.com/comments')
                                            .then(resp => resp.json())
                                            .then(coms => {
                                                for (let com of coms) {
                                                    console.log(com)
                                                    if (post.id === com.postId) {
                                                        let inBox = document.createElement('div');
                                                        let comBody = document.createElement('div');
                                                        let email = document.createElement('div');
                                                        let comID = document.createElement('div');
                                                        let name = document.createElement('div');

                                                        comBody.innerText = `Body: ${com.body}`;
                                                        email.innerText = `Email: ${com.email}`;
                                                        comID.innerText = `ID: ${com.id}`;
                                                        name.innerText = `Name: ${com.name}`;

                                                        inBox.style.border = 'thick double #32a1ce';
                                                        inBox.style.margin = '5px';
                                                        inBox.style.padding = '5px';

                                                        inBox.append(comBody,email,comID,name);
                                                        postBox.appendChild(inBox)
                                                    }

                                                }
                                            })
                                    }
                                }
                            }
                        })
                }
            }
        }
    )