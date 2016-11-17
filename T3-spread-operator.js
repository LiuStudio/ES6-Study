ES6 use ... to represent 
1, a spread of array 
2, the rest of array

We can use spread operator to take indefinite number of arguments.

Here is an example code of how to use this operator

//args variable is an array holding the passed function arguments
function function_one(...args)
{   
    console.log(args);
    console.log(args.length);
}

function_one(1, 4);
function_one(1, 4, 7);
function_one(1, 4, 7, 0);


function function_two(a, b, ...args)
{
    console.log(args);
    console.log(args.length);
}

//"args" holds only 7 and 9
function_two(1, 5, 7, 9);

This is the same as old Javascript using Array.prototype.slice.call() to extract possibly pased in arguments to function
//args variable is an array holding the function arguments
function function_one()
{   
    var args = Array.prototype.slice.call(arguments, function_one.length);

    console.log(args);
    console.log(args.length);
}

function_one(1, 4);
function_one(1, 4, 7);
function_one(1, 4, 7, 0);


function function_two(a, b)
{
    var args = Array.prototype.slice.call(arguments, function_two.length);

    console.log(args);
    console.log(args.length);
}

//"args" holds only 7 and 9
function_two(1, 5, 7, 9);


... apply to an array also spread it into multiple arguments

function function_name(a, b)
{
    console.log(a+b);
}

var array = [1, 4];

function_name(...array); //is equal to function_name(1, 4)

NOTE: 
... can be seen as a unpack operator that unpack a packed data(array), and make them several scattered element. 

