multiplicationTable = function(size) {
    let result = [];
    for(let i =1;i<=size;i++){
        
        // process.stdout.write(`[${i}` + " ")
        //  process.stdout.write(`${i*2}` + " ")
        //  process.stdout.write(`${i*3}]` + " ")
        
        
        // in one line
         result.push([i, i*2, i*3])

    }
    return result

}
