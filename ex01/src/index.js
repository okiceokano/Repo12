function myRecursion(arr, n) {
    if (n <= 0) {
        return 0;
    } else {
        return myRecursion(arr, n-1) + arr[n-1];
    }
}
console.log(myRecursion([1,2,3,4], 3));
module.exports = myRecursion;