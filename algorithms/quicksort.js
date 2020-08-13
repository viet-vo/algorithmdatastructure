/*
This is an exercise of the quicksort algorithm

? Learn the quicksort algorithm for organization of data
? Learn pros and cons of quicksort
? Learn use cases and when it should be avoided

Resources:
Explanation of quicksort and step by step explanation
https://humanwhocodes.com/blog/2012/11/27/computer-science-in-javascript-quicksort/
Recursive explanation of quicksort
https://dev.to/benweiser/quicksort-a-js-breakdown-lfg#:~:text=Quicksort%20is%20a%20recursive%20sorting,O(n%20log%20n).
Best video explanation so far
https://www.youtube.com/watch?v=MZaf_9IZCrc&t=182s

? Although I was going to try to fit all of the mechanics of quicksort into one functions, I realized in order to more easily implement the sort, it might be needed to use a helper function to recursively sort

*/
let nums1 = [100, 109, 163, 132, 20, 113, 182, 191, 106, 134, 141, 54, 81, 114, 161, 88, 41, 30, 28, 116, 95, 169, 140, 111, 52, 184, 152, 185, 105, 150, 32, 148, 6, 24, 75, 180, 166, 86, 31, 16, 143, 183, 138, 43, 199, 154, 57, 39, 187, 23, 47, 117, 12, 65, 69, 194, 34, 176, 3, 149, 58, 55, 63, 190, 42, 124, 130, 5, 33, 175, 4, 87, 108, 174, 107, 25, 35, 66, 22, 135, 127, 96, 153, 61, 60, 165, 40, 18, 71, 123, 67, 98, 170, 80, 136, 51, 195, 179, 82, 126, 22];

const quicksort = listOfNumbers => {
    console.log(listOfNumbers);    
}
const helperQuicksort = (listOfNumbers, left, right) => {
    console.log(listOfNumbers, left, right);
    
}

quicksort(nums1);