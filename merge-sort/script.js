// Merge sort

function mergeSort(arr) {
   if (arr.length <= 0) {
    return arr;
   }

   const mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);

   return merge(mergeSort(right), mergeSort(left));

}


function mergeSort(arr, start, end) {
    if (start < end) {
        let mid = (start + end) / 2;
        mergeSort(arr, start, mid)
        mergeSort(arr, mid+1, end);

        merge(arr, start, mid, end);
    }
    return arr;
}

let arr = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(arr, 0, 7));