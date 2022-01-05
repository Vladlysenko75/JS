fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(arr => {
        for (let obj of arr) {
            let details = JSON.parse(localStorage.getItem('products'));
            if (obj.id === details[details.length - 1].id) {
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
                let btn = document.createElement('button');
                let userBox = document.createElement('div');
                let usr = document.getElementById('user');

                id.innerText = `ID: ${obj.id}`;
                name.innerText = `Name: ${obj.name}`;
                username.innerText = `Username: ${obj.username}`;
                email.innerText = `Email: ${obj.email}`;
                street.innerText = `Street: ${obj.address.street}`;
                suit.innerText = `Suite: ${obj.address.suite}`;
                city.innerText = `City: ${obj.address.city}`;
                zipcode.innerText = `Zipcode: ${obj.address.zipcode}`;
                lat.innerText = `Lat: ${obj.address.geo.lat}`;
                lng.innerText = `Lng: ${obj.address.geo.lng}`;
                phone.innerText = `Phone: ${obj.phone}`;
                website.innerText = `Website: ${obj.website}`;
                companyName.innerText = `Company name: ${obj.company.name}`;
                catchPhrase.innerText = `Catch Phrase: ${obj.company.catchPhrase}`;
                bs.innerText = `BS: ${obj.company.bs}`;
                btn.innerText = 'Posts of current user';

                main.className = 'user';
                main.style.border = '5px solid red';
                main.style.margin = '5px';
                main.style.padding = '5px';
                btn.style.width = '90vw';
                btn.style.height = '35px';
                btn.className = 'postbtn';
                userBox.className = 'userBox';

                usr.appendChild(userBox)
                userBox.append(main, btn)
                main.append(id, name, username, email, address, phone, website, company)
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
                                    let postTitle = document.createElement('div');
                                    let postBtn = document.createElement('a');
                                    let postButton = document.createElement('button');
                                    let pst = document.getElementById('titles');

                                    postBox.style.width = '15vw';
                                    postBox.style.border = '5px dashed blue';
                                    postBox.style.margin = '14px';
                                    postBox.style.padding = '5px';
                                    postBox.className = 'postbox';
                                    postButton.className = 'fullpostbtn';
                                    postButton.style.width = '15vw';
                                    postButton.style.height = '25px';

                                    postTitle.innerText = `Title: ${post.title}`;
                                    postButton.innerText = 'Show full post';

                                    postBtn.setAttribute('href', 'post-details.html');

                                    postButton.onclick = function () {
                                        let newArr = JSON.parse(localStorage.getItem('posts')) || [];
                                        newArr.push({id: post.id,})
                                        localStorage.setItem('posts', JSON.stringify(newArr));
                                    }

                                    postBtn.appendChild(postButton);
                                    postBox.append(postTitle, postBtn);
                                    pst.append(postBox);
                                }
                            }
                        })
                }
            }
        }
    })