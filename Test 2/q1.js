function isValidRoom(room){
    if (/^([A-K][0-9][0-9][0-9][0-9][A-Z])/i.test(room) || /^([A-K][0-9][0-9][0-9][0-9])/i.test(room)){
    return true;
    }
    else{
      return false;
    }
  }
  console.log(isValidRoom("A1034B"));