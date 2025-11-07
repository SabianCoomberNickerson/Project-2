//Import dependencies and components
import React, { useState } from "react";
import JSDemoButtons from './JSDemoButtons';
import JSDemoPage from './JSDemoPage';


//Function Component
function AdvancedJS() {


        // The state "button" is held by the AdvancedJS component.
        const [button, setButton] = useState("button1");



        //Component UI: HTML Rendering
            return(<>

                <div style={{minHeight: '60vh'}}>
                    <div id="statement" style={{background: '#A8DCAB'}}>
                        <bold>Statement of authenticity</bold>
                        <p>I confirm that:</p>
                        <ul>
                            <li>This is an original assessment and is entirely my own work.</li>
                            <li>It contains no material previously published or written by another person or myself except where due acknowledgement is made in the text.</li>
                            <li>No material which to a substantial extent, has been submitted for any other academic course, is included without acknowledgement.</li>
                        </ul>
                    </div>
                    <h1>THIS IS ADVANCED JS PAGE</h1>

                    {/*The JSDemoButtons component updates the state of "button" with "setButton" */}
                    <JSDemoButtons button={button} setButton={setButton} />
                    {/*The JSDemoPage receives the "button" prop so it knows which demo to render. */}
                    <JSDemoPage button={button} />
                </div>

        
            </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default AdvancedJS;