/*
寄生组合式继承
2015-3-11
*/
function object(o) {
    function F() { }
    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    var prototype = object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
};

function Person(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

Person.prototype.sayName =
    function () {
        alert(this.name);
    };


function Student(name, age) {
    Person.call(this, name);
    this.age = age;
}

inheritPrototype(Student, Person);
Student.prototype.sayAge = function () {
    alert("this age:" + this.age);
};
Student.prototype.saySex = function() {
    alert("");
};


