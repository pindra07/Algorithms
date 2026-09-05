// Binary Search
// 
// TODO:
// 1. Add string data type in searching
// 2. Add regex data type in searching 
// Linear Search
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (target === arr[i]) {
            return i;
        }
    }
    return "The number is not present in the array";
}
console.log(linearSearch(arr, 4));
// Binary Search (works on sorted array)
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (target < arr[mid]) {
            right = mid - 1;
        }
        else if (target > arr[mid]) {
            left = mid + 1;
        }
        else if (target === arr[mid]) {
            return mid;
        }
    }
    return -1;
}
// Recursive Binary Search
function recursiveBinarySearch(arr, low, high, target) {
    // base case
    if (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        else if (target < arr[mid]) {
            return recursiveBinarySearch(arr, low, mid - 1, target);
        }
        else if (target > arr[mid]) {
            return recursiveBinarySearch(arr, mid + 1, high, target);
        }
    }
    return -1;
}
export {};
//# sourceMappingURL=binary_search.js.map