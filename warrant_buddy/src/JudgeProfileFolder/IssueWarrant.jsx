import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function IssueWarrant() {
  const [warrantNo, setWarrantNo] = useState("");
  const [warrantType, setWarrantType] = useState("");
  const [accussedName, setAccussedName] = useState("");
  const [aadharnumber, setAadharnumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [policeStationid, setPoliceStationid] = useState("");
  const [status, setStatus] = useState("Open");
  const [reason, setReason] = useState("");



  const handleWarrantNumberChange = (e) => {
    setWarrantNo(e.target.value);
  };
  const handleWarrantTypeChange = (e) => {
    setWarrantType(e.target.value);
  };
  const handleAccussedNameChange = (e) => {
    setAccussedName(e.target.value);
  };
  const handleAadharChange = (e) => {
    setAadharnumber(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };
  const handlePoliceStationChange = (e) => {
    setPoliceStationid(e.target.value);
  };
  const handleWarrantStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };



  const handleSubmit = async (event) => {
    // alert("yuhi")
    event.preventDefault();
    const response = await fetch("http://localhost:5000/admin/issuewarrent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify
      ({
        warrantNo: warrantNo,
        warranttype :warrantType,
        AadharNo:aadharnumber,
        details:reason,
        Accusedname:accussedName,
        pincode:pincode,
        policestationid:policeStationid,
        status:status,
        address:address,

    })})
    // alert("yuhi")
    const res = await response.json();
    // alert("yuhi")
    console.log(res);
    if(res.status===201){
      alert("Warrant Issued")}
    else{
      alert("Error")
    }
  };
  return (
    <>
      <div className="satyam d-flex flex-column align-items-center justify-content-center m-2 p-8">
        <h1 className="text-white">Issue A Warrant</h1>
        <br />
        <div className="complaint-form text-white">
          <form onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantNo">Warrant No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="warrantNo"
                    placeholder="Warrant No"
                    onChange={handleWarrantNumberChange}
                    required
                    value={warrantNo}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantType">Warrant Type</label>
                  <input
                    className="form-control"
                    id="warrantType"
                    onChange={handleWarrantTypeChange}
                    required
                    value={warrantType}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantStatus">Status of Warrant</label>
                  <select
                    className="form-control"
                    id="warrantStatus"
                    value={warrantStatus}
                    onChange={(e) => setWarrantStatus(e.target.value)}
                  >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="accusedName">Accused Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="accusedName"
                    value={accusedName}
                    onChange={(e) => setAccusedName(e.target.value)}
                    placeholder="Accused Name"
                    onChange={handleAccussedNameChange}
                    required
                    value={accussedName}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="aadharNo">Aadhar No</label>
                  <input
                    type="text"
                    className="form-control"
                    id="aadharNo"
                    value={aadharNo}
                    onChange={(e) => setAadharNo(e.target.value)}
                    placeholder="Aadhar No"
                    onChange={handleAadharChange}
                    required
                    value={aadharnumber}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="accusedAddress">Address of Accused</label>
                  <input
                    type="text"
                    className="form-control"
                    id="accusedAddress"
                    value={accusedAddress}
                    onChange={(e) => setAccusedAddress(e.target.value)}
                    placeholder="Address"
                    onChange={handleAddressChange}
                    required
                    value={address}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="accusedPin">Pin Code of Accused</label>
                  <input
                    type="text"
                    className="form-control"
                    id="accusedPin"
                    value={accusedPin}
                    onChange={(e) => setAccusedPin(e.target.value)}
                    placeholder="Pin Code"
                    onChange={handlePincodeChange}
                    required
                    value={pincode}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="policeStation">Police Stationid</label>
                  <input
                    type="text"
                    className="form-control"
                    id="policeStation"
                    placeholder="Police Stationid"
                    onChange={handlePoliceStationChange}
                    required
                    value={policeStationid}
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantStatus">Status of Warrant</label>
                  <select
                    className="form-control"
                    id="warrantStatus"
                    // value={warrantStatus}
                    onChange={handleWarrantStatusChange}
                    required
                    value={status}
                  >
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <label htmlFor="issueReason">Reason of Issue</label>
                  <input
                    type="text"
                    className="form-control"
                    id="issueReason"
                    value={issueReason}
                    onChange={(e) => setIssueReason(e.target.value)}
                    placeholder="Reason of Issue"
                    onChange={handleReasonChange}
                    required
                    value={reason}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="submit"  className="btnLogin" />
              {/* <button type="button" className="btn btn-primary btn-cmpln">
                Submit
              </button> */}
            </div>
          </form>
          <div>
            <p>Location: {geolocation}</p>
            <p>Time: {currentTime}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default IssueWarrant;
