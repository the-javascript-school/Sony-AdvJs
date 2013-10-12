/*var calculator = {
	add : function(){
		var result = 0;
		function parseArg(arg){
			if (typeof arg === "number") return arg;
			if (typeof arg === "string" && !isNaN(arg)) return parseInt(arg);
			if (arg instanceof Function) return arg();
			return 0;
		}
		for(var i=0;i<arguments.length;i++)
			result += parseArg(arguments[i]);
		return result;
	}
};*/

function Calculator(){
	this.parseArg = function(arg){
			if (typeof arg === "number") return arg;
			if (typeof arg === "string" && !isNaN(arg)) return parseInt(arg);
			if (arg instanceof Function) return this.parseArg(arg());
			if (arg instanceof Array) return this.add.apply(this,arg);
			return 0;
		};
	this.add = function(){
		return arguments.length === 1 
			? this.parseArg(arguments[0]) 
			: this.parseArg(arguments[0]) 
				+ this.add.apply(this,[].splice.call(arguments,1));
	}
}