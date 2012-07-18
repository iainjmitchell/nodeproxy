(function() {
  var proxy;

  proxy = function(func, callingproxy) {
    var proxyFunction;
    proxyFunction = function() {
      return func.apply(callingproxy, arguments);
    };
    return proxyFunction;
  };

  module.exports = proxy;

}).call(this);
