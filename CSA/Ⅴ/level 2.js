// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }
// console.log(new Date, i);


//   第一题   5->5,5,5,5,5,5
//   第二题
// let i=5
// console.log(new Date,i);
// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(new Date, i);
//     }, 1000);
// }

//第三题
for (var i = 1; i < 5; i++) {
    (function (i){
        setTimeout(function() {
            console.log(new Date, i)
            }, i*1000)     
    })(i)    
}
var i=0
console.log(new Date, i);
