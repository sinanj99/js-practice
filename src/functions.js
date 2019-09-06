/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function add(n1, n2) {
    return n1 + n2;
}
var sub = function (n1, n2) {
    return n1 - n2;
}
var mul = function(n1,n2) {
    return n1/n2;
}; 
var cb = function (n1, n2, callback) {
    try {
        if (typeof n1 !== "number") {
            throw new Error("n1 is not a number :)");
        } else if (typeof n2 !== "number") {
            throw new Error("n2 is not a number :)");
        } else if (typeof callback !== "function") {
            throw new Error("callback is not a function :)");
        }
    } catch (e) {
        console.log(e.message);
    }

    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};



console.log(add(1, 2))     // 3
console.log(add)          // Reference to the add-function
console.log(add(1, 2, 3)); // Omits the last arg. So, 3
console.log(add(1));	  // NaN (Not a Number), since nothing is specified for second arg
console.log(cb(3, 3, add)); // Result from the two numbers: 3 + 3 = 6
console.log(cb(4, 3, sub)); // Result from the two numbers: 4 - 3 = 1
//console.log(cb(3, 3, add())); // Will print an error. Problem: a function is passed instead of reference
console.log(cb(3, "hh", add));// Result from the two numbers: 3+hh=3hh
console.log(cb(3,3,mul));


var array = ["Lars", "Jan", "Peter", "Bo", "Frederik", "etc."];
var newArray = array.filter(x => x.length <= 3);
console.log(newArray);
var map1 = newArray.map(x => x.toString().toUpperCase());
console.log(map1);

function addToName(name) {
    name = "<li>" + name + "</li>";
    return name;
}

function names(names) {
    var map = names.map(addToName);
    map.unshift("<ul>");
    map.push("</ul>");
    var string = map.join('');
    return string;
}
console.log(names(array));

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
console.log(cars.filter(x => x.year > 1999));
console.log(cars.filter(x => x.make === "Volvo"));
console.log(cars.filter(x => x.price < 5000));
//console.log(cars.filter(x => x.year > 1999));
//console.log(cars.filter(x => x.year > 1999));

var values = cars.map(x => "insert into cars (id, year, make, model, price)" +
" values (" + x.id + "," + x.year + "," + x.make + "," + x.model + "," + x.price + ");");
values.join('\r');
console.log(values);

//var msgPrinter = function(msg,delay){
//  setTimeout(function(){
//    console.log(msg);
//  },delay);
//};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");
//
//function Person(name){
//  this.name = name;
//  console.log("Name: "+ this.name);
//  setTimeout(function(){
//    console.log("Hi  "+this.name);  //Explain this
//  },2000);
//}
//Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this



//var greeter = function(){
//  console.log(this.message);
//};
//var comp1 = { message: "Hello World" };
//var comp2 = { message: "Hi" };
//
//var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
//var g2 = greeter.bind(comp2 );//And here another “this”
//setTimeout(g1,500);
//setTimeout(g2,1000);


var obj = {name: "sne", age: 21, hobby: "coding", email: "email"};

for(var prop in obj){
  console.log(prop + ":",obj[prop]);
}

delete obj.email;

for(var prop in obj){
  console.log(prop + ":",obj[prop]);
}

obj.father = "null";

for(var prop in obj){
  console.log(prop + ":",obj[prop]);
}

function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}



