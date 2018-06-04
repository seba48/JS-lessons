window.onload = function() {
    let money,
        name,
        time,
        price

    function start() {
        money = prompt('Enter your mounth budget here:');

        while (isNaN(money) || money == "" || money == null) {
            money = prompt('Enter your mounth budget here:');
        }

        name = prompt('enter name of your shop here:').toUpperCase();

        time = 21;
    }

    // start();

    mainList = {
        budget: money,
        shpoName: name,
        shopGoods: [],
        employers: {},
        open: false,
        discount: false
    };

    // =============================
    // ==== Made by "FOR" cycle ====
    // =============================
    function chooseGoods() {
        for (var i = 0; i < 5; i++) {
            let a = prompt('What items are you going to sail?');

            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log('everything is right');
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    }

    // chooseGoods();

    function workTime(time) {
        if (time < 0) {
            console.log('it can\'t be true');
        } else if (time > 8 && time < 20) {
            console.log('time to work!');
        } else if (time < 24) {
            console.log('it\'s too late now')
        } else if (time > 24) {
            console.log('there are just 24 hours in the day');
        }

    }

    // workTime(18);
    console.log(mainList);

    // ===============================
    // ==== Made by "WHILE" cycle ====
    //================================

    // let i = 0;
    // while (i < 3) {
    //  mainList.shopGoods.push(prompt('What items are you going to sail?'));
    //  i++;
    // }

    // ===============================
    // == Made by " DO WHILE" cycle ==
    //================================

    // do{
    //  mainList.shopGoods.push(prompt('What items are you going to sail?'));
    //      i++;
    // }
    // while(i < 3);

    // console.log(mainList['shopGoods']);

    function dayBudget(money){
        let dayBudget = mainList.budget/30;
        return dayBudget;
    }

    function discount(discount, price){
        if (discount == true){
            price *= 0.8;
            return price;
        }
    }

    function employers(){
        for (var i = 1; i < 5; i++) {
            let a = prompt('Enter name of ' + i +' employer');
            mainList.employers[i] = a;
        }
    }

    // employers();


    // alert('your daybudget is ' + dayBudget());
};