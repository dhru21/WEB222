function calculate(n) { let list = [];
    for(let i = 0; i < n; i++) {
    list.push((n + i) * n); }
        return list;
    }
    console.log(calculate(3));

