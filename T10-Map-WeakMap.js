ES6 has a new type of object called "Map", which is a collection of unique keys of value

//create a map
var map = new Map();

//add three keys & values to the map
map.set({x: 12}, 12);

//same key is overwritten
map.set(44, 13);
map.set(44, 12);

//check if a provided key is present
console.log(map.has(44)); //true

//retrieve key
console.log(map.get(44)); //12

//delete a key
map.delete(44);

//loop through the keys in an map
for(var i of map)
{
    console.log(i);
}

//delete all keys
map.clear();

//create a map from arrays
var map_1 = new Map([[1, 2], [4, 5]]); 

//size of map
console.log(map_1.size); //2

JavaScript “Map” and “WeakMap” objects allows you to store collection of unique keys and their corresponding values. But there are some key differences between them. Here are the differences:

They both behave differently when a object referenced by their keys/values gets deleted. Lets take the below example code:
var map = new Map();
var weakmap = new WeakMap();

(function(){
    var a = {x: 12};
    var b = {y: 12};

    map.set(a, 1);
    weakmap.set(b, 2);
})()
One the above self invoked function is executed there is no way we can reference {x: 12} and {y: 12} anymore. Garbage collector goes ahead and deletes the key b pointer from “WeakMap” and also removes {y: 12} from memory. But in case of “Map”, the garbage collector doesn’t remove a pointer from “Map” and also doesn’t remove {x: 12} from memory.

So “Map” can cause more garbages in memory. We can say that “Map” references are strong pointer whereas “WeakMap” references are weak pointers.

“WeakMap” keys cannot be primitive types. Nor they can be created by an 2D array.
map.set(44, 12);

//throws invalid type error
weakmap.set(44, 13);

//doesn't work. throws errors
var map_1 = new WeakMap([[1, 2], [4, 5]]);
“WeakMap” doesn’t provide any methods or functions to work with the whole set of keys. For example: size, looping etc.
console.log(weakmap.size); //undefined


//loop through the keys in an map
for(var i of map)
{
    console.log(i);
}

//loop through the keys in an weakmap doesn't work
for(var i of weakmap)
{
    console.log(i);
}

//delete all keys
map.clear();

weakmap.clear(); //but this works