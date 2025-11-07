import { useState } from 'react';

//Function Component
function FormRepairDetail( {passDataToParent }) {

    const updateWarranty = (value) => {
        passDataToParent(value); //Child1 (FormCourtesyPhone)
    }


    const [purchaseDate, setPurchaseDate] = useState('');
    const [repairDate, setRepairDate] = useState('');
    //I'm using two separate errors instead of an error.purchase and error.repair because I couldn't get it working
    const [purchaseError, setPurchaseError] = useState("");
    const [repairError, setRepairError] = useState("");
    const [hasWarranty, setHasWarranty] = useState(false);


    const handlePurchaseDateChange = (e) => {
        const value = e.target.value;
        //This sets "today" to be the current date by getting a date and converting it to an ISO string.
        //Which look like "2025-10-20T14:35:12.345Z"
        //The time part gets split off so it's only the date which will be compared to the input.
        const today = new Date().toISOString().split('T')[0];

        setPurchaseDate(value);

        // Validate purchase date (it can't be set in the future)
        if (value > today) {
            setPurchaseError("Purchase date cannot be in the future.")
        } else {
            setPurchaseError("")

        // If the repair date exists, revalidate it
        if (repairDate && repairDate < value) {
            setRepairError("Repair date cannot be before purchase date.")
        } else {
            setRepairError("")

        }
        }
    };

const handleRepairDateChange = (e) => {
    const value = e.target.value;
    setRepairDate(value);

    // Validate repair date: not before purchase date
    if (purchaseDate && value < purchaseDate) {
      setRepairError("Repair date cannot be before purchase date.")
    } else {
      setRepairError("")
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Re-validate on submit
    if (purchaseError || repairError) {
      alert('Please fix the errors before submitting.');
      return;
    }

    alert('Form submitted successfully!');
    // handle actual submission logic here
    //
    //
    //
  };

    // Function for checking if the purchase date is within 24 months
    const canHaveWarranty = (dateString) => {
        if (!dateString) return true; // Default (checkbox enabled until user enters a date)
        const today = new Date();
        const purchase = new Date(dateString);
        const twoYearsAgo = new Date();
        twoYearsAgo.setFullYear(today.getFullYear() - 2);

        return purchase >= twoYearsAgo;
    };

    const checkboxDisabled = !canHaveWarranty(purchaseDate);

    //Component UI: HTML Rendering
    return(<>
        <h2>Repair Details</h2>
        <form id="repairForm" onSubmit={handleSubmit}>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Purchase Date *</label>
            <input className="col-12 col-md-12 col-lg-7" type="date" id="purchaseDate" name="purchaseDate" value={purchaseDate} onChange={handlePurchaseDateChange} required />  
            {purchaseError && <p style={{ color: 'red' }}>{purchaseError}</p>}
        </div>




        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Repair Date *</label>
            <input className="col-12 col-md-12 col-lg-7" type="date" id="repairDate" name="repairDate" value={repairDate} onChange={handleRepairDateChange} disabled={!purchaseDate} required />
            {repairError && <p style={{ color: 'red' }}>{repairError}</p>}
        </div>

        {/*Under Warranty*/}
        <div className="row">
            <fieldset className="border border-primary col-12 col-lg-ll ms-1 me-4 mb-3">
                <legend className="col-11 float-none w-auto">Under Warranty</legend>
                <div>
                    <label className="col-12 col-md-12 col-lg-4">Warranty</label>
                    <input type="checkbox" id="warranty" checked={hasWarranty}
                    onChange={(event) => {updateWarranty(event.target.checked); setHasWarranty(event.target.checked)}  }
                    disabled={checkboxDisabled} />
                    {/*passDataToParent(event.target.checked). 
                    this is shared warranty need to pass upto parent Component "Home" */}
                    {checkboxDisabled && (<p style={{ color: "red" }}>
                        Warranty not available for items purchased over 24 months ago.
                    </p>)}
                </div>
            </fieldset>
        </div>
        {/*Other details*/}
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">IMEI *</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="imei" pattern="[0-9]{15}" required />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Make: *</label>
            <select className="col-12 col-md-12 col-lg-7" id="make" name="make" required>
                <option value="Apple">Apple</option>
                <option value="LG">LG</option>
                <option value="Motorola">Motorola</option>
                <option value="Nokia">Nokia</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Model Number: </label>
            <input className="col-12 col-md-12 col-lg-7" type="text" id="modelNum" />
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Fault Category: *</label>
            <select className="col-12 col-md-12 col-lg-7" id="fault" name="fault" required>
                <option value="Battery">Battery</option>
                <option value="Charging">Charging</option>
                <option value="Screen">Screen</option>
                <option value="SD-storage">SD-storage</option>
                <option value="Software">Software</option>
                <option value="Other">Other</option>
            </select>
        </div>
        <div className="row mt-1">
            <label className="col-12 col-md-12 col-lg-4">Description: *</label>
            <textarea className="col-12 col-md-12 col-lg-7" rows="8" id="repairDesc" name="repairDesc" required></textarea>
        </div>
        </form>
    </>);



}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormRepairDetail; 
