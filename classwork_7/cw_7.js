// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, factory, year, maxspeed, volume) {
//     this.model = model;
//     this.factory = factory;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = maxspeed + newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let newcar = new Car('Zaporozhets', 'Zaporizhia', 1985, 90, 1.0)
//
// console.log(newcar)
// console.log(newcar.drive());
// console.log(newcar.info());
// newcar.increaseMaxSpeed(10)
// console.log(newcar.maxspeed)
// newcar.changeYear(1987)
// console.log(newcar.year)
// newcar.addDriver('Volodya')
// console.log(newcar.driver)

//- (Те саме, тільки через клас)

// class Cars {
//     constructor(model, factory, year, maxspeed, volume) {
//         this.model = model;
//         this.factory = factory;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.volume = volume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
//         }
//         this.info = function () {
//             for (const key in this) {
//                 if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//             }
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxspeed = maxspeed + newSpeed
//         }
//         this.changeYear = function (newValue) {
//             this.year = newValue
//         }
//         this.addDriver = function (driver) {
//             this.driver = driver
//         }
//     }
// }
// let newcar = new Cars('Zaporozhets', 'Zaporizhia', 1985, 90, 1.0)
//
// console.log(newcar)
// console.log(newcar.drive());
// console.log(newcar.info());
// newcar.increaseMaxSpeed(10)
// console.log(newcar.maxspeed)
// newcar.changeYear(1987)
// console.log(newcar.year)
// newcar.addDriver('Volodya')
// console.log(newcar.driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// class Cinderella {
//     constructor(cindName, age, legSize) {
//         this.cindName = cindName;
//         this.age = age;
//         this.legSize = legSize;
//     }
// }
// let girls = [];
// let cinderella1 = new Cinderella('Vika',10,33)
// let cinderella2 = new Cinderella('Sasha',11,34)
// let cinderella3 = new Cinderella('Yulia',12,35)
// let cinderella4 = new Cinderella('Olya',13,36)
// let cinderella5 = new Cinderella('Anya',14,37)
// let cinderella6 = new Cinderella('Liza',15,38)
// let cinderella7 = new Cinderella('Sonya',16,39)
// let cinderella8 = new Cinderella('Masha',17,40)
// let cinderella9 = new Cinderella('Katya',18,41)
// let cinderella10 = new Cinderella('Ruslana',19,42)

// girls.push(cinderella1,cinderella2,cinderella3,cinderella4,cinderella5,cinderella6,cinderella7,cinderella8,cinderella9,cinderella10)
// console.log(girls)

// class Prince {
//     constructor(PrinceName, age, whichShoe) {
//         this.PrinceName = PrinceName;
//         this.age = age;
//         this.whichShoe = whichShoe;
//     }
// }
// let boys = [];
// const prince1 = new Prince('Viktor',15,35)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// function finder(cinderella, prince) {
//     for (cind of cinderella) {
//         if (cind.legSize === prince1.whichShoe) {
//             return `its a match with ${cind.cindName}`
//         }
//     }
// }
// console.log(finder(girls,prince1))
//
// console.log(girls.find(cind => cind.legSize === prince1.whichShoe))