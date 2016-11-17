1, ES6 has a way to represent Oct and Binary number

Oct: 0o
Binary: 0b


//Before ES6
var a = 012; 
console.log(a); //10

//ES6
var b = 0o12;
console.log(b); //10

var a = 0b11011101;
console.log(a); //221


2, ES6 has a datatype called Set. simialr to array, but set doesn't allow duplicated key, like array

//create a set
var set = new Set();

//add three keys to the set
set.add({x: 12});
set.add(44);
set.add("text");

//check if a provided key is present
console.log(set.has("text"));

//delete a key
set.delete(44);

//loop through the keys in an set
for(var i of set)
{
    console.log(i);
}

//create a set from array values
var set_1 = new Set([1, 2, 3, 4, 5]); 

//size of set
console.log(set_1.size); //5

//create a clone of another set
var set_2 = new Set(set.values());

3, weakset is different from set

example:

var set = new Set();
var weakset = new WeakSet();

(function(){
    var a = {x: 12};
    var b = {y: 12};

    set.add(a);
    weakset.add(b);
})()
One the above self invoked function is executed there is no way we can reference {x: 12} and {y: 12} anymore. Garbage collector goes ahead and deletes the key b pointer from “WeakSet” and also removes {y: 12} from memory. But in case of “Set”, the garbage collector doesn’t remove a pointer from “Set” and also doesn’t remove {x: 12} from memory.

So “Set” can cause more garbages in memory. We can say that “Set” references are strong pointer whereas “WeakSet” references are weak pointers.

“WeakSet” keys cannot be primitive types. Nor they can be created by an array or another set.

var set = new Set([1,2,3,4]);

//cannot be created from array or another set
var weakset = new WeakSet();
weakset.add({a: 1}); //object reference must
“WeakSet” doesn’t provide any methods or functions to work with the whole set of keys. For example: size, looping etc.
var set = new Set([1,2,3,4]);

//cannot be created from array
var weakset = new WeakSet();
weakset.add({a: 1}); //object reference must

console.log(set.size);//4
console.log(weakset.size);//undefined

for(var i of set)
{
    console.log(i); //1,2.3.4
}

//doesn't execute throws error
for(var i of weakset)
{
    console.log(i);
}

set.clear();
weakset.clear(); //This works


