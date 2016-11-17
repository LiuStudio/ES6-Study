ES6 javascript adopt python lovely feature to be able to print multiline string

please see test.py for python of how to print multiline string. 
then in javascript ES6 we have 3 options

1, using \ to concat mutiline in to one string. 
However, \ doesn't give you new line char, so remmeber to use \n if you want a new line.. ( of course, you want a new line..)

var string = "This is first line \n\
This is second line \n\
This is third line \n\
";
console.log(string);


2, ES6 provide a Template String method, by using ` ` and put multi line stirng in the quote. it will preserve the format
example
var name = "narayan";
var x = `
My Name is ${name}.
My Profession is web development.
`;
console.log(x);

3, Old Fashion Fancy RegExp way..( To be honest, I hate this one, never get RegExp memorised..	)
var myString = (function () {/*
   I am narayan
   I am a web developer
*/}).toString().match(/[^]*\/\*([^]*)\*\/\}$/)[1];

console.log(myString);