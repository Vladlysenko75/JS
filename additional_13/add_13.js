// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
let productName = document.getElementById('productName');
let productQuantity = document.getElementById('productQuantity');
let productPrice = document.getElementById('productPrice');
let productImg = document.getElementById('productImg');
let products = 'products';

let saveProduct = (productName, productQuantity, productPrice, productImg) => {
    let newArr = JSON.parse(localStorage.getItem(products)) || [];
    if (newArr.length > 0) {
        let sortArr = newArr.sort((a, b) => a.id - b.id);
        let id = sortArr[sortArr.length - 1].id + 1;
        newArr.push({ id: id, productName, productQuantity, productPrice, productImg})
    } else {
        newArr.push({id: 1, productName, productQuantity, productPrice, productImg});
    }
    localStorage.setItem(products, JSON.stringify(newArr));
};
document.forms.f1.onsubmit = function (e) {
    e.preventDefault()
    saveProduct(productName.value, productQuantity.value, productPrice.value, productImg.value)
}
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар