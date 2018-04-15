//闭包
function createInc(startValue){
    return function(step){
    startValue+=step;
    return startValue;
    }
    }
    var Inc=createInc(5);
    console.log(Inc(1));//6
    console.log(Inc(2));//8

    function f1(){
        var x = 1;
        function f2(){
            return x++;
        }
        return f2();
    }
    var f3 = f1();
    //观察f1中的x变量
    console.log(f3);//1
    console.log(f3);//1
    
    function f1(){
        var x = 1;
        function f2(){
            return x++;
        }
        return f2;
    }
    var f3 = f1();
    //观察f1中的x变量
    console.log(f3());//1
    console.log(f3());//2

    function foo() {
        var i = 0;
        function bar() {
            console.log(++i);
        }
        return bar();
    }
    foo();//1
    foo();//1

    function foo() {
        var i = 0;
        function bar() {
            console.log(++i);
        }
        return bar;
    }
    var a = foo();
    var b = foo();
    a();//1
    a();//2
    b();//1
    