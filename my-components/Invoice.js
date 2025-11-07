//Import all dependencies, other Components
import React from 'react';
import { useLocation } from "react-router-dom";

//Function Component
function Invoice() {
    //Use "useLocation" hook to access the "location" object containing "data" passed from "Home"
    const location = useLocation();
    console.log(location.state);
    const receivedData = location.state.attachedData;
    //
    if (!receivedData) {
        return <h2>ERROR! No data is passed on.</h2>;
    }




    //Component UI: HTML Rendering
    return(<>
        <div style={{minHeight: '60vh'}}>
            {/* Header */}
            <div className='bg-secondary p-3 row'>
                <h1 className='col-6'>Repair Booking</h1>
                <p className='col-6'>Amount Due: <br /><span style={{fontSize: '23px'}}>XYZ</span> </p>
            </div>
            {/* Customer Details */}
            <div className='p-3 row'>
                <div className='col-6'>
                    <h4>Customer Details</h4>
                    <p>Customer type: {receivedData.sharedCustomerType ? "consumer" : "business"} </p>
                    <p>Title: {receivedData.customerDetails.title} </p>
                    <p>First name: {receivedData.customerDetails.firstname} </p>
                    <p>Last name: {receivedData.customerDetails.lastname} </p>
                </div>
                <div className='col-6'>
                    <h4>Repair Job:</h4>
                    <p>Job number: xxxx </p>
                    <p>Invoice Date: {new Date().toLocaleDateString()} </p>
                </div>
            </div>
            {/* Repair Details */}
            <hr />
            <div className='p-3'>
                <h4>Repair Details:</h4>
            </div>
            {/* Courtesy Loan Device Details */}
            <div className='p-3'>
                <h4>Courtesy Loan Device Details:</h4>
                <div className="mt-2 ms-3 me-3 bg-white">
                    <table className="table table-bordered" style={{width: '40%'}}>
                        <tbody>
                            <tr>
                                <td>Item</td>
                                <td>Cost</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/* TOTALS */}
            <div className='p-3 row'>
                <div className='col-6'></div>
                <div className='col-6'>
                    <h4>TOTALS:</h4>
                    <p>Bond: ${receivedData.sharedBond.toFixed(2)} </p>
                </div>
            </div>
            {/* Footer */}
            <hr />
            <div className='p-3 row'>
                <div className='col-6'>
                    <p className='fs-5'><strong>PHONE FIX SERVICES</strong></p>
                    <p>Address: 501 Goucester STreet <br />
                    Taradale, Napier 4112</p>
                </div>
                <div className='col-6'>
                    <p className='fs-5'><strong>Contact Us:</strong></p>
                    <p>Phone: 06 974 8000</p>
                </div>
            </div>
        </div>
    </>);
}

//Export this component to the entire app, can be re-used or hooked into other components
export default Invoice;