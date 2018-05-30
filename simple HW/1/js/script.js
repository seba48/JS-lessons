window.onload = function() {
    var budget = prompt('Enter your mounth budget here:');
    	shopName = prompt('enter name of your shop here:');
    	dayBudget = budget/30;

    	// console.log(budget);
    	// console.log(shopName);

    	mainList = {
    		budget: budget,
    		shpoName : shopName,
    		shopGoods: new Array(),
    		employers: new Object(),
    		open
    	};
    	for (var i = 0; i < 3; i++) {
    		mainList.shopGoods.push(prompt('What items are you going to sail?'));
    	};

    	// console.log(mainList['shopGoods']);

    	alert('your daybudget is ' + dayBudget);
  };