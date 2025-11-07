import React from "react";

//Function Component
const JSDemoButtons = ({ button, setButton }) => {

//An array holding each of the button ids and their labels.
const buttons = [
    { id: "button1", label: "Button 1" },
    { id: "button2", label: "Button 2" },
    { id: "button3", label: "Button 3" },
    { id: "button4", label: "Button 4" },
    { id: "button5", label: "Button 5" },
];
    //Component UI: HTML Rendering
    return(
        
            <div style={{ marginBottom: "20px", backgroundColor:"#007BFF" }}>   
            {/*The map function is used to go through each button in buttons and assign them HTML */}
            {buttons.map((btn) => (
                <button
                key={btn.id}
                //The current state of "button" is set to the id of the button clicked.
                onClick={() => setButton(btn.id)}
                style={{
                    marginRight: "10px",
                    padding: "8px 12px",
                    // For each button, if their id matches the state of the "button" variable,
                    // Then it is given a different colour to indicate it's selected. Otherwise they get the default colours.
                    backgroundColor: button === btn.id ? "#ffc007" : "#007BFF",
                    color: button === btn.id ? "#000" : "#ffc007",
                    //
                    border: "groove",
                    bordercolor: "#ffc007",
                    borderRadius: "10px",
                    cursor: "pointer",
                }}
                >
                {btn.label}
                </button>
            ))}
            </div>
            
    );
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default JSDemoButtons; 