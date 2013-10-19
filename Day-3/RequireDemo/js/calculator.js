define([],function(){
	function add(x,y){
		return x+y;
	}
	function subtract(x,y){
		return x-y;
	}
	function multiply(x,y){
		return x*y;
	}
	function divide(x,y){
		return x/y;
	}
	var result;
	return {
		add : add,
		subtract : subtract,
		multiply : multiply,
		divide : divide,
		result : result
	};	
});
