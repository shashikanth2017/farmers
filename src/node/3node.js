// var num=require('events');
// var myemitter=new num.EventEmitter();
// myemitter.on('someEvents',function(msg){
//     console.log(msg)
// })
// myemitter.emit('someEvents','shashi is here')
var n=require('fs');
// var num=n.readFileSync('1.txt','utf-8');
// n.writeFileSync('2.txt',"hello this is shashi kanth from banglore");
// // console.log(num);
// n.readFile('2.txt','utf-8',function(err,data){
//     // console.log(data);
//     n.writeFile('3.txt',"helllo ");
// });
// const man=[{
//     name:"shashi",
//     age:20,
//     arr:['helo','bye','thank you']
// },{
//     name:"kanth",
//     age:23
// }]
// // sum=JSON.stringify(man);
// console.log(man[0].arr[2]);
n.mkdir("shash",function(){
n.readFile('2.txt',"utf-8",function(err,data){
   console.log(data);
   
n.writeFile('./shash/3.txt',data);
}); 
})
// n.rmdirSync('shash');

