// This algo sorts an array by repeatedly swapping the adjacent element if it is in wrong order
// TC: O(n^2)
export const bubbleSortAlgo = arr => {

    const bars = document.getElementsByClassName('array-bar');

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