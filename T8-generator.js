ES6 provide a way to generate an array which will auto embeded the iterator property that for of need 

for example a collection function like the following
function collection_name()
{
    return [1, 3, 5, 7];
}

var collection = collection_name();

for(var iii = 0; iii < collection.length; iii++)
{
    console.log(collection[iii]);
}

with function* and yeild, the above is identical to the following generator syntax

function* collection_name()
{
    yield 1;
    yield 3;
    yield 5;
    yield 7;
}

for(var iii  of collection_name())
{
    console.log(iii);
}

here symbol.iterator property is auto created with the generator method so that for of will work 