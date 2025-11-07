//Function Component
function FormCost(props) {
    //The props for the bond, existence of a warranty and the customer type are received from Home.js
    //(props.sharedPropBond, props.sharedPropWarranty, props.propCustomerType)



    //Bond and warranty values were initially calculated in the value={} parameter for their respective inputs.
    //This has been moved up here after introducing more complexity.

    //There is no bond if the customer type is business.
    //There is no service fee is there is a warranty.
    let bond = 0;
    let warranty = 0;
    if (props.propCustomerType == "business") {
        bond = 0;
    }
    else {
        bond = props.sharedPropBond;
    }

    if (props.sharedPropWarranty) {
        warranty = 0;
    }
    else {
        warranty = 85;
    }
    let totalFee = bond + warranty;
    let GST = totalFee * 0.15;
    let totalPlusGST = totalFee + GST;



    //Component UI: HTML Rendering
    return(<>
        <h2>Cost</h2>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Bond: ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="bond" value={bond} readonly />
        </div>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Service Fee: ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="serviceFee" value={warranty} readonly />
        </div>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Total: ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="totalFee" value={totalFee} readonly />
        </div>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">GST: ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="GST" value={GST} readonly />
        </div>
        <div className="row mt-2 ms-3">
            <label className="col-12 col-md-12 col-lg-4">Total(+GST) ($)</label>
            <input className="col-12 col-md-12 col-lg-7" type="number" id="totalPlusGST" value={totalPlusGST} readonly />
        </div>
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost; 