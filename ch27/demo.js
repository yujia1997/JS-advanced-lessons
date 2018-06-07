var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();//undefined
//等价于
var temp = new Date();
function f() {
    var temp;
    console.log(temp);
    if(false){
        temp = "Hi!";
    }
}
f();
//暂时性死区特性
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();//Thu Jun 07 2018 08:15:49 GMT+0800 (中国标准时间) 当前时间
