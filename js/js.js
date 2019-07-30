let money, time;

function start() {

    money = prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", '');
    }
}
start();



let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};



function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof (a) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50)) {


            console.log('done');

            appData.expenses[a] = b;
        } else {
            console.log("put correct values");
            i--;

        }
    };
}
chooseExpenses();
function detectDayBudget(){
    appData.moneyPerDay = appData.budget / 30;
    alert(appData.moneyPerDay.toFixed(1));
}
detectDayBudget();


function checkSavings(){
    if(appData.savings==true){
        let save=+prompt("какова сумму накопления"),
        percent=+prompt(" what procent");

        appData.monthIncome=save/100/12*percent;
        alert("Доход в месяц с вашего дипозита"+appData.monthIncome);
    }
}
checkSavings();


function chooseOptExpenses(){
    for(let i=0;i<3;i++){
        let s1=prompt('Статья необязательных расходов?', "new funct ");
        appData.optionalExpenses[i]=s1;
        console.log('необязательных расходов :'+appData.optionalExpenses[i]);
    }
    
}
chooseOptExpenses();