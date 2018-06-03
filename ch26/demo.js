// 案例一 同步执行的回调
var arr1= [1,3,5,7,9];
console.log("arr1:",arr1);
var newArray1 = arr1.map(function (a) {
    return a*a;
});
console.log("newArray1:",newArray1);
//arr1: (5) [1, 3, 5, 7, 9]
// newArray1: (5) [1, 9, 25, 49, 81]


var arr2= [1,3,5,7,9];
console.log("arr2:",arr2);
var newArray2 = arr2.filter(function (a) {
    //产生新数组，新数组的元素是返回为true的那些元素
    return (a>2&&a<8)?true:false;
});
console.log("newArray2:",newArray2);
//arr2: (5) [1, 3, 5, 7, 9]
// newArray2: (3) [3, 5, 7]

// 案例二 异步执行的回调(通过定时器模拟)
var LTimeOperation = function(taskID){
    var id = taskID;
    //思考什么时候将方法定义在构造函数内，什么时候定义在构造函数的prototype属性上
    this.go = function(callback){
        console.log('Start LTimeOperation #'+id);
        var delay = parseInt((Math.random() * 10000000) % 5000);
        setTimeout(function(){
            console.log('task #'+id+' cost '+delay+' ms.');
            callback();
        },delay);
    }
};
function f2(){
    console.log('this is f2, i am callback!\n');
}
for(var i = 0;i<5;i++){
    var task = new LTimeOperation(i);
    task.go(f2);
}
//事件触发与事件监听
// 案例一 在控制台中输出window 和 document
document.onclick = function () {
    console.log("document 被点击了！");
};

// 案例二
for(var i=0;i<5;i++){
    var btn=document.createElement("button");
    btn.setAttribute("id","btnId"+i);
    btn.setAttribute("style","width:200px");
    btn.setAttribute("style","height:20px");
    document.body.appendChild(btn);
}

// 案例三 在Nodejs环境下进行调试
var http = require('http');
var url = 'http://www.baidu.com';

http.get(url,function(res){
    res.setEncoding('utf-8');
    res.on('data',function(data){
        console.log(data);
    });
    res.on('end',function(end){
        console.log('End!');
    });
});
