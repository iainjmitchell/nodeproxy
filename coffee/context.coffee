context = (func, callingContext) ->
	contextFunction = () -> 
		func.apply(callingContext, arguments)	
	contextFunction

module.exports = context