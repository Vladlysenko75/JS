let classNames = [];

function recursion(startItems) {
    if (startItems.className !== '') {
        for (let nss of startItems.classList) {
            classNames.push(nss)
        }
    }
    if (startItems.children.length) {
        for (let item of startItems.children) {
            recursion(item)
        }
    }
}

recursion(document.body)
console.log(classNames)


