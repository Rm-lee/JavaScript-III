/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Windoow/global Object Binding, in this scope the this word will refer to the window/console Object
* 2. Implicit Binding, when a method is called the object left of the dot is "this"
* 3. New Binding, this will refer to the new instance of the object you have created using the constructor function
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1
function myAge(age){
 console.log(this);
 return age;
}
console.log(myAge("478"));

// code example for Window Binding

// Principle 2

const car = {
 color:  'black',
 details: function (model){
  console.log(`I drive a ${this.color} ${model}`);
  console.log(this);

 }
}
car.details('Camero');

// code example for Implicit Binding

// Principle 3

function userDb(username,password,email){
 this.username = username,
 this.password = password,
 this.email = email,
 this.display = function() {
  console.log('User info: username ' ,this.username,'passward:',this.password,'email: ',this.email);
  console.log(this);
 }
}
 const tom = new userDb('tomtom',1234,"tom@email.com");
 tom.display();

// code example for New Binding

// Principle 4



// code example for Explicit Binding