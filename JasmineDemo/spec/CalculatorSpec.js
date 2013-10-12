describe("Calculator",function(){
	describe("add Operation",function(){
		var calculator;
		
		beforeEach(function(){
			calculator = new Calculator();
		});
		
		it("should return the same number when only one argument is passed",function(){

			var result = calculator.add(1);
			expect(result).toEqual(1);
		});
		it("should return the sum when numbers are passed",function(){
			var result = calculator.add(1,2,3);
			expect(result).toEqual(6);
		});
		it("should return the sum when numbers and strings are passed",function(){
			var result = calculator.add(1,2,"3");
			expect(result).toEqual(6);
		});
		it("should return the sum when array of numbers are passed",function(){
			var result = calculator.add([1,2,3]);
			expect(result).toEqual(6);
		});
		it("should return the sum when a nested array of numbers are passed",function(){
			var result = calculator.add([1,[2,[3]]]);
			expect(result).toEqual(6);
		});
		it("should return the sum when functions that return number is passed",function(){
				var result = calculator.add(1,2,function(){ return 3;});
				expect(result).toEqual(6);
			});
		it("should return the sum when array of functions return numbers is passed",function(){
			var result = calculator.add(1,[function(){ return 2;},function(){return 3;}]);
			expect(result).toEqual(6);
		});
		it("should return the sum when function that return a function that return a number is passed",function(){
				var result = calculator.add(1,2,function(){ return function(){ return 3};});
				expect(result).toEqual(6);
			});
		it("should return the sum when function that return an array of numbers is passed",function(){
			var result = calculator.add(1,2,function(){ return [1,2,3]});
			expect(result).toEqual(9);
		});

	});
});