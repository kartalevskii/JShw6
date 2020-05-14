console.log('HW6')

//EX1
console.log('aaa@bbb@ccc'.replace(/@/g, '!'));

//EX2
let date = '2025-12-31';
let date2 = date.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1')
console.log(date2.replace(/-/g, '/'));

//EX3
let str = 'я учу javascript!';
let m1 = str.substr(2, 3) + ' ' + str.substr(6, 10);
let m2 = str.substring(2, 5) + ' ' + str.substring(6, 16);
let m3 = str.slice(2, 5) + ' ' + str.slice(6, 16);
console.log(m1 + ' ' + m2 + ' ' + m3);

//EX4 
let array = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 3);
}
console.log(Math.sqrt(sum));

//EX5
let a = 3;
let b = 5;
let c = a - b;
console.log(Math.abs(c));

//EX6
function Datel() {
    let fulltime = new Date();
    let hours = fulltime.getHours();
    let min = fulltime.getMinutes();
    let sec = fulltime.getSeconds();
    let day = fulltime.getDate();
    let month = fulltime.getMonth();
    let year = fulltime.getFullYear();
    if (hours <= 9) {
        hour = '0' + hour;
    } else if (day <= 9) {
        day = '0' + dat;
    }
    if (month <= 9) {
        month = '0' + month;
    }
    console.log(hours + ':' + min + ':' + sec + ' ' + day + '.' + month + '.' + year);
}
Datel();

//EX7
let str1 = 'aa aba abba abbba abca abea';
console.log(str1.match(/a(b+)a/gi));

//EX8
function Phone(number) {
    let regexp = /^\+[\d]{3}[\d]{2}[1-9]{1}[\d]{6}$/;
    return regexp.test(number);
}
console.log(Phone('+375290644560'));

function Phone1(number) {
    let rexept = /^[8][0][\d]{9}$/;
    return rexept.test(number);
}
console.log(Phone1('80292232278'));

function Phone3(number) {
    let rexept = /^[\d]{7,12}$/;
    return rexept.test(number);
}
console.log(Phone3('3752991234567'));

//EX9
function Site(adress) {
    let rexept = /\D{5}\D{15}\.\D{2}/;
    let rexept1 = /\d{4}\/\d{2}\/\d{2}\/\D{5}-\D{2}-\d{3}/;
    let rexept2 = /\D{3}_\D{6}=\D{4}_\D{23}\d{3}/;
    let rexept3 = /\#\D{3}\d/;
    console.log(adress.match(rexept));
    console.log(adress.match(rexept1));
    console.log(adress.match(rexept2));
    console.log(adress.match(rexept3));
}
Site('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');