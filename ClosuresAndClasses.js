function getCounter(){
	var count = 0;
	return function(){
		count++;
		return count;
	}
}

function Employee(id,name,salary){
	if !(this instanceof Employee) new Employee(id,name,salary);
	var _id = id
		,_name = name
		,_salary = salary;
	this.id = function(){
		return _id;
	};
	this.name = function(){
		if (arguments.length === 0) return _name;
		if (arguments[0].length !== 0) _name = arguments[0];
	};
	this.salary = function(){
		if (arguments.length === 0) return _salary;
		if (arguments[0] > _salary) _salary = arguments[0];
	};
}

//Prototypal Inheritance
var baseObj = {
  display : function(){
     console.log(this.id,this.name);
  },
  id : 100
}

function Employee(name,salary){
  this.name = name;
  this.salary = salary;
}

Employee.prototype = baseObj;

var e1 = new Employee("magesh",10000);
e1.display();

var e2 = new Employee("suresh",12000);
e2.display();

e1.id = 200;
e1.display() //?
e2.display() //?
