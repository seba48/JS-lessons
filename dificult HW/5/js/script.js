window.onload = function() {    
    let date = new Date();
    // let newDate = new Date(getHours(), getMinutes(), getSeconds(), getDate(), getMounth(), getfullYear());
    
    console.log(date.getHours() + ':'
    			+ date.getMinutes() + ':'
    			+ date.getSeconds() + ' '
    			+ date.getDate() + '.'
    			+ date.getMonth() +'.'
    			+ date.getFullYear());

    function addZero(dayOrMonth){

    	if(dayOrMonth < 10){
    		dayOrMonth = '0' + dayOrMonth;
    	}
    	return dayOrMonth;
    }

    console.log(addZero(date.getDate()));

    function dayAsRussianWord(day){
    	switch (day){
    		case 0:
	    		return 'Воскресенье'
	    		break;
    		case 1:
	    		return 'Понедельник'
	    		break;
    		case 2:
	    		return 'Вторник'
	    		break;
    		case 3:
	    		return 'Среда'
	    		break;
    		case 4:
	    		return 'Четверг'
	    		break;
    		case 5:
	    		return 'Пятница'
	    		break;
    		case 6:
	    		return 'Суббота'
	    		break;
	    	default:
	    		return 'нет такого дня:)'

    	}
    }
    console.log(dayAsRussianWord(date.getDay()));

    
}