// let m=0
// const time=setInterval(()=>{
//   m+=1
//   console.log(m+"sec");
//   if(m>50){
//     clearInterval(time);
//   }
// },1000)
// function wa(hello) {
//   hello();
// }
// var shash=function(){
//   console.log("this is node js");
// }
// wa(shash);
var shash=require('./node2.js');
console.log(shash.sum(['shashi','kanth','ms']));
console.log(shash.num(20,25,32));
