import React, { useState } from 'react'; //import React
//Variables:
const initialMood = 'Not sure how I feel';
const happyMood = 'Quite happy!';
const sadMood = 'Rather sad';

export default function Moods() { //Main function
  const [mood, setMood] = useState(sadMood) //Used to keep track of current mood.

  const makeHappy = () => { //Set mood to happy.
    setMood(happyMood)
  };
  const makeSad = () => { //Used to set mood to sad.
    setMood(sadMood) //Set mood to sad.
  };
  const reset = () => { //Used to rest the mood.
    setMood(initialMood) //set to mood to initual mood.
  };

  const style = { //Used for styling.
    fontSize: '1.5em',
    marginBottom: '0.3em',
    color: (mood == happyMood ? "royalblue" : 'crimson'),
  };

  return (
    <div className='widget-moods container'>
      <h2>Moods</h2> {/* Title */}
      <div id='mood' style={style}>{mood}</div> {/* Display mood */}
      <div>
        <button id='makeHappy' onClick={makeHappy}>Make Happy</button>  {/* Allow button to be clicked on .. make HAPPY. */}
        <button id='makeSad' onClick={makeSad}>Make Sad</button>  {/* Allow button to be clicked on .. make SAD. */}
        <button id='resetMood' onClick={reset}>Reset</button> {/* Allow button to be clicked on .. RESET mood. */}
      </div>
    </div>
  );
}
