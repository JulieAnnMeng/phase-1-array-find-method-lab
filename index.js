function superbowlWin(array) {
    const foundRecord = (array.find(array => array.result ==="W"));
    if (foundRecord){
        return foundRecord.year;
    }
    
    // function findWin(obj){
    //      return obj.result === "W";
    // }
    // let win = array.find(findWin);
    // if (win){
    //      return win.year;  
    // }

    // return array.find(findWin).year;
    
    // return array.find((obj) => obj.result === "W").year;
}
