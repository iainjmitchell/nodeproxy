proxy = (func, callingproxy) ->
	proxyFunction = () -> 
		func.apply(callingproxy, arguments)	
	proxyFunction

module.exports = proxy