//  Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallest (arr) {
    if(arr.length < 2) {
        return "Array should have at least two elements.";
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for(let num of arr) {
        if(num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if(num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    if(secondSmallest === Infinity) {
        return "There is no second smallest element.";
    }

    return secondSmallest;
}

// Test cases
console.log(findSecondSmallest([3, 1, 5, 7, 2, 4, 6])); // Output: 2
console.log(findSecondSmallest([9, 3, 6, 1, 2, 8, 5])); // Output: 2
console.log(findSecondSmallest([1, 1, 1, 1])); // Output: "There is no second smallest element."
console.log(findSecondSmallest([10])); // Output: "Array should have at least two elements."
