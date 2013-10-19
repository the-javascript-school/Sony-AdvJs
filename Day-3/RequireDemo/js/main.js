require.config({
	paths: {
		calculator: '../js/calculator',
		sciCalculator:'../js/sciCalculator',
		otherCalculator : "../js/otherCalculator",
		jquery : "../lib/jquery-1.10.2"
	}
});
require(['sciCalculator','otherCalculator','jquery'],function(sciCalc,otherCalc,$){
	console.log("application started with ",sciCalc,otherCalc,$);
});