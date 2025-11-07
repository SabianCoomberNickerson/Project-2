//Import dependencies, components
import { useState, useEffect } from 'react'

// Demo 3 Function
// Preference saver.
// Moving forward the values should get saved and handled by the parent component,
// because the current setup only applies to this component. (Which makes the night mode useless)
function Demo3() {

  const [nightMode, setNightMode] = useState(localStorage.getItem("nightMode") || "white"); //Sets the starting value to the saved value if it exists, otherwise uses the default.
  const [colourPref, setColourPref] = useState(localStorage.getItem("fontColour") || "black");

  //React handles the storage setting the key "nightMode" to the current value of the variable nightMode.
  useEffect(() => {
    localStorage.setItem("nightMode", nightMode);
  }, [nightMode]); 

  //Update font colour prefence
  useEffect(() => {
    localStorage.setItem("fontColour", colourPref);
  }, [colourPref]);

  const toggleNightMode = () => {
    if (nightMode === "white") {
      setNightMode("#333");

    } else {
      setNightMode("white");
    }
  }

  const changeFontColour = (colour) => {
    setColourPref(colour);
  }

  return(<>

  <div style={{background:nightMode, color:colourPref}}> {/*background is either white or dark grey depending on nightMode state */}
    
    <h3>Manage preferences</h3>
    <button onClick={() => toggleNightMode()}>Toggle Nightmode</button><br/><br/>

    <label>Change text colour to:{" "}  {/*That little bit adds a space to the end of the sentence. */}
    <select defaultValue={colourPref} onChange={(event) => changeFontColour(event.target.value)}>
      <option value="black">Black</option>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
    </select>
    </label>

    <p>What colour do you prefer when reading about cellphones?.</p>
    
    
  </div>
  </>)
};

export default Demo3;