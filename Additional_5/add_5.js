//- Дано натуральное число n. Выведите все числа от 1 до n.

// let n = 10
// for (let i = 1; i < n; i++) {
//     console.log(i)
// }

//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let a = 30;
// let b = 20;
// if (a < b) {
//     for (a; a <= b ; a++) {
//         console.log(a)
//     }
// }
// if (a > b) {
//     for (a; a >= b; a--) {
//         console.log(a)
//     }
// }

// навпаки

// let a = 20;
// let b = 30;
// if (a < b) {
//     for (a; a <= b ; a++) {
//         console.log(a)
//     }
// }
// if (a > b) {
//     for (a; a >= b; a--) {
//         console.log(a)
//     }
// }

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function foo(array,i) {
//     temp = array[i];
//     array[i] = array[i+1]
//     array[i+1] = temp
//     return array
// }
// let arr = [9,8,0,4]
// console.log(foo(arr, 2));

// - Створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Довжина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]
//
// debugger
// function foo(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length-1; j++) {
//             if (arr[j] === 0) {
//                 temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr;
// }
//
// let arr = [1, 0, 6, 0, 3];
// console.log(foo(arr));


