var arr = ['A','B','C','D','E','E','F','G','H','J','K','K','M']
function recur(){
    var arra=[]
  for(var i=0;i<arr.length;i++)
  {
      var n=0;
      var ne=''
      for(var j=i;j<arr.length;j++)
      {
          if(arr[j]!=arr[j+1])
        {
            n=j-i;
            if(n!=0)
            {i=j+1;
            for(var t=0;t<=n;t++)
            {
              ne=ne.concat(arr[j])
            }
            ne=ne.concat(',')
            }
            break;
        }
      }
      
  }
  arra=ne.split(',')
  return arra
    //code
}
console.log(recur(arr))