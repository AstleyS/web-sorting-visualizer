// Bubble Sort
// This algo sorts an array by repeatedly swapping the adjacent element if it is in wrong order
const bars = document.getElementsByClassName('array-bar');

// TC: O(n^2)
export const bubbleSort = arr => {

    let len = arr.length;

    while (len >= 0) {
        for (let i = 0; i < len - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
                [bars[i + 1].style.height, bars[i].style.height] = [bars[i].style.height, bars[i + 1].style.height]; 
            }  
        }
        len--;
    }

    return arr;
}

// Selection Sort
// This algo sorts an array by repeatedly placing the minimun element of the array in the beginning
// TC: O(n^2)
export const selectionSort = arr => {
    let curr_i = 0;

    while (curr_i < arr.length) {
        let min_n = Number.MAX_SAFE_INTEGER;
        let index = 0; 
        for (let i = curr_i; i < arr.length; i++) {
            min_n = Math.min(min_n, arr[i]);
        }
        index = arr.indexOf(min_n); 
        [arr[index], arr[curr_i]] = [arr[curr_i], arr[index]];
        [bars[index].style.height, bars[curr_i].style.height] = [bars[curr_i].style.height, bars[index].style.height];
        curr_i++;
    }

    return arr;
}

// Merge Sort
// This algo sorts an array by dividing it in smaller arrays, sort them and lastly merge them
// TC: O(nLog(n)) 
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

