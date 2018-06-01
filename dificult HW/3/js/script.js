window.onload = function() {
    var budget = prompt('Enter your mounth budget here:');
    	shopName = prompt('enter name of your shop here:');
    	dayBudget = budget/30;

    	mainList = {
    		budget: budget,
    		shpoName : shopName,
    		shopGoods: [],
    		employers: {},
    		open
    	};

    	// =============================
    	// ==== Made by "FOR" cycle ====
    	// =============================
        time = 9;
        /*
        объявил переменную time потому что
        иначе ловлю андефайнд. хотя в
        видео без объявленной переменной
        каким то чудом срабатывает условие,
        что time>8 && time<20
        */
    	for (var i = 0; i < 3; i++) {
            let a = prompt('What items are you going to sail?');
            mainList.shopGoods[i] = (a);
            if((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50){
                console.log('everything is right');
                mainList.shopGoods[i] = (a);
            }else {
                
            }

            if(time < 0){                
                console.log('it can\'t be true');
            }else if(time > 8 && time < 20){
                console.log('time to work!');
            }else if(time < 24){
                console.log('it\'s too late now')
            }else if (time > 24){
                console.log('there are just 24 hours in the day');
            }

        };
        console.log(mainList);

    	// ===============================
    	// ==== Made by "WHILE" cycle ====
    	//================================

    	// let i = 0;
    	// while (i < 3) {
    	// 	mainList.shopGoods.push(prompt('What items are you going to sail?'));
    	// 	i++;
    	// }

    	// ===============================
    	// == Made by " DO WHILE" cycle ==
    	//================================

    	// do{
    	// 	mainList.shopGoods.push(prompt('What items are you going to sail?'));
    	//  	i++;
    	// }
    	// while(i < 3);

    	// console.log(mainList['shopGoods']);

    	alert('your daybudget is ' + dayBudget);
  };