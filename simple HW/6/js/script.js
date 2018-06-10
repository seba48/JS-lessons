    let open = document.getElementById('open-btn'),
        name_value = document.getElementsByClassName('name-value')[0],
        budget_value = document.getElementsByClassName('budget-value')[0],
        goods_value = document.getElementsByClassName('goods-value')[0],
        items_value = document.getElementsByClassName('items-value')[0],
        employers_value = document.getElementsByClassName('employers-value')[0],
        discount_value = document.getElementsByClassName('discount-value')[0],
        isopen_value = document.getElementsByClassName('isopen-value')[0],


        goods_item = document.getElementsByClassName('goods-item'),
        goods_btn = document.getElementsByTagName('button')[1],
        budget_btn = document.getElementsByTagName('button')[2],
        employers_btn = document.getElementsByTagName('button')[3],
        choose_item = document.querySelector('.choose-item'),
        time_value = document.querySelector('.time-value'),
        count_budget_value = document.querySelector('.count-budget-value'),
        hire_employers_item = document.querySelectorAll('.hire-employers-item'),
        discount_check = document.getElementById('discount'),
        goods_1 = document.getElementById('goods_1'),
        goods_2 = document.getElementById('goods_2'),
        goods_3 = document.getElementById('goods_3'),
        goods_4 = document.getElementById('goods_4'),
        employers_1 = document.getElementById('employers_1'),
        employers_2 = document.getElementById('employers_2'),
        employers_3 = document.getElementById('employers_3'),
        main_functions_div = document.getElementsByClassName('main-functions');

    let money,
        price;

    open.addEventListener('click', () => {
        money = prompt('Ваш бюджет?', '');

        while (isNaN(money) || money == '' || money == null) {
            money = prompt('Ваш бюджет?', '');
        }

        budget_value.textContent = money;

        name_value.textContent = prompt('Название вашего магазина?', '').toUpperCase();

    });

    goods_btn.addEventListener('click', () => {
        for (var i = 0; i < goods_item.length; i++) {
            let a = goods_item[i].value;

            if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
                console.log('everything is right');
                mainList.shopGoods[i] = a;
                goods_value.textContent = mainList.shopGoods;
            } else {
                i = i - 1;
            }
        }
    });

    choose_item.addEventListener('change', () => {
        let items = choose_item.value;

        if (isNaN(items) && items != '') {
            mainList.shopItems = items.split(', ');
            mainList.shopItems.sort();

            items_value.textContent = mainList.shopItems;
        }

    });

    time_value.addEventListener('change', () => {
        let time = time_value.value;

        if (time < 0) {
            console.log('it can\'t be true');
            mainList.open = false;
        } else if (time > 8 && time < 20) {
            console.log('time to work!');
            mainList.open = true;
        } else if (time < 24) {
            mainList.open = false;
            console.log('it\'s too late now');
        } else if (time > 24) {
            console.log('there are just 24 hours in the day');
            mainList.open = false;
        };
        if (mainList.open == true) {
            isopen_value.style.backgroundColor = 'green';
            
        } else {
            isopen_value.style.backgroundColor = 'red';
            goods_btn.disabled = true;
            budget_btn.disabled = true;
            employers_btn.disabled = true;
        }


    });



    budget_btn.addEventListener('click', () => {
        count_budget_value.value = money / 30;
    });

    employers_btn.addEventListener('click', () => {
        for (var i = 0; i < hire_employers_item.length; i++) {
            let name = hire_employers_item[i].value;
            mainList.employers[i] = name;

            employers_value.textContent += mainList.employers[i] + ', ';
        }
    });

    discount_check.addEventListener('change', () => {
        if (discount_check.checked) {
            discount_value.style.backgroundColor = 'green';
            mainList.discount = true;
        } else {
            discount_value.style.backgroundColor = 'red';
            mainList.discount = false;
        }
    });

    goods_1.addEventListener('change', () => {

        if(mainList.open == true && goods_1.value != ''){
            goods_btn.disabled = false;
        }else if(goods_1.value == ''){
            goods_btn.disabled = true;
        }
        
    });
    goods_2.addEventListener('change', () => {

        if(mainList.open == true && goods_2.value != ''){
            goods_btn.disabled = false;
        }else if(goods_2.value == ''){
            goods_btn.disabled = true;
        }
        
    });
    goods_3.addEventListener('change', () => {

        if(mainList.open == true && goods_3.value != ''){
            goods_btn.disabled = false;
        }else if(goods_3.value == ''){
            goods_btn.disabled = true;
        }
        
    });
    goods_4.addEventListener('change', () => {

        if(mainList.open == true && goods_4.value != ''){
            goods_btn.disabled = false;
        }else if(goods_4.value == ''){
            goods_btn.disabled = true;
        }
        
    });

    count_budget_value.addEventListener('change', () => {
        if(mainList.open == true && count_budget_value.value != ''){
            budget_btn.disabled = false;
        }else {
            budget_btn.disabled = true;
        }
    });

    employers_1.addEventListener('change', () => {
        if(mainList.open == true && employers_1.value != ''){
            employers_btn.disabled = false;
        }else {
            employers_btn.disabled = true;
        }
    });
    employers_2.addEventListener('change', () => {
        if(mainList.open == true && employers_2.value != ''){
            employers_btn.disabled = false;
        }else {
            employers_btn.disabled = true;
        }
    });
    employers_3.addEventListener('change', () => {
        if(mainList.open == true && employers_3.value != ''){
            employers_btn.disabled = false;
        }else {
            employers_btn.disabled = true;
        }
    });










    const mainList = {
        budget: money,
        shpoName: name,
        shopGoods: [],
        employers: {},
        open: false,
        discount: false,
        shopItems: [],




        makeDiscount: function makeDiscount(discount, price) {
            if (discount == true) {
                price *= 0.8;
                return price;
            }
        },


        message: function message() {
            let mes = '';
            mainList.shopItems.forEach(function(item, i, shopItems) {
                mes += (i + 1) + '-' + item + ',';
            });
            alert('here you can buy: ' + mes);
        },

        shopIncludes: function shopIncludes() {
            for (let key in mainList) {
                console.log('Our shop includes: ' + key);
            }
        },
         isOpen: function isOpen(open){
            goods_btn.disabled = true;
            budget_btn.disabled = true;
            employers_btn.disabled = true;
         }



    };

mainList.isOpen();

