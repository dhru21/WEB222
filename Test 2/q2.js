function repeatList(s,n) {
    let list = [];
    for(let i = 0; i < 1; i++) {
    list.push(s);
}if(n>1){
    list.push(s+s);
}
if(n>2){
    list.push(s+s+s);
}
        return list;
    }
    console.log(repeatList('-',3));