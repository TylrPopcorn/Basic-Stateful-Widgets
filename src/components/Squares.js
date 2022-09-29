import React, { useState } from 'react'; //import react to be used.


const listOfSquareIds = ['sqA', 'sqB', 'sqC', 'sqD'];

export default function Squares() {

  const [squares, setSquares] = useState(listOfSquareIds) //Used to keep track of the squares
  const [activeSquare, setactiveSquare] = useState(null) //Used to keep track of active squares.

  const getClassName = id => { //returns an active square or not.
    return id === activeSquare ? "active" : "";
  };

  const markActive = id => {
    if (id === activeSquare) {
      setactiveSquare(null) //Set the square to not active
    } else {
      setactiveSquare(id) //Set the square to active
    }
  };

  return (
    <div className='widget-squares container'>
      <h2>Squares</h2>
      <div className='squares'>
        {
          squares.map(id =>
            <div
              id={id}
              key={id}
              className={`square ${getClassName(id)}`}
              onClick={() => markActive(id)}
            >
            </div>
          )
        }
      </div>
    </div>
  );
}
