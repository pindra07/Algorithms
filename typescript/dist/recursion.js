"use strict";
/*   Definition
A process (a function in our case) that calls itself
- Base Case
- the recursive function (on different set of data)
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Sum Range
function sumRange(num) {
    if (num === 1)
        return 1;
    return num + sumRange(num - 1);
}
console.log(sumRange(9));
//# sourceMappingURL=recursion.js.map