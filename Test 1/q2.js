function roll(num)
{
    let die;
    if(num > 0)
    {
        die = Math.floor(Math.random() * num) + 1;
    }
    else
    {
        die = Math.floor(Math.random() * 6) + 1;
    }

    return die;
}

console.log(roll());