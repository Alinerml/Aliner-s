var ary = [1,[2,[3,[4,5]]],6];
var bar = [];
function even (arr) {    
    for(let i=0;i<arr.length;i++)
    {
      if(!Array.isArray(arr[i]))
      {
        bar.push(arr[i])
      }
      else
      {
        even(arr[i])
      }
    }
    
  //你的代码
}
even(ary) //[1,2,3,4,5,6]
console.log(bar)//第一种方法

console.log(ary.flat(Infinity))//第二种方法