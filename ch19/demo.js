//date原型方法
var today=new Date();
today.setMonth(6);
console.log(today);
console.log(today.getDay());
// Sat Jul 07 2018 14:46:32 GMT+0800 (中国标准时间)
//6

//Date静态方法（Date构造器函数对象的方法）GMT 格林尼治时间
console.log(Date.now());
//以毫秒为单位返回当前时间（从1970年1月1日00:00:00开始计算）
console.log((new Date()).getTime());

console.log(Date.parse("1970-01-01"));//dateTimeString字符串转换成毫秒
console.log(Date.parse("1970-01-02"));
console.log(Date.UTC(2017,9,1));


//无效日期
var date6 = new Date(NaN);
console.log(date6);//Invalid Date

//有无new的区别
var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);//object
console.log(d2,typeof d2);//string

var n1 = new Number("123");
var n2 = Number("123");
console.log(n1,typeof n1);
console.log(n2,typeof n2);
//Number {123} "object"
//VM38:4 123 "number"