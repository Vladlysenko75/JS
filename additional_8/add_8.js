let classNames = [];
function recursion(startItems) {
    if (startItems.className !== '') {
        classNames.push(startItems.className)
    }
    if (startItems.children.length) {
        for (let item of startItems.children) {
            recursion(item)
        }
    }
}

recursion(document.body)
console.log(classNames)