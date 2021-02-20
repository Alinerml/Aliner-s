var str = 'today is a happy day'

function change(){
    var a=str.split(' ')
    for(var i=0;i<a.length;i++)
    {
        a[i]=a[i][0].toUpperCase()+a[i].slice(1)
    }   
    var string=a.join(' ')
    return string
    //code
}
change(str)     //'Today Is A Happy Day'