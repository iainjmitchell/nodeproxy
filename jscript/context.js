(function() {
  var context;

  context = function(func, callingContext) {
    var contextFunction;
    console.log(arguments);
    contextFunction = function() {
      return func.apply(callingContext, arguments);
    };
    return contextFunction;
  };

  module.exports = context;

}).call(this);
