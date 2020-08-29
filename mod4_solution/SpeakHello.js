(function(window) {
  var HS = new Object();
  
  HS.speak = function(name) {
      console.log("Hello " + name);
  };

  window.HS = HS;
})(window);
