// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
//
let form = document.createElement('form');
let inputName = document.createElement('input');
let inputAge = document.createElement('input');
let send = document.createElement('button')
let user = {};

send.innerText = 'Send';

send.onclick = function () {
    user.name = inputName.value;
    user.age = inputAge.value;
    localStorage.setItem('User', JSON.stringify(user))
}

form.append(inputName,inputAge)
document.body.append(form,send)

// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let carForm = document.createElement('form');
let inputModel = document.createElement('input')
let inputType = document.createElement('input')
let inputVolume = document.createElement('input')
let sendBtn = document.createElement('button')
let box = 'box';
sendBtn.innerText = 'Send';

carForm.append(inputModel,inputType,inputVolume);
document.body.append(carForm,sendBtn)

let saveCar = (model, type, volume) => {
    let newArr = JSON.parse(localStorage.getItem(box)) || [];
    newArr.push({model, type, volume})
    localStorage.setItem(box, JSON.stringify(newArr));
};
sendBtn.onclick = () => {
    saveCar(inputModel.value, inputType.value, inputVolume.value);
}
