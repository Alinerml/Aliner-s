function Student(name) { 
    function People(name) {
      
      People.name=name;
      this.sleepFirst()
    }
    People.prototype.study = function(course) {
        People.study=course;
      return this;
    }
    
  
    People.prototype.sleepFirst = function(time) {
        if(time!=undefined)
        {setTimeout(function(){
        console.log('Wake up after '+time)
        console.log('Hi! This is '+name+'!')
        console.log('Study '+People.study+'~')
    }, time*1000);}
        else
            {console.log('Hi! This is '+name+'!')}
    return this;
}
    People.prototype.sleep = function(time) {
        if(time!=undefined)
        setTimeout(function(){
            console.log('Wake up after '+time)
            console.log('Study '+People.study+'~')
          }, time*1000);
      return this;
    }
  
    return new People(name);
  }
  
  Student('fxy');
  Student('fxy').sleep(3).study('javascript');
  Student('fxy').study('javascript').study('Vue');
  Student('fxy').sleepFirst(5).study('Ajax');