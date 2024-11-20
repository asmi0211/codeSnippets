function pipeLine(numbers) {
    let min = Math.min(...numbers); // Find the minimum value in the array used spread operator
    let max = Math.max(...numbers); // Find the maximum value in the array used spread operator
    let result = []; // Initialize an empty array to store the range of numbers
    
    // Loop from min to max (inclusive) and push each number into the result array
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    
    return result; // Return the result array containing the range
}

console.log(pipeLine([1, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
