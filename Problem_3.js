// Write a JavaScript program to find the most frequent element in an array and return it. 

function findMostFrequentElement (arr) {
    let frequencyMap = new Map();

    // Count the frequency of each element in the array
    for(let num of arr) {
        if(frequencyMap.has(num)) {
            frequencyMap.set(num, frequencyMap.get(num) + 1);
        } else {
            frequencyMap.set(num, 1);
        }
    }

    let mostFrequentElement;
    let maxFrequency = 0;

    // Find the most frequent element and its frequency
    for(let [num, frequency] of frequencyMap) {
        if(frequency > maxFrequency) {
            mostFrequentElement = num;
            maxFrequency = frequency;
        }
    }

    return mostFrequentElement;
}

const input = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequentElement(input);
console.log(result); // Output: 3
