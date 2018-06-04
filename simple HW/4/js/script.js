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
        discount: false,
        shopItems: [],
        chooseGoods: function chooseGoods() {
            for (var i = 0; i < 5; i++) {
                let a = prompt('What items are you going to sail?');

                if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                    console.log('everything is right');
                    mainList.shopGoods[i] = a;
                } else {
                    i = i - 1;
                }
            }
        },
        workTime: function workTime(time) {
            if (time < 0) {
                console.log('it can\'t be true');
            } else if (time > 8 && time < 20) {
                console.log('time to work!');
                mainList.open = true;
            } else if (time < 24) {
                console.log('it\'s too late now')
            } else if (time > 24) {
                console.log('there are just 24 hours in the day');
            }

        },
        dayBudget: function dayBudget(money) {
            let dayBudget = mainList.budget / 30;
            return dayBudget;
        },
        makeDiscount: function makeDiscount(discount, price) {
            if (discount == true) {
                price *= 0.8;
                return price;
            }
        },
        hireEmployers: function hireEmployers() {
            for (var i = 1; i < 5; i++) {
                let a = prompt('Enter name of ' + i + ' employer');
                mainList.employers[i] = a;
            }
        },
        chooseShopItems: function chooseShopItems() {
            let items = prompt('enter items over coma');
            if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
                mainList.shopItems = items.split(',');
                mainList.shopItems.push(prompt('Wait! One more:'));
                mainList.shopItems.sort();
            } else {
                alert('you can not leave empti input or cancel it!');
                mainList.chooseShopItems();
            }

        },
        message: function message() {
        	let mes = '';
            mainList.shopItems.forEach(function(item, i, shopItems) {
                mes += (i+1) + '-' + item + ',';
            });
            alert('here you can buy: ' + mes);
        },

        shopIncludes: function shopIncludes(){
        	for (let key in mainList) {
        		console.log('Our shop includes: ' + key);
        	}
        }





    };





    console.log(mainList);



};