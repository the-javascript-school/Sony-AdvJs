var app = app || {};
(function(app){
	var calc = app.calculator;
	app.sciCalculator = {
		mod : function(x,y){
			var result = calc.add(x,y);
			//assume that this logic uses the calculator
			return x % y;
		}
	}
}(app))