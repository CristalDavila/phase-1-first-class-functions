function receivesAFunction(func1){
return func1();
}

function returnsANamedFunction(){
    return function namedFunc(){
        console.log("I am a named function!")
     }
        
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am an anonymous function!")
    }
}
