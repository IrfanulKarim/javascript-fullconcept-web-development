(function(window){
    var smithgreeter = {};
    smithgreeter.name = "Smith";
    var greeting = "Hello";
    smithgreeter.sayhello = function (){
        console.log(greeting+smithgreeter.name);
    }

    window.smithgreeter = smithgreeter;

})(window);

