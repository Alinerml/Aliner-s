var data = {
    age: 18,
    name: "liuruchao",
    education: ["小学", "初中", "高中", "大学", undefined, null],
    likesFood: new Set(["fish", "banana"]),
    friends: [
          { name: "summer",  sex: "woman"},
          { name: "daWen",   sex: "woman"},
          { name: "yang",    sex: "man" }  ], 
    work: { 
            time: "2019", 
            project: { name: "test",obtain: ["css", "html", "js"]} 
          }, 
    play: function() {    console.log("玩滑板");  }
}

var deepCopy = function(obj) {//递归
    if (typeof obj !== 'object') return;
    var newObj = obj instanceof Array ? [] : {};
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}

var newdata=deepCopy(data)
console.log(newdata)


var newdara2 = JSON.parse( JSON.stringify(data))//改变数据类型
console.log(newdara2)