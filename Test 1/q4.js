function createFn(factor) 
{
    return function(value) 
    {
        return value * factor;
    };
}

let fn = createFn(10); 
console.log(fn(6));