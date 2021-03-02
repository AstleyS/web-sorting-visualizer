// Selection Sort
// This algo sorts an array by repeatedly placing the minimun element of the array in the beginning
// TC: O(n^2)
export const selectionSortAlgo = arr => {

    // This algo sorts an array by repeatedly swapping the adjacent element if it is in wrong order
    const bars = document.getElementsByClassName('array-bar');

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