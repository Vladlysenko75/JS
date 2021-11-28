// // //- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
// //
// // function User(id,name,surname,email,phone) {
// //     this.id = id
// //     this.name = name
// //     this.surname = surname
// //     this.email = email
// //     this.phone = phone
// // }
// //
// // let user1 =  new User(1,'Igor','Slavichek','slavi4@gmail.com','+38095')
// // let user2 =  new User(2,'Volodya','Grishkin','hrisha4@gmail.com','+38097')
// // let user8 =  new User(8,'Yulia','Yurina','yula@gmail.com','+38093')
// // let user3 =  new User(3,'Semen','Silkov','sila4@gmail.com','+38098')
// // let user4 =  new User(4,'Sergei','Volodkovski','vova4@gmail.com','+38099')
// // let user5 =  new User(5,'Syoma','Serzhin','serzh4@gmail.com','+38090')
// // let user6 =  new User(6,'Valera','Veriga','verg4@gmail.com','+38091')
// // let user7 =  new User(7,'irochka','Svatina','svat4@gmail.com','+38092')
// // let user9 =  new User(9,'Nadia','Molina','mol@gmail.com','+38094')
// // let user10 =  new User(10,'Vadik','Soplin','soplya@gmail.com','+38096')
// // let arr = [];
// // arr.push(user6,user1,user8,user2,user3,user4,user5,user7,user9,user10)
// // console.log(arr)
// //
// // //- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// // console.log(arr.filter(value => value.id% 2 === 0))
// //
// // //- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// // console.log(arr.sort((a, b) => a.id - b.id))
//
// //- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let array = [];
// let user11 = new Client(11,'Vika','Gorshik','vik@gmail.com','+4050',['bath','aneasthetics'])
// let user12 = new Client(12,'Sasha','Kolob','kolk@gmail.com','+4051',['syringe'])
// let user13 = new Client(13,'Masha','Vasilieva','vas@gmail.com','+4052',['siller'])
// let user14 = new Client(14,'Lev','Kovalski','koval@gmail.com','+4053',['filler'])
// let user15 = new Client(15,'Sliva','Vodochnaya','sliva@gmail.com','+4054',['forceps','x-ray','evelator'])
// let user16 = new Client(16,'Pasha','Firmin','firma@gmail.com','+4055',['endo drill'])
// let user17 = new Client(17,'Clutch','Gaechniy','rozvodnoy@gmail.com','+4056',['endo syringe'])
// let user18 = new Client(18,'Petr','Habchik','petrhab@gmail.com','+4057',['k - files'])
// let user19 = new Client(19,'Anton','Brehinin','brehb@gmail.com','+4058',['round burs','composite','vita colors','mta'])
// let user20 = new Client(20,'Dasha','Deyneka','deyna@gmail.com','+4059',['endo rotary'])
//
// array.push(user11,user12,user13,user14,user15,user16,user17,user18,user19,user20)
// console.log(array)
//
// //- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(array.sort((a, b) => a.order.length - b.order.length))