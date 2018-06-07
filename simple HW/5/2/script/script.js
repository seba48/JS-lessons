window.onload = function() {
    let btn = document.getElementById('open-btn'),    
        name = document.getElementsByClassName('name'),        
        budget = document.getElementsByClassName('budget'),
        goods = document.getElementsByClassName('goods'),
        items = document.getElementsByClassName('items'),
        employers = document.getElementsByClassName('employers'),
        discount = document.getElementsByClassName('discount'),
        isopen = document.getElementsByClassName('isopen'),

        goodsItem = document.querySelectorAll('.goods-item'),
        // console.log(goodsItem);

        el = document.querySelector('.main-functions');
        buttons = el.getElementsByTagName('button'),
        // console.log(buttons);

        goods_1 = document.querySelector('#goods_1'),
        goods_2 = document.querySelector('#goods_1'),
        goods_3 = document.querySelector('#goods_1'),
        goods_4 = document.querySelector('#goods_4'),

        time = document.querySelector('.time-value'),
        count = document.querySelector('.count-budget-value'),

        employersNames = document.querySelectorAll('.hire-employers-item');
        console.log(employersNames);
};