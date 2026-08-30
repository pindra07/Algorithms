"use strict";
// Binary Search
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=binary_search.js.map