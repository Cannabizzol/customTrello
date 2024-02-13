








// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//     }
//
//     let message = `Count is ${count}`;
//     function log() {
//         console.log(message);
//     }
//
//     return [increment, log];
// }
//
// const functions = createIncrement();
// let increment = functions[0];
// let log = functions[1];
// increment();
// increment();
// increment();
// log();


// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//
//     return {
//         father: man,
//         mother: woman
//     }
// }
//
// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// });
//
// delete family.father
//
// console.log(family)

// //
// const obj = {
//     name: 'Hello',
//     func: function () {
//         (() => {
//             console.log(this)
//         })()
//     }
// }
// obj.func()

        // let word = 'Hello'
        // const bool = true
        // if (bool) {
        //     let name = 'Sasha'
        //     console.log(`${word}, ${name}`)
        // }
        // console.log(name)

// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }
//
// let counter = new Counter();
//
// console.log( counter.up() ); // ? 1
// console.log( counter.up() ); // ? 2
// console.log( counter.down() ); // ? 1

// function Counter() {
//     let count = 0;
//
//     this.up = function() {
//         return ++count;
//     };
//     this.down = function() {
//         return --count;
//     };
// }
//
// let counter = new Counter();
// console.log(counter)
// console.log( counter.up() ); // ?
// console.log( counter.up() ); // ?
// console.log( counter.down() ); // ?

// Написать функцию anal(a)(b)(c)(d) = ((a+b) * c) / d



// let anal = function(a) {
//     return function (b) {
//         return function (c){
//             return function (d){
//                 return ((a+b) * c) / d
//             };
//         };
//     };
// };
// console.log(anal(1)(3)(2)(2));


// let counter = (function () {
//     // внутренняя переменная, к которой есть доступ только изнутри этой функции
//     let i = 0;
//     // результат работы функции
//     return {
//         // в ответ на свойство get отдаём значение переменной i
//         get: function () {
//             return i;
//         },
//         // устанавливаем новое значение переменной
//         set: function (val) {
//             i = val;
//         },
//         // увеличиваем его на единицу
//         increment: function () {
//             return ++i;
//         }
//     };
// })();
// console.log(counter)

// смотрим, что в переменной i на старте, должно быть 0
// console.log(counter.get());
// // записываем в неё значение 3
// console.log(counter.set(3));
// // увеличиваем значение i на единицу, должно быть 4
// console.log(counter.increment());
//
// // пробуем записать значение напрямую, но это не сработает — у нас нет доступа к этой переменной напрямую
// counter.i = 10;
// // выводим текущее состояние
// console.log(counter.get());
//
//
//
// const company = {
//     name: 'Hexlet',
//     country: {
//         name: 'Finland',
//         getName: function getName() {
//             return this.name;
//         }
//     },
// };
//
// console.log(company.country.getName());



// const printA = () => console.log('A')
// const printB = () => console.log('B')
// const printC = () => console.log('C')
//
// printA()
// setTimeout(printB, 0)
// printC()
// // a c b
//
// setTimeout(function timeout() {
//     console.log('Таймаут');
// }, 0);
//
// let p = new Promise(function(resolve, reject) {
//     console.log('Создание промиса');
//     resolve();
// });
//
// p.then(function(){
//     console.log('Обработка промиса');
// });
//
// console.log('Конец скрипта');
// Создание промиса Конец скрипта Обработка промиса Таймаут
// Объяснить как работает в данном случае интерпретатор (call stack)

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// Promise.resolve().then(() => setTimeout(() => console.log(4)));
// Promise.resolve().then(() => console.log(5));
// setTimeout(() => console.log(6));
// console.log(7);

// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.reject(3).catch(console.log);
//
// new Promise(resolve => setTimeout(resolve))
//     .then(() => console.log(4));
//
// Promise.resolve(5).then(console.log);
//
// console.log(6);
//
// setTimeout(() => console.log(7),0);

// const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
//
// setTimeout(() => console.log('in setTimeout1'), 1000);
//
// myPromise(1000).then(res => console.log('in Promise 1'));
//
// setTimeout(() => console.log('in setTimeout2'), 100);
//
// myPromise(2000).then(res => console.log('in Promise 2'));
//
// setTimeout(() => console.log('in setTimeout3'), 2000);
//
// myPromise(1000).then(res => console.log('in Promise 3'));
//
// setTimeout(() => console.log('in setTimeout4'), 1000);
//
// myPromise(5000).then(res => console.log('in Promise '));

//
// const button = document.createElement('button')
//
// button.addEventListener('click', () => console.log('1'))
// button.addEventListener('click', () => console.log('3'))
// button.onclick = () => console.log('4')
// button.addEventListener('click', () => console.log('5'))
//
// button.click()


// let log = ''
// function logger (s) {
//     log += s
// }
//
// setTimeout(() => {
//     logger('TWO')
//     setTimeout("logger('ONE')", 100)
// }, 100)
//
// setTimeout(() => console.log(log), 300)

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }
//
// var add5 = makeAdder(5);
// var add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12