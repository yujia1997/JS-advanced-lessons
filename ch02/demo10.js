//包装对象
var a = 123;
var b = new Number(a);
console.log(a == b);//ture
console.log(a === b);//false

//临时包装对象
var str = "abcde";
console.log(str.length);//5
str.length = 1;
console.log(str.length,str);//5 "abcde" 
//数字、布尔、字符串等基本数据类型都有对应的包装对象类型
//包装对象操作完成后，会释放成原来的基本数据类型
//临时包装对象并不影响原始值

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]