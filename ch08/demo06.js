var obj1={
    x:12,
    foo:function(y){
        console.log(this.x,y);
    }
}
var obj2={
    x:34
}
obj1.foo.call(obj2,"xx");
//34 "xx"
