// Merge Sort
export const mergeSort = arr => {
        
    if (arr.length === 1) {
        return arr;
    }
    
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

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