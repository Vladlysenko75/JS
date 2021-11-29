// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// let arr = {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// }
//
// function Batya (id,name,username,email,street,suit,city,zipcode,lat,lng,phone,website,companyName,catchPhrase,bs) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = {
//         street: street,
//         this: suit,
//         city: city,
//         zipcode: zipcode,
//         geo: {
//             lat: lat,
//             lng: lng
//         }
//     };
//     this.phone = phone;
//     this.website = website;
//     this.company = {
//         name: companyName,
//         catchPhrase: catchPhrase,
//         bs: bs
//     };
// }
//
// let papa1 = new Batya(1,'volodya','Vova357','vovanich@gmail.com','Zhovtneva','app. 354', 'Poltava','36015','-47.076','79.038','+38096','www.vovan.com','Vovich and Co', 'Vova 4egevara','expand the unknown')
// console.log(papa1)
// console.log(papa1.company.bs)

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

// function tagger(TagTitle, action, attribute_1, attr_1_action, attribute_2, attr_2_action,attribute_3,attr_3_action) {
//     this.title = TagTitle;
//     this.action = action;
//     this.attributes = [
//         {
//             titleOfAttr: attribute_1,
//             actionOfAttr: attr_1_action
//         },
//         {
//             titleOfAttr: attribute_2,
//             actionOfAttr: attr_2_action
//         },
//         {
//             titleOfAttr: attribute_3,
//             actionOfAttr: attr_3_action
//         }
//     ]
// }
//
// let a = new tagger('a','Тег предназначен для создания ссылок','accesskey','Активация ссылки с помощью комбинаци клавиш', 'download','предлагает скачать указанный файл по ссылке','rel','Отношения между ссылаемым и текущим документами')
// let div = new tagger('div', 'Блочный элемент и предназначен для выделения фрагмента документа с целью изменения вида содержимого', 'align','Задает выравнивание содержимого тега  div','title','Добавляет всплывающую подсказку к содержимому')
// let h1 = new tagger('h1', 'Заголовок первого уровня', 'align','Определяет выравнивание заголовка')
// let span = new tagger('span', 'Предзназначен для определения строчных элементов документа', 'class','Определяет имя класса, которое позволяет связать тег со стилевым оформлением','contextmenu','Устанавливает контекстное меню для элемента')
// let input = new tagger('input', 'Позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользоватеелем', 'accept','Устанавливает фильтр на типы файлов,которые вы можете отправить через поле загрузки файлов','autofocus','Устанавливает фокус в поле формы','checked','Предварительно активированный переключатель или флажок')
// let form = new tagger('form', 'Устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером', 'accept-charset','Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные','enctype','Способ кодирования данных формы','Method','Метод протокола HTTP')
// let option = new tagger('option', 'Определяет отдельные пункты списка, создаваемого с помощью контейнера select', 'disabled','Заблокировать для доступа элемент списка','label','Указание метки пункта списка','value','Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов')
// let select = new tagger('select', 'Позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором', 'acceskey','Позволяет перейти к списку с помощью некотроого сочетания клавиш','form','Связывает список с формой','multiple','Позволяет одновременно выбирать сразу несколько элементов списка')
// let taggs = [];
// taggs.push(a,div,h1,span,input,form,option,select)
// console.log(taggs)