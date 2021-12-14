let cart = JSON.parse(localStorage.getItem('products'));
for (let i = 0; i < cart.length; i++) {
    let productName = document.createElement('div');
    let productQuantity = document.createElement('div');
    let productPrice = document.createElement('div');
    let productImg = document.createElement('img');
    let productBox = document.createElement('div');
    let productBtn = document.createElement('button');
    let deleteAll = document.createElement('button');

    productBtn.innerText = 'Delete this product';
    deleteAll.innerText = 'Delete All posts';

    productName.innerText = cart[i].productName;
    productQuantity.innerText = cart[i].productQuantity;
    productPrice.innerText = cart[i].productPrice;
    productImg.src = cart[i].productImg;

    productBox.append(productName, productQuantity, productPrice, productImg, productBtn);
    document.body.append(productBox, deleteAll);

    productBtn.onclick = function () {

        window.location.reload();
        cart = cart.filter(item => item.id !== cart[i].id);
        localStorage.setItem('products', JSON.stringify(cart));
        cart[i].remove();
    }

    deleteAll.onclick = function () {
        window.location.reload();
        cart.splice(0,cart.length);
        localStorage.setItem('products', JSON.stringify(cart));
        for (let prods of cart) {
            prods.remove()
        }
    }
}
let arrs = [1, 3, 4, 5]
console.log(arrs)
arrs.splice(0, arrs.length);
console.log(arrs)