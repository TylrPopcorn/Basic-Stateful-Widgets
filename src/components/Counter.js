import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0); //Used to keep track of the current counter.

  const increment = () => {
    setCount(count + 1) //Add 1 to the counter
  };
  const decrement = () => {
    setCount(count - 1) //Subtract 1 from counter
  };
  const reset = () => {
    setCount(0) //Reset the counter
  };

  const style = { //Used for styling.
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: (count % 2 == 0 ? "royalblue" : "crimson"),
  };

  return (
    <div className='widget-counter container'>
      <h2>Counter</h2>
      <div id='count' style={style}>
        Number {count} is {count % 2 == 0 ? "even" : "odd"} {/* output the number onto the screen */}
      </div>
      <div>
        <button id='increment' onClick={increment}>Increment</button> {/* Allow the button to clicked on .. ADD 1 */}
        <button id='decrement' onClick={decrement}>Decrement</button>{/* Allow the button to clicked on .. SUBTRACT 1 */}
        <button id='resetCount' onClick={reset}>Reset</button> {/* Allow the button to clicked on .. RESET */}
      </div>
    </div>
  );
}
