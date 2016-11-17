ES6 provide for of to iterate array


var array = [1, 3, 5, 7, 9];

//'i' references to the values of the array indexes
for(var i of array)
{
    console.log(i); //1, 3, 5, 7, 9
}

catch is the custom collection object has to have a interator 
and next() property where it returns {value: element_value, done: false} when it is not done
and return {value: undefined, done:true} when it is done.

example:

var custom_collection = {
    elements:  [1, 4, 6, 9],
    size : 3,
    pointer :0,
    [Symbol.iterator]:  function(){
        var e = this.elements;
        var s = this.size;
        var p = this.pointer;
        return{
            next: function() {
                if(p > s) 
                {
                    return { value: undefined, done: true };
                } 
                else 
                {
                    p++;
                    return { value: e[p - 1], done: false };
                }
            },
        };
    }
}

for(var i of custom_collection)
{
    console.log(i); //1, 4, 6, 9
}