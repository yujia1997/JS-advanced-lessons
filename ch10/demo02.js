//词法作用域 与调用形式无关 
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    function fee(){
        var name = "Lucy";
        echo();
    }
    fee();
}
foo();//Jack

var scope="global";
function checkscope(){
var scope="local";
return function(){
return scope;
};
}
console.log(checkscope()());
//local