window.onload = function() {
    var num = 33721;
    console.log(typeof(num));
    num = String(num);
    console.log(typeof(num));
    var strArr = num.split("");
    console.log(strArr);
    var numArr = [];
    for (var i = 0; i <strArr.length; i++) {
        numArr.push(Number(strArr[i]));
    };
    console.log(numArr);
    var result = numArr.reduce(function(a, b){
        return a*b;
    });
    console.log(result);
    var resultCube = Math.pow(result, 3);
    console.log(resultCube);
    var newStrArr = String(resultCube).split("");
    console.log(newStrArr);
    alert(newStrArr[0] + newStrArr[1]);
    //if somebody is checking it: 
    // I NOW THAT THIS IS "SHITCODE", but it`s all i have))
}