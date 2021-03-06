/*За допомогою циклу вивести всю інформацію про користувачів використовуючи шаблон Template 1.1
			* за допомоги стилів, побудувати сітку по 2 об'єкта в лінію
			*
			* */

let usersList = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618'
            }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
            street: 'Douglas Extension',
            suite: 'Suite 847',
            city: 'McKenziehaven',
            zipcode: '59590-4157',
            geo: {
                lat: '-68.6102',
                lng: '-47.0653'
            }
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
            bs: 'e-enable strategic applications'
        }
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
            street: 'Hoeger Mall',
            suite: 'Apt. 692',
            city: 'South Elvis',
            zipcode: '53919-4257',
            geo: {
                lat: '29.4572',
                lng: '-164.2990'
            }
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
            name: 'Robel-Corkery',
            catchPhrase: 'Multi-tiered zero tolerance productivity',
            bs: 'transition cutting-edge web services'
        }
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
                lat: '-31.8129',
                lng: '62.5342'
            }
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems'
        }
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
            street: 'Norberto Crossing',
            suite: 'Apt. 950',
            city: 'South Christy',
            zipcode: '23505-1337',
            geo: {
                lat: '-71.4197',
                lng: '71.7478'
            }
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
            name: 'Considine-Lockman',
            catchPhrase: 'Synchronised bottom-line interface',
            bs: 'e-enable innovative applications'
        }
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
            street: 'Rex Trail',
            suite: 'Suite 280',
            city: 'Howemouth',
            zipcode: '58804-1099',
            geo: {
                lat: '24.8918',
                lng: '21.8984'
            }
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
            name: 'Johns Group',
            catchPhrase: 'Configurable multimedia task-force',
            bs: 'generate enterprise e-tailers'
        }
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
            street: 'Ellsworth Summit',
            suite: 'Suite 729',
            city: 'Aliyaview',
            zipcode: '45169',
            geo: {
                lat: '-14.3990',
                lng: '-120.7677'
            }
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
            name: 'Abernathy Group',
            catchPhrase: 'Implemented secondary concept',
            bs: 'e-enable extensible e-tailers'
        }
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
            street: 'Dayna Park',
            suite: 'Suite 449',
            city: 'Bartholomebury',
            zipcode: '76495-3109',
            geo: {
                lat: '24.6463',
                lng: '-168.8889'
            }
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
            name: 'Yost and Sons',
            catchPhrase: 'Switchable contextually-based project',
            bs: 'aggregate real-time technologies'
        }
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
            street: 'Kattie Turnpike',
            suite: 'Suite 198',
            city: 'Lebsackbury',
            zipcode: '31428-2261',
            geo: {
                lat: '-38.2386',
                lng: '57.2232'
            }
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
            name: 'Hoeger LLC',
            catchPhrase: 'Centralized empowering task-force',
            bs: 'target end-to-end models'
        }
    }
];

// console.log(usersList)
// // document.querySelector('.news').innerHTML = `<div class = 'new'></div>`;
// const ids = document.getElementsByClassName('ids');
// for (gary of usersList) {
//     document.inner('.ids')
//     console.log(gary)
// }
// document.getElementsByClassName('ids').inner

// function greet() {
//     return document.write(`${this.name}`)
// }
// const bruce = {
//     name: 'Bruce'
// }
// console.log(greet.call(bruce));

// let div = document.getElementsByClassName('ids')[0]
// div.textContent = usersList[0].name
// console.log(div);

for (let user of usersList) {
    let main = document.createElement('div')
    let id = document.createElement('h1')
    let name = document.createElement('h1')
    let username = document.createElement('h1')
    let email = document.createElement('h2')
    let address = document.createElement('div')
    let street = document.createElement('div')
    let suit = document.createElement('div')
    let city = document.createElement('div')
    let zipcode = document.createElement('div')
    let geo = document.createElement('div')
    let lat = document.createElement('div')
    let lng = document.createElement('div')
    let phone = document.createElement('h2')
    let website = document.createElement('div')
    let company = document.createElement('div')
    let companyName = document.createElement('div')
    let catchPhrase = document.createElement('div')
    let bs = document.createElement('div')
    let flex1 = document.createElement('div')
    let flex2 = document.createElement('div')
    let objects = document.createElement('div')
    let objects1 = document.createElement('div')
    let objects2 = document.createElement('div')
    let objects3 = document.createElement('div')
    let flexStreet = document.createElement('div')
    let flexCity = document.createElement('div')
    let flexSuit = document.createElement('div')
    let flexZip = document.createElement('div')
    let here = document.getElementsByClassName('here')

    id.innerText = `${user.id} -`
    name.innerText = `${user.name} -`
    username.innerText = user.username
    email.innerText = `${user.email} -`
    phone.innerText = user.phone
    objects.innerText = 'City -'
    objects1.innerText = 'Street -'
    objects2.innerText = 'Suit -'
    objects3.innerText = 'Zipcode -'
    city.innerText = user.address.city
    street.innerText = user.address.street
    suit.innerText = user.address.suite
    zipcode.innerText = user.address.zipcode

    flex1.style.display = 'flex'
    flex2.style.display = 'flex'
    flexCity.style.display = 'flex'
    flexStreet.style.display = 'flex'
    flexSuit.style.display = 'flex'
    flexZip.style.display = 'flex'
    flex1.style.columnGap = '10px'
    flex2.style.columnGap = '10px'
    flexCity.style.columnGap = '5px'
    flexStreet.style.columnGap = '5px'
    flexSuit.style.columnGap = '5px'
    flexZip.style.columnGap = '5px'
    flexCity.style.marginTop = '15px'
    flexSuit.style.marginTop = '15px'
    flexCity.style.marginBottom = '15px'
    flexSuit.style.marginBottom = '15px'
    main.style.width = '650px'

    document.body.append(here)
    here[0].append(main)
    flex1.append(id,name,username)
    flex2.append(email,phone)
    flexCity.append(objects,city)
    flexStreet.append(objects1,street)
    flexSuit.append(objects2,suit)
    flexZip.append(objects3,zipcode)
    main.append(flex1,flex2,flexCity,flexStreet,flexSuit,flexZip)
    address.append(geo)
    geo.append(lat,lng)
    company.append(companyName,catchPhrase,bs)
}