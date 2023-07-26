// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoSum (arr, target) {
    const numMap = new Map();

    for(let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        if(numMap.has(complement)) {
            return [numMap.get(complement), i];
        }

        numMap.set(arr[i], i);
    }

    // If no pair is found, return an empty array or null.
    return [];
}

// Example:
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const result = findTwoSum(inputArray, targetValue);
console.log("Output is: ", result); // Output: [1, 2]

