window.onload = function() {

    var week = ['Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Suturday'];

     //console.log(week);

    let str = '';    
    var date = new Date();

    for (var i = 0; i < week.length; i++) {
        switch (week[i]) {
            case 'Sunday':
                week[i] = "<b>" + week[i] + "</b>";
                break;
            case 'Suturday':
                week[i] = '<b>' + week[i] + '</b>';
                break;            
        };

        if(i == date.getDay()){
            week[i] = '<i>' + week[i] + '</i>';
        }
        str += week[i] +'</br>';
    }
    document.write(str);
    

    var arr = [
    '442424466',
    '34362477',
    '9567722456',
    '73236344',
    '321214432',
    '876344324',
    '754174345'
    ];

    for (var i = 0; i < arr.length; i++) {

        let a = arr[i];
        a = a.split('');
        let nums = '';
        if( a[0] == 3 || a[0] == 7 ){
            nums += a[0];
            console.log(arr[i]); 
        };

    };
};