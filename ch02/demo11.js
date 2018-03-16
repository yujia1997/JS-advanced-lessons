//数据类型转换
//其他类型转换成Boolean型
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean(0));//false
console.log(Boolean(NaN));//false
console.log(Boolean(1));//ture
console.log(Boolean(""));//false
console.log(Boolean("abc"));//ture
console.log(Boolean({}));//ture

if(new Boolean(false)){
    console.log("执行");
}
//执行
//其他类型转换成Number型
console.log(Number(undefined));//NaN
console.log(Number(null));//0
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(""));//0
console.log(Number("abc"));//NaN
console.log(Number("123.345xx"));//NaN
console.log(Number("32343,345xx"));//NaN
console.log(Number({x:1,y:2}));//NaN

console.log(parseFloat("123.345xx"));//123.345
console.log(parseFloat("32343,345xx"));//32343
console.log(parseInt("123.345xx"));//123
console.log(parseInt("32343,345xx"));//32343

//其他类型转换成String型
console.log(String(undefined));//undefined
console.log(String(null));//null
console.log(String(true));//ture
console.log(String(false));//false
console.log(String(0));//0
console.log(String(234));//234
console.log(String({x:1,y:2}));//[object object]