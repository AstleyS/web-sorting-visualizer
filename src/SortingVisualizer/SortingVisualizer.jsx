import React from 'react';
import './SortingVisualizer.css';
import { bubbleSortAlgo } from '../algorithms/bubbleSortAlgo';
import { selectionSortAlgo } from '../algorithms/selectionSortAlgo';
import { mergeSortAlgo } from '../algorithms/mergeSortAlgo';

export default class SortingVisualizer extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            // our main Array
            array: []
        }
    }

    componentDidMount() {
        // when app restarts we reset the array and populate with different numbers
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 10; i++) {
            // Push to array random values between  5 and 1000
            array.push(randomIntFromInterval(5, 500));
        }
        this.setState({array});
    }

    bubbleSort() {
        const expectedSort = this.state.array.slice().sort((a, b) => a - b);
        const realSort = bubbleSortAlgo(this.state.array);
        console.log(assertSorting(expectedSort, realSort)); 
        console.log({realSort})
    }

    selectionSort() {
        const expectedSort = this.state.array.slice().sort((a, b) => a - b);
        const realSort = selectionSortAlgo(this.state.array);
        console.log(assertSorting(expectedSort, realSort)); 
        console.log({realSort})
    }

    mergeSort() {
       const expectedSort = this.state.array.sort((a, b) => a - b);
       const realSort = mergeSortAlgo(this.state.array);
       console.log(assertSorting(expectedSort, realSort));
       console.log({realSort})
    }

    // This function renders the array values
    render() {
        const {array} = this.state;

        return (
         // Map all the values of the array
          <div className = 'bars-container'>
              {
                array.map((value, index) => {
                    return <div style={{height: `${value}px`}} className="array-bar" id={ index } key={ index }>
                            </div>
                })
              }
              <div className="buttons">
                <button onClick={() => this.resetArray()}>Generate new array</button>
                <button onClick={() => this.bubbleSort()}>BubbleSort</button>
                <button onClick={() => this.selectionSort()}>SelectionSort</button>
                <button onClick={() => this.mergeSort()}>MergeSort</button>
              </div>
          </div>
        )
    }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function assertSorting(expected, real) {
    if (expected.length !== real.length) return false;
    for (let i = 0; i < expected.length; i++) {
        if (expected[i] !== real[i]) return false;
    }
    return true;
}