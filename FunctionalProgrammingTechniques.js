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
