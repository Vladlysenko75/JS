let cart = JSON.parse(localStorage.getItem('products'));
for (let i = 0; i < cart.length; i++) {
    let productName = document.createElement('div');
    let productQuantity = document.createElement('div');
    let productPrice = document.createElement('div');
    let productImg = document.createElement('img');
    let productBox = document.createElement('div');
    let productBtn = document.createElement('button');

    productBtn.innerText = 'Delete this product';

    productName.innerText = cart[i].productName;
    productQuantity.innerText = cart[i].productQuantity;
    productPrice.innerText = cart[i].productPrice;
    productImg.src = cart[i].productImg;

    productBox.append(productName,productQuantity,productPrice,productImg,productBtn);
    document.body.appendChild(productBox);

    productBtn.onclick = function () {
        if (cart[i]) {
            window.location.reload();
            cart.splice(i, 1);
            localStorage.setItem('products', JSON.stringify(cart));
            cart[i].remove();
        }
    }
}