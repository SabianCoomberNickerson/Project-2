//Import all dependencies, other Components
import { useState, useEffect } from 'react';


//Function Component
function FormCustomerDetail( { sendCustomerDetails } ) {


    
    const [phone, setPhone] = useState('');
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    



    const validatePhone = (value) => {
        const regex = /^[0-9\s-]*$/;
        if (regex.test(value)) {
            setError('');
        } else {
            setError('Phone number can only contain numbers, spaces and hyphens.')
        }
        setPhone(value);
    }

    //----------
    //customer details
    const [customerDetails, setCustomerDetails] = useState({title: "Mr", firstname: "", lastname: "", customer_type: ""});

    const handleChange = (event) => {
        const { name, value } = event.target; //Get updated pair-value: "name" and "value"
        setCustomerDetails( {...customerDetails, ...{[name]: value } } );
    }
    //useEffect() hook "SYNCHRONIZE" a component with another component (or external system)
    //useEffect Hook syntax: useEffect(() => {}, [dependencies]);
    useEffect( () => {
        //Call-back function
        sendCustomerDetails(customerDetails);
        console.log(customerDetails);
    }, [customerDetails]);


    //Component UI: HTML Rendering
    return(<>
        <h2>Customer Details</h2>
        <form onSubmit={handleSubmit}>
        {/*Customer type*/}
        <div className="row">
            <fieldset className="border border-primary col-12 col-lg-11 ms-2 me-4">
                <legend className="col-11 float-none w-auto">Customer type *</legend>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Consumer</label>
                    <input type="radio" id="customerType" name="customer_type" value="consumer" onChange={handleChange} />
                </div>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Business</label>
                    <input type="radio" id="businessType" name="customer_type" value="business" onChange={handleChange}/>
                </div>
            </fieldset>
        </div>

        {/*Details*/}
        <div className="row mt-2">
            <label className="col-12 col-md-12 col-lg-4">Title *</label>
            <select className="col-12 col-md-12 col-lg-7"
                    defaultValue="Mr"
                    name="title"
                    onChange={handleChange} required >
                <option value="Mr" selected>Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">First Name: *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" pattern="^[A-Za-z\s\-]+$" id="fname"
                    name="firstname"
                    onChange={handleChange} required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Last Name: *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" pattern="^[A-Za-z\s\-]+$" id="lname"
                    name="lastname"
                    onChange={handleChange} required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Street: *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="street" required/>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Suburb:</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="suburb" />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">City: *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="city" required />
        </div>    
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Post Code:</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" pattern="[1-9][0-9]{3}" id="postCode" />
        </div>        
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Phone Number: *</label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="pnumber" pattern="[0-9\s()\-+]+" value={phone} onChange={(e) => validatePhone(e.target.value)} required />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>        
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Email: *</label>
            <input className="col-12 col-md-12 col-lg-7" type="email" id="email" required />
        </div>
        </form>
    </>);
}



//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCustomerDetail; 