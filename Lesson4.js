"use strict";
//Task1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
//мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//- единицы (в свойстве units)
//- десятки (в свойстве tens)
//- сотни (в свойстве hundereds)
//Например, для числа 45 мы должны получить следующий объект:
//{
//units: 5, //это единицы
//tens: 4, //это десятки
//hundreds: 0, //это сотни
//}
//Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
//необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект
let num2obj = +prompt("Введите трехзачное число: ");

function getObj(num2obj) {
    let threeUnitObj = {};
    if (num2obj >= 0 && num2obj <= 999 && num2obj != '') {
        threeUnitObj["hundreds"] = Math.floor(num2obj / 100);
        threeUnitObj["tens"] = Math.floor((num2obj - threeUnitObj["hundreds"] * 100) / 10);
        threeUnitObj["units"] = Math.floor(num2obj - threeUnitObj["hundreds"] * 100 - threeUnitObj["tens"] * 10);
        return console.log(threeUnitObj);
    }
    else {
        return console.log("Число было передано вне диапазона [0, 999], возвращаю пустой объект: " + threeUnitObj);
    }
}
getObj(num2obj);