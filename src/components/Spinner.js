import React, { useState } from 'react'; //import React

export default function Spinner() {
  const [spinner, setSpinnerOn] = useState(true) //Used to determine the spinners 'state'

  const toggleSpinner = () => { //Used to toggle the spinner.
    if (spinner == true) { //If the spinner is true
      setSpinnerOn(false) //set to opposite value.
    } else {
      setSpinnerOn(true)
    }
  };

  return (
    <div className='widget-spinner container'> {/* Main container */}
      <h2>Spinner</h2>
      {
        spinner && <div id='spinner' className='spinner'>--+--</div>
      }
      <button id='toggleSpinner' onClick={toggleSpinner}>  {/* Allow for the button to be clicked. Toggle the spinner when clicked */}
        {spinner ? "Hide" : "Show"} Spinner {/* Display spinner state */}
      </button>
    </div>
  );
}
