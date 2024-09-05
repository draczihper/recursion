// Merge sort

function mergeSort(arr) {
   if (arr.length <= 0) {
    return arr;
   }

   const mid = Math.floor(arr.length / 2);
   const left = arr.slice(0, mid);
   const right = arr.slice(mid);

   return merge(mergeSort(left), mergeSort(right));

}


function merge(left, right) {
   let sortedArray = [];
   let i = 0, j = 0;

   while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
        sortedArray.push(left[i]);
        i++;
    } else {
        sortedArray.push(right[j]);
        j++;
    }
   }

   return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

let unsortedArray = [3, 2, 1, 13, 8, 5, 0, 1];

console.log(mergeSort(arr, 0, 7));