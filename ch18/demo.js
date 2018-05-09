//数组原型方法（迭代-非破坏性-检测方法）
//forEach
var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[];
arr1.forEach(function(a,i){
console.log(a,i,this);
arr3[i]=a>arr2[i]?a:arr2[i];
},arr2);
console.log(arr3);
//2 0 (3) [1, 6, 7]
// 5 1 (3) [1, 6, 7]
//8 2 (3) [1, 6, 7]
// (3) [2, 6, 8]

//every
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.every(function (a) {
    //判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看是否会输出8，为什么？
    return a%2===0;
});
console.log(returnValue);

//some
var arr2= [2,5,8];//[2,4,6]
var returnValue = arr2.some(function (a) {
    //判断数组元素是否都是偶数，若有不满足的将不再进行后续判断
    //console.log(a);//打开此行，查看输出了哪些数，为什么？
    return a%2===0;
});
console.log(returnValue);

//数组原型方法（迭代-非破坏性-转换方法）
// Array.prototype.map(callback,thisValue?) //Map映射 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.map(function (a) {
    return a*a;
});
console.log(newArray,arr2);

// Array.prototype.filter(callback,thisValue?) //Filter过滤 返回新的数组
var arr2= [1,3,5,7,9];
var newArray = arr2.filter(function (a) {
    //产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log(newArray,arr2);

//数组原型方法（迭代-非破坏性-归约方法）
// Array.prototype.reduce(element,initialValue?) //从左向右迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduce(add));

// Array.prototype.reduceRight(callback,initialValue?) //从右向左迭代
function add(prev,cur) {
    return prev+cur;
}
var arr3 = [10,3,1];
console.log(arr3.reduceRight(add));
