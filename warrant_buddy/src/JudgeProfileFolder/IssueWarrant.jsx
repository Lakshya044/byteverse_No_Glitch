import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function IssueWarrant() {
  const [warrantType, setWarrantType] = useState("Search Warrant");
  const [warrantStatus, setWarrantStatus] = useState("Open");
  const [accusedName, setAccusedName] = useState("");
  const [aadharNo, setAadharNo] = useState("");
  const [accusedAddress, setAccusedAddress] = useState("");
  const [accusedPin, setAccusedPin] = useState("");
  const [policeStation, setPoliceStation] = useState("");
  const [issueReason, setIssueReason] = useState("");
  const [geolocation, setGeolocation] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    getLocationAndTime();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const getLocationAndTime = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setGeolocation(`Latitude ${latitude}, Longitude ${longitude}`);
        },
        (error) => {
          setGeolocation(`Error: ${error.message}`);
        }
      );
    } else {
      setGeolocation("Geolocation is not supported by this browser.");
    }

    const currentTime = new Date().toLocaleTimeString();
    setCurrentTime(`Current time: ${currentTime}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting normally

    // Handle the warrant submission logic here
    console.log("Warrant Data:", {
      warrantType,
      warrantStatus,
      accusedName,
      aadharNo,
      accusedAddress,
      accusedPin,
      policeStation,
      issueReason,
      geolocation,
      currentTime,
    });

    // Reset the form
    setWarrantType("Search Warrant");
    setWarrantStatus("Open");
    setAccusedName("");
    setAadharNo("");
    setAccusedAddress("");
    setAccusedPin("");
    setPoliceStation("");
    setIssueReason("");
    setGeolocation("");
    setCurrentTime("");
  };

  return (
    <>
      <div className="satyam d-flex flex-column align-items-center justify-content-center m-2 p-8">
        <h1 className="text-white">Issue A Warrant</h1>
        <br />
        <div className="complaint-form text-white">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="warrantType">Warrant Type</label>
                  <select
                    className="form-control"
                    id="warrantType"
                    value={warrantType}
                    onChange={(e) => setWarrantType(e.target.value)}
                  >
                    <option value="Search Warrant">Search Warrant</option>
                    <option value="Arrest Warrant">Arrest Warrant</option>
                  </select>
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
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="policeStation">Police Station</label>
                  <input
                    type="text"
                    className="form-control"
                    id="policeStation"
                    value={policeStation}
                    onChange={(e) => setPoliceStation(e.target.value)}
                    placeholder="Police Station"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="form-group">
                  <label htmlFor="issueReason">Reason of Issue</label>
                  <input
                    type="text"
                    className="form-control"
                    id="issueReason"
                    value={issueReason}
                    onChange={(e) => setIssueReason(e.target.value)}
                    placeholder="Reason of Issue"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-cmpln">
                Submit
              </button>
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
