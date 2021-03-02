// Merge Sort
// This algo sorts an array by dividing it in smaller arrays, sort them and lastly merge them
// TC: O(nLog(n)) 
export const mergeSortAlgo = arr => {

    // This algo sorts an array by repeatedly swapping the adjacent element if it is in wrong order
    //const bars = document.getElementsByClassName('array-bar');

    if (arr.length === 1) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);

    let left = mergeSortAlgo(arr.slice(0, mid));
    let right = mergeSortAlgo(arr.slice(mid));

    let i = 0;
    let j = 0;

    const sortedArray = [];

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i++])
        } else {
            sortedArray.push(right[j++])
        }
    }

    while (i < left.length) sortedArray.push(left[i++]);
    while (j < right.length) sortedArray.push(right[j++]);

    return sortedArray;

}

