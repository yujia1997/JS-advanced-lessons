function example() {
    return {
        foo: undeined,
        bar: null
    };
}
var { foo=1, bar=2 } = example();//1 null

var [x,y,z,w]=["a","c","d","b"];
[x,y,z,w]=[x,w,y,z];
console.log(x,y,z,w);
//a b c d

var jsonData={id:42,status:"ok",data:[876,5309]};
var {id,status,data:number}=jsonData;
console.log(id,status,number);
//42 "ok" (2) [876, 5309]
