//Import all dependencies, other Components
import {useState} from 'react';
import {Link} from 'react-router-dom';

//Function Component
function Header() {

    //This is so the link buttons change colour depending on which one you clicked.
    //I tried having it do this in the functional links themselves but it wasn't working so I made a react function to handle button colours.
    const [activeButton, setActiveButton] = useState("home"); //Home is the default page so it's selected at the beginning.

    const buttonClick =(linkID) => {
        setActiveButton(linkID);
    };
    
    const headerStyle = {
        minHeight: "15vh",
        backgroundColor: "#2C3E50"
    };
    const taglineStyle = {
        minHeight: "15vh",
        backgroundColor: "#2C3E50"
    }

    //Component UI: HTML Rendering
    return(<>
        <header className="row" style={headerStyle}>
            <div className="col-12 col-md-12 col-lg-8 text-center text-white display-5"
                style={taglineStyle}> 
                Phone Fix Booking System
            </div>

            <div className="col-12 col-md-12 col-lg-4">
                <div className="row">
                    {/*Button 1*/}
                    <Link to="/" onClick={() => buttonClick('home')} class="col-12 col-md-6 col-lg-6 bg-info p-0 m-0 border border-dark text-center text-white"
                            style={{textDecoration: 'none', border: '1px solid #2C3E50', padding: '4px 24px', backgroundColor: activeButton === 'home' ? '#88E788' : '#66B2B2' }} >HOME</Link>
                    {/*Button 2*/}
                    <Link to="/advancedJS" onClick={() => buttonClick('extension')} class="col-12 col-md-6 col-lg-6 bg-info p-0 m-0 border border-dark text-center text-white"
                            style={{textDecoration: 'none', border: '1px solid #2C3E50', padding: '4px 24px', backgroundColor: activeButton === 'extension' ? '#88E788' : '#66B2B2' }} >Extension</Link>
                </div>
            </div>
        </header>
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Header;