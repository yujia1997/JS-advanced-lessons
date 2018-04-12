//立即执行表达式 
(function max( x,y){
    console.log("the max is",x>y?x:y);
}(2,3));
//the max is 3

(function (x,y){ //可以没有函数名
    console.log("the min is",x<y?x:y);
})(2,3);
//the max is 3

!function(x,y){
    return x==y?true:false; 
}("5",5);//false

!function(x,y){
    return x===y?true:false; 
}("5",5);//true

(function() {
    console.log("111");
})();//111
(function () {
    console.log("222");
})()//没有分号会报错
//与运算符结合的写法
true && function(a,b){
    return a>b?a:b;
}(5,9);//9

!function(x,y){
    return x==y?true:false; // === 返回什么
}("5",5);//false
