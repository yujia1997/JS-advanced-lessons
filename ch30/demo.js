//箭头函数
var f = function (v) {
    return v + 1;
};
f(2);//3
//使用箭头函数，上述代码等效如下,只有一个参数和一条语句
var f = v => v + 1; //单参数可以不用（），单语句可以不用return关键字
//var f = (v) => {return v + 1;};
f(2);//3

var f = () => 5;
// 等同于
var f = function () {
    return 5
};

//箭头函数可以与变量解构结合使用
const full = ({ first, last }) => last + ' ' + first;
full({first:"Ming",last:"Li"});

// 等同于
function full({ first, last }) {
  return last + ' ' + first;
}
full({first:"Ming",last:"Li"});

//方法中的函数嵌套 this缺陷
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        //内部嵌套函数
        function moveToX() {
            this.x = x;//this绑定到了哪里？ 
        }
        //内部嵌套函数
        function moveToY() {
            this.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);
//方法中的函数嵌套 this缺陷 ES5中通过软绑定解决办法
var point = {
    x:0,
    y:0,
    moveTo:function (x,y) {
        var that = this;//关键的一行，软绑定
        //内部嵌套函数
        function moveToX() {
            that.x = x;//this改为that
        }
        //内部嵌套函数
        function moveToY() {
            that.y = y;//this绑定到了哪里？
        }
        moveToX();
        moveToY();
    }
};
point.moveTo(2,2);
console.log(point);
//console.log(window.x,window.y);

// ES5 中实现函数参数默认值的方法
var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
// ES6 中实现函数参数默认值的方法 ,使用babble查看ES5的写法
var sum = function(a,b=4,c=5){
    return a+b+c;
};
console.log(sum(1,2,3));//1+2+3
console.log(sum(1,2));//1+2+5
console.log(sum(1));//1+4+5
console.log(sum(1,0,0));//1+0+0

// ES5中 实参数大于形参数量时，可以通过arguments来获得所有参数
function test() {
    console.log(arguments);//console.log(test.arguments);
}
test("a","b","c");//Arguments(3) ["a", "b", "c", callee: ƒ, Symbol(Symbol.iterator): ƒ]

