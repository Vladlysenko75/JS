fetch('https://jsonplaceholder.typicode.com/posts')
    .then(resp => resp.json())
    .then(posts => {
        for (let post of posts) {
            let postDetails = JSON.parse(localStorage.getItem('posts'));
            if (post.id === postDetails[postDetails.length - 1].id) {
                let postBox = document.createElement('div');
                let postId = document.createElement('div');
                let postBody = document.createElement('div');
                let postUserId = document.createElement('div');
                let postTitle = document.createElement('div');
                let posts = document.getElementById('post');

                postBox.style.border = '5px dashed blue';
                postBox.style.margin = '5px';
                postBox.style.padding = '5px';

                postId.innerText = `ID: ${post.id}`;
                postBody.innerText = `Body: ${post.body}`;
                postTitle.innerText = `Title: ${post.title}`;
                postUserId.innerText = `User ID: ${post.userId}`;

                postBox.append(postId, postBody, postTitle, postUserId);
                posts.append(postBox)

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(resp => resp.json())
                    .then(coms => {
                        for (let com of coms) {
                            if (post.id === com.postId) {
                                let inBox = document.createElement('div');
                                let comBody = document.createElement('div');
                                let email = document.createElement('div');
                                let comID = document.createElement('div');
                                let name = document.createElement('div');
                                let comments = document.getElementById('comments');

                                comBody.innerText = `Body: ${com.body}`;
                                email.innerText = `Email: ${com.email}`;
                                comID.innerText = `ID: ${com.id}`;
                                name.innerText = `Name: ${com.name}`;

                                inBox.style.width = '18%';
                                inBox.style.border = 'thick double #32a1ce';
                                inBox.style.margin = '5px';
                                inBox.style.padding = '5px';

                                inBox.append(comBody, email, comID, name);
                                comments.appendChild(inBox)
                            }

                        }
                    })
            }

        }
    })