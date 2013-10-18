function filter(list,conditionFn){
  var result = [];
  for(var i=0;i<list.length;i++)
    if (conditionFn(list[i])) result.push(list[i]);
  return result;
}
function sort(list,criteria){
   var criteriaFn = typeof criteria === "function" ? criteria : function(p){ return p[criteria];};
   for(var i=0;i<list.length-1;i++)
     for(var j=i+1;j<list.length;j++)
        if (criteriaFn(list[i]) > criteriaFn(list[j])){
           var temp = list[i];
           list[i] = list[j];
           list[j] = temp;
         }
   return list;
}
function map(list,operationFn){
  for(var i=0;i<list.length;i++){
     operationFn(list[i]);
  }
}

function bind(fn, thisContext){
  var _fn = fn,
  	  _thisContext = thisContext;
  return function(){
      return _fn.apply(_thisContext,Array.prototype.splice.call(arguments,0));
  }
}


function f(){ console.log(this.name);}

var a = { name : "a"};
var b = { name : "b"};

a.m = f;
a.m() // prints "a"

b.m = f;
b.m() //prints "b"

var refObj = {name : "refObj"};

f = bind(f,refObj); //implement the "bind" function

a.m = f;
a.m() // should print "refObj"

b.m = f;
b.m() // should print "refObj"