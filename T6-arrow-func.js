ES6 provide arrow function => to return a function object

before

var myfunction = function (arg1, arg2) {
	var result = arg1 + arg2;
	return result;
}

will become 

var myfunction = (arg1, arg2)=> {
	var result = arg1 + arg2;
	return result;
}

Even more, when only have one arg

var myfunction = arg1 => {
	var result = arg1;
	return result;
}

even more, when function body only contain return statement

var myfunction = arg1 => {
	return arg1+10;
}

it can be without bracket

var myfunction = arg1 => arg1+10;


Remember the principle that arrow function always return an object/function object, 
then it is no different from regular other object when pass in to a function as arguments

for example

function sum(p, q)
{
    console.log(p() + q()); //87
}

sum(a => 20 + 10, b => 1 + 56); //here we are passing two function objects

Last, 

One last and most important feature about arrow function is that the “this” pointer inside an asynchronously executed arrow function points to the scope inside which it was passed as callback. A regular function’s this pointer points to global scope when executed asynchronously.

window.age = 12;

function Person(){
  this.age = 34;

  setTimeout(() => {
    console.log(this.age); //34
  }, 1000);

  setTimeout(function(){
    console.log(this.age); //12
  }, 1000);  
}

var p = new Person();
