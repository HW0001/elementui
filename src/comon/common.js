　　var name = "The Window";

　　var object = {
　　　　name : "My Object",

　　　　getNameFunc : function(){
　　　　　　return function(){
    console.log(this.name);
　　　　　　　　return this.name;
　　　　　　};

　　　　}

　　};

console.log(object.getNameFunc()())