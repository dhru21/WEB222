function useDelimiter(arr,str){
    var s = str;
    for(var i=0;i<arr.length;i++){
        s = s + arr[i];
    }
    var deli = arr.join(str);
    return deli;
}
console.log(useDelimiter([1,2,3],":"));