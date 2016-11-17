1, ES6 provide destructor to get multiple value from one function/array
   it allow you to skip element when destracting value form an array

function function_name()
{
    return [1, 6, 7, 4, 8, 0]; //here we are storing variables in an array and returning the array
}

var q, w, e, r, t, y;

//Here we are using ES6's array destructuring feature to assign the returned values to variables.
//Here we are ignoring 2 and 4 array indexes
[q, w, , r, , y] = function_name();

alert(y);//y is 0

2, ES6 allow function to assign default value incase arg is not passed in
   anything passed in as undefined, ES6 think it as a missing arg and will use the default value

   ES6 provides a new syntax that can be used to define default values to function parameters:

function myFunction(x = 1, y = 2, z = 3)
{
     console.log(x, y, z); // Output "6 7 3"
}
myFunction(6,7);
Also, passing undefined is considered as missing an argument. Here is an example
to demonstrate this:

   function myFunction(x = 1, y = 2, z = 3)
   {
     console.log(x, y, z); // Output "1 7 9"
   }
   myFunction(undefined,7,9);
Defaults can also be expressions. Here is an example to demonstrate this:

   function myFunction(x = 1, y = 2, z = 3 + 5)
   {
     console.log(x, y, z); // Output "6 7 8"
   }
   myFunction(6,7);