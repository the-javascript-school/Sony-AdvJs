define(['calculator'],function(calc){
	var calc = calc;
	return {
		mod : function(x,y){
			var result = calc.add(x,y);
			//assume that this logic uses the calculator
			return x % y;
		}
	}
});

