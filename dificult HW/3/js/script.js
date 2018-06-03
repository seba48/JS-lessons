window.onload = function() {
	let str = 'урок-3-был слишком легким';
	let newStr = str[0].toUpperCase() + str.slice(1);
	// alert(newStr); 

	newStr = newStr.split('');
	for(var i = 0; i < newStr.length; i++){
		
		if(newStr[i] == '-'){
			newStr[i] = ' ';			
		};
	};
	newStr = newStr.join('');
	console.log(newStr);

	newStr = newStr.split(' ');
	let word;
	for(var i = 0; i < newStr.length; i++){
		
		if(newStr[i] == 'легким'){
			word = newStr[i];						
		};
	};
	word = word.split('');
	word[word.length - 2] = 'о';
	word[word.length - 1] = 'о';
	word = word.join('');
	console.log(word);


	let arr = [20, 33, 1, "Человек", 2, 3];
	let cubeSum = 0;
	for (var i = 0; i < arr.length; i++) {
		
		if(typeof(arr[i]) == 'number'){
			arr[i] = Math.pow(arr[i], 3);
			cubeSum += arr[i];
		}

	}
	console.log(Math.sqrt(cubeSum));
	// console.log(arr);

	function difHW (a) {
		if(typeof(a) == 'string'){
			alert('функции в качестве аргумента передана строка');
			a = a.trim();
			if(a.length > 49){
				console.log(a.substring(0,49) + '...');
			}
			// console.log(a);
		} 
	}

	difHW('   DWwdADAAEF  lweuhdLKJDNjdn;OWQILJD;alksndWND;olqkwjd;OALKDSJoalwkdj;OALKWDJoalkcn.lkdn.oelnjcsldknc.oLKNCOLAKNC.LKSN.LWK');


};