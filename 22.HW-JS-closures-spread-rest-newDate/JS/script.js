"strict use";

/*1) Создать функцию calcSum(), которая принимает n - ое количество параметров(числа)
Возвращает сумму первых двух параметров, а остальные записывает в массив other;  Вывести этот массив в консоль*/
function calcSum(...arg) {

    return arg[0] + arg[1];
}

console.log(calcSum(3, 5, [5, 6], 40));







/*2) Объединить два массива в один общий
let family = [] используя
concat, push.apply, spread, splice, forEach*/

//concat - option  1
let drivers = ["Dominic", "Brian", "Letty", "Roman"];
let antagonists = ["Deckard", "Luke"];
let driversAntagonists = drivers.concat(antagonists);
console.log(driversAntagonists);



//concat - option 2
let family = [];
family = family.concat(drivers, antagonists);
console.log(family);

//spread
drivers = ["Dominic", "Brian", "Letty", "Roman"];
antagonists = ["Deckard", "Luke"];
family = [...drivers, ...antagonists];
console.log(family);

//push.apply
drivers = ["Dominic", "Brian", "Letty", "Roman"];
antagonists = ["Deckard", "Luke"];
family = [];
Array.prototype.push.apply(family, antagonists);
Array.prototype.push.apply(family, drivers);
console.log(family);


//splice
drivers = ["Dominic", "Brian", "Letty", "Roman"];
antagonists = ["Deckard", "Luke"];
family = drivers.splice(3, 0, "Deckard", "Luke");
console.log(family);
//НЕ ПОЛУЧИЛОСЬ - вернулся пустой массив



//forEach
drivers = ["Dominic", "Brian", "Letty", "Roman"];
antagonists = ["Deckard", "Luke"];
family = [];

drivers.forEach((items) => {
    family.push(items)
});
antagonists.forEach((items) => {
    family.push(items)
});
console.log(family);







/*3)gолучить новый массив с уникальными значениями используя spread*/
let cars = ["Jeep", "Jeep", "Kia", "BMW", "BMW", "BMW", "Renault"];
let getUniqueArr = [...new Set(cars)];
console.log(getUniqueArr);







/*4) Создать функцию - замыкание которая будет принимать сперва параметр country, а вложенная функция будет принимать при последующем вызове параметр city
И возвращать массив с названием города и страны*/

function firstFunction(country) {
    return function(city) {
        return [country, city];
    }
}
const callCountryCityArray = firstFunction("Belarus");
console.log(callCountryCityArray(" Minsk"));

//2 option
let country = "Belarus";
let city = "Minsk";


function roundingFunction(countryName) {
    return function(cityName) {
        return [countryName, cityName];
    }
}
let newBox = roundingFunction(country);
console.log(newBox(city));







/*5) Вывести дату в полном формате.
А затем в консоль вывести дату в формате YYYY / MM / DD(mm: ss);*/

timestamp = 1654420481877;
let spicificDate = new Date(timestamp);
console.log(spicificDate);

function getFullFormatDate(spicificDate) {
    const date = new Date(timestamp);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${year}/${month}/0${day}(${minutes}:${seconds})`
}
result = getFullFormatDate(spicificDate);
console.log(result);