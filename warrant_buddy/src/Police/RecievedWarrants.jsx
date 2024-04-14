import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ReceivedWarrants() {
  const [policeStationid, setPoliceStationid] = useState("");
  const [warrants, setWarrants] = useState([]);

  const handlePoliceid = (event) => {
    setPoliceStationid(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:5000/police/getwarrentinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        policeStationid: policeStationid,
      }),
    });
    const data2 = await response.json();
    const {storeData : data} = data2;
    console.log(data);
    setWarrants([
      {
        warrantNo: data['warrantNo'],
        warrantType: data['warranttype'],
        // issueDate: data['issueDate'],
        // issueTime: data['issueTime'],
        accusedName: data['Accusedname'],
        aadharNo: data['AadharNo'],
        reason: data['details'],
        address: data['address'],
        pinCode: data['pincode'],
        policeStationid: data['policestationid'],
        status: data['status'],
      },
    ]);
  };

  return (
    <div className="satyam2 d-flex flex-column align-items-center justify-content-center m-2 p-2">
      <h1 className="text-white">Received Warrants</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Police Station ID"
          value={policeStationid}
          onChange={handlePoliceid}
        />
        <button type="submit" className="btn btn-primary mt-2">
          Search
        </button>
      </form>
      <br />
      <div className="warrants-list text-white">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Warrant No.</th>
              <th scope="col">Warrant Type</th>
              {/* <th scope="col">Issue Date</th>
              <th scope="col">Issue Time</th> */}
              <th scope="col">Accused</th>
              <th scope="col">Aadhar No.</th>
              <th scope="col">Reason</th>
              <th scope="col">Address</th>
              <th scope="col">Pin Code</th>
              <th scope="col">Police Station</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {warrants.map((warrant, index) => (
              <tr key={index}>
                <td>{warrant.warrantNo}</td>
                <td>{warrant.warrantType}</td>
                {/* <td>{warrant.issueDate}</td>
                <td>{warrant.issueTime}</td> */}
                <td>{warrant.accusedName}</td>
                <td>{warrant.aadharNo}</td>
                <td>{warrant.reason}</td>
                <td>{warrant.address}</td>
                <td>{warrant.pinCode}</td>
                <td>{warrant.policeStationid}</td>
                <td>{warrant.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReceivedWarrants;
