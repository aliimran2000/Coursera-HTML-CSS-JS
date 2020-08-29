(
  function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) {
      
        if (names[i].charAt(0) === 'j' || names[i].charAt(0) === 'J') {
            BS.speak(names[i]);
        } 
        else {  
            HS.speak(names[i]);
        }

    }
}
)();