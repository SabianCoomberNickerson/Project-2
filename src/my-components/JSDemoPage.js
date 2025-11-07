// import the demo pages.
//import React from "react";
//import { useNavigate } from "react-router-dom";
import Demo1 from "./demos/Demo1";
import Demo2 from "./demos/Demo2";
import Demo3 from "./demos/Demo3";
import Demo4 from "./demos/Demo4";
import Demo5 from "./demos/Demo5";

//Function Component

//JSDemoPage receives the "button" prop.
const JSDemoPage = ({ button }) => {
  
    const playDemo = () => {
        switch (button) {
            case "button1":
                return <Demo1 />;
            case "button2":
                return <Demo2 />;
            case "button3":
                return <Demo3 />;
            case "button4":
                return <Demo4 />;
            case "button5":
                return <Demo5 />;
            default:
                return <p>Please select a button.</p>
        }
    };

  

  return (
    <div
      style={{
        border: "1px solid #CCC",
        padding: "20px",
        borderRadius: "6px",
        backgroundColor: "#FAFAFA",
      }}
    >
    {/*The selected content is displayed. */}
      {playDemo()}
    </div>
  );
};


//Export this component to the entire app, can be re-used or hooked into other Components
export default JSDemoPage; 