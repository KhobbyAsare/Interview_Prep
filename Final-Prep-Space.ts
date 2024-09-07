console.log(someFunc());

function someFunc(){
    return 'move here'
}

if(3){
    console.log(typeof this);
    
}

function john(name:string){
   this.name = name
    console.log(this.name);
    
}

john('jakes')