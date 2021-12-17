// // Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// // Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// // Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі
//

function wakeUp(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('You have time for breakfast')
            } else {
                reject('You late for your job')
            }
        }, 300)
    })
}

function breakFast(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('You have time for shower')
            } else {
                reject('You late for your job')
            }
        }, 1000)
    })
}

function shower(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('You have time for bus')
            } else {
                reject('Call taxi')
            }
        }, 500)
    })
}

function work(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('Just do your job')
            } else {
                reject('Pretend to work')
            }
        }, 100)
    })
}

function lunch(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('Time to work again')
            } else {
                reject('Pretend to work')
            }
        }, 500)
    })
}

function completeAllTasks(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('You are worker of the month')
            } else {
                reject('Work better')
            }
        }, 800)
    })
}

function goHome(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('Bus again')
            } else {
                reject('Lazy taxi user')
            }
        }, 400)
    })
}

function cook(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('Cooking...')
            } else {
                reject('Order food')
            }
        }, 900)
    })
}

function supper(quick) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quick) {
                resolve('Tasty homemade food')
            } else {
                reject('Junk food')
            }
        }, 200)
    })
}

//Async

// async function everydayLife() {
//     const wake = await wakeUp(true);
//     const eat = await breakFast(true);
//     const swim = await shower(true);
//     const routing = await work(true);
//     const eatAgain = await lunch(true);
//     const tasks = await completeAllTasks(true);
//     const home = await goHome(true);
//     const cooking = await cook(true);
//     const food = await supper(true);
//
//     console.log(wake)
//     console.log(eat);
//     console.log(swim);
//     console.log(routing);
//     console.log(eatAgain);
//     console.log(tasks);
//     console.log(home);
//     console.log(cooking);
//     console.log(food);
// }
//
// everydayLife()

// then

wakeUp(true)
    .then(next => {
        console.log(next)
        return breakFast(true)
    })
    .then(next => {
        console.log(next)
        return shower(true)
    })
    .then(next => {
        console.log(next)
        return work(true)
    })
    .then(next => {
        console.log(next)
        return lunch(true)
    })
    .then(next => {
        console.log(next)
        return completeAllTasks(true)
    })
    .then(next => {
        console.log(next)
        return goHome(true)
    })
    .then(next => {
        console.log(next)
        return cook(true)
    })
    .then(next => {
        console.log(next)
        return supper(true)
    })
    .then(finish => {
        console.log(finish)
    })

// setTimeout(function wakeUp(quick) {
//     if (quick) {
//         console.log('You have time for breakfast')
//     } else {
//         console.log('You late for your job')
//     }
//     setTimeout(function breakfast(quick) {
//         if (quick) {
//             console.log('You have time for shower')
//         } else {
//             console.log('You late for your job')
//         }
//         setTimeout(function shower(quick) {
//             if (quick) {
//                 console.log('You have time for bus')
//             } else {
//                 console.log('Call Taxi')
//             }
//             setTimeout(function work(quick) {
//                 if (quick) {
//                     console.log('Just do your job')
//                 } else {
//                     console.log('Pretend to work')
//                 }
//                 setTimeout(function lunch(quick) {
//                     if (quick) {
//                         console.log('Time to work again')
//                     } else {
//                         console.log('Pretend to work again')
//                     }
//                     setTimeout(function CompleteAllTasks(quick) {
//                         if (quick) {
//                             console.log('Worker of the month')
//                         } else {
//                             console.log('Work better')
//                         }
//                         setTimeout(function goHome(quick) {
//                             if (quick) {
//                                 console.log('Bus again')
//                             } else {
//                                 console.log('Lazy taxi user')
//                             }
//                             setTimeout(function cook(quick) {
//                                 if (quick) {
//                                     console.log('Cooking...')
//                                 } else {
//                                     console.log('Order food')
//                                 }
//                                 setTimeout(function supper(quick) {
//                                     if (quick) {
//                                         console.log('Tasty homemade food')
//                                     } else {
//                                         console.log('Junk food')
//                                     }
//
//                                 }, 200)
//                             }, 900)
//                         }, 400)
//                     }, 800)
//                 }, 500)
//             }, 100)
//         }, 500)
//     }, 1000)
// }, 300)


