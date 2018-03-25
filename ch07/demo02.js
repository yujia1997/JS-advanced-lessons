var x=45;
var obj={
x:23,
test:function(){
function foo(){
console.log(this.x);
}
foo();
}
};
obj.test();//45