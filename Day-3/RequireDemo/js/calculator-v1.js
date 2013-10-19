var app = app || {};
(function(app){
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
	app.calculator = {
		add : add,
		subtract : subtract,
		multiply : multiply,
		divide : divide
	}
}(app));
	