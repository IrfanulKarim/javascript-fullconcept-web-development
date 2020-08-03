(function(window){
    var johngreeter = {};
    johngreeter.name = "john";
    var greeting = "Hi"
    johngreeter.sayhi = function (){
        console.log(greeting+johngreeter.name);
    }

    window.johngreeter = johngreeter;

})(window);


