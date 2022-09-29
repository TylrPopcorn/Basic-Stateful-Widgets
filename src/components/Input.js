
import React, { useState } from 'react';


export default function Input() {
  const [inputValue, setInputValue] = useState("") //Used to keep track of the input value.

  const changeInput = evt => { //Each time the input changes.
    const { value } = evt.target; //Get the new text.
    setInputValue(value) //Change the current value to the new value
  };
  const reset = () => { //Reset the input.
    setInputValue("") //Set the input to an empty string.
  };

  const style = { //Used for styling.
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: (inputValue.length > 10 ? "crimson" : 'royalblue'),
  };

  return (
    <div className='widget-input container'>
      <h2>Input</h2>
      <div id='output' style={style}>{inputValue.toUpperCase()}</div> {/* Output the input onto the screen for the user to see. */}
      <div>
        <input id='input' type='text' value={inputValue} onChange={changeInput} /> {/* Allow for the input to detect changes. */}
        <button id='resetInput' onClick={reset}>Reset</button> {/* Allow the button to be clicked on. */}
      </div>
    </div>
  );
}
