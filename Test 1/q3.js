function average()
{
    let count = arguments.length;
    let total = 0;
    let i;
    for(i=0;i<count;i++)
    {
        total += arguments[i];
    }
    return total/count;
}

console.log("Average is " + average(256, 8, 32, 128, 16, 1024));