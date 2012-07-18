var nodeProxy = require('../jscript/nodeProxy');

function ObjectOne(){
	function helloWorld(){
		console.log("Hello " + this.name);
	}
	return {
		helloWorld: helloWorld
	}
}

function ObjectTwo(){
	function init(){
		var contextObject = { name: 'iain' };
		var objectOne = new ObjectOne();
		nodeProxy(objectOne.helloWorld, contextObject)();
	}
	return {
		init: init
	}
}

var objectTwo = new ObjectTwo();
objectTwo.init();