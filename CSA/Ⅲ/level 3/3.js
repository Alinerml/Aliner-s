function Animal(){
    this.species = "动物";
}

function Cat(name,color){
    this.name = name;
    this.color = color;
}
var cat1=new Cat("大黄","黄色")
var nanimal=new Animal()
Object.assign(cat1,nanimal)//浅拷贝
console.log(cat1.species)

function cat2(name,color){//继承
    Animal.apply(this);
    this.name = name;
    this.color = color;
}
var cat3=new cat2("a","b")
console.log(cat3.species)