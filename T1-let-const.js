

1, let only exist in bracket scope. Don't have closure property'

if(true)
{
    let x = 12;
    alert(x); //alert's 12
}

alert(x); //x is undefined here


2, const has the same scope propety as let, and cannot be re-declare or re-assign in it's lifecycle/scope '

const x = 12;

//an constant 'x' is already available in this scope therefore the below line throws an error when you are try to create a new x variable.
const x = 13;

if(true)
{
    //an constant 'x' is available in this scope but not defined in this scope therefore the below line will not throw error instead define a new "x" inside this scope.
    const x = 13;
    
    //here 'y' is available inside this scope not outside this scope
    const y = 11;
}

//here creating a new 'y' will not throw an error because no other 'y' is available in this scope(i.e., global scope)
const y = 12;

