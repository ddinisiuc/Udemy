let money=prompt('Ваш буджет');
let time=prompt('Ввод даты');

let rasshod=prompt("Введите обязательную статью расходов в этом месяце"),
price=prompt("Во сколько обойдется");
let appData = {
Salary: money ,
timeData: time,
expenses:{
    rasshod:rasshod,
    price:price,

},
income:[],
optionalExpenses:{},
savings:"false"
};
console.log(appData);
console.log("Ваш буджет на день"+ money/30);


