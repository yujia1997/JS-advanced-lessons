//函数对象
console.log(typeof new new Function());//object

console.log(typeof new Function()); //function
console.log(typeof new Array());   //object
console.log(typeof new Date());	   //object

console.log(typeof Function);//function
console.log(typeof Array);	 //function
console.log(typeof Date);	 //function
console.log(typeof Error); 	 //function
console.log(typeof Math);	 //object
console.log(typeof JSON);	 //object

console.log(Function instanceof Function); //true
console.log(Function instanceof Object);  //true

console.log(Array instanceof Function); //true
console.log(Array instanceof Object);  //true

console.log(Date instanceof Function); //true
console.log(Date instanceof Object);  //true

console.log(Math instanceof Function); //function
console.log(Math instanceof Object);  //true

console.log(JSON instanceof Function); //function
console.log(JSON instanceof Object);  //true

