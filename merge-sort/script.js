// Merge sort

function merge(arr, start, mid, end) {
    let p = start, q = mid + 1;
    
    arr[end - start+1], k = 0;

    for (let i = start; i <= end; i++){
        if (p > mid) {
            arr[k++] = arr[p++];
        } else if (q > end) {
            arr[k++] = arr[p++];
        } else if (arr[p] < arr[q]) {
            arr[k++] = arr[p++];
        } else {
            arr[k++] = arr[q++];
        }
    }

    for (let p = 0; p < k; p++) {
        arr[start++] = arr[p];
    }
}


function mergeSort(arr, ) {
    if ()
}