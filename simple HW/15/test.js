function sayName(name){
	let message = 'My name is ' + name;
	return message;
}

let arr = [5,-3,6,-5,0,-7,8,9];
let result = arr.reduce(function(sum,elem){
	return sum + elem;
})
let assert = require('chai').assert

describe('sayName', function(){
	it('getting phrase with new name', function(){
		assert.typeOf(sayName('Sergey'), 'string');
	});
})
describe('arr', function(){
	it('getting numbers sum', function(){
		assert.equal(result, 13);
	});
})