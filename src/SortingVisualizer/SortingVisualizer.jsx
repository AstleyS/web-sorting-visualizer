import React from 'react';
import './SortingVisualizer.css';


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
        for (let i = 0; i < 100; i++) {
            // Push to array random values between  5 and 1000
            array.push(randomIntFromInterval(5, 1000));
        }
        this.setState({array});
    }

    // This function renders the array values
    render() {
        const {array} = this.state;

        return (
         // Map all the values of the array
          <div className = 'bars-container'>
              {
                array.map((value, index) => {
                    return <div style={{height: `${value}px`}} className="array-bar" key={ index }>
                            </div>
                })
              }
          </div>
        )
    }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}