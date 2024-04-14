import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function ReceivedWarrants() {
  // Sample data for demonstration
  const warrants = [
    {
      id: 1,
      warrantNo: "WNT12345",
      warrantType: "Search Warrant",
      issueDate: "2024-04-06",
      issueTime: "10:30 AM",
      accusedName: "John Doe",
      aadharNo: "1234 5678 9012",
      reason: "Suspected illegal activity",
      address: "123 Main Street",
      pinCode: "12345",
      policeStation: "City Police Station",
      status: "Open",
    },
    {
      id: 2,
      warrantNo: "WNT67890",
      warrantType: "Arrest Warrant",
      issueDate: "2024-04-05",
      issueTime: "2:45 PM",
      accusedName: "Jane Smith",
      aadharNo: "9876 5432 1098",
      reason: "Assault and battery",
      address: "456 Elm Street",
      pinCode: "54321",
      policeStation: "Town Police Station",
      status: "Closed",
    },
    // Add more warrant data as needed
  ];

  return (
    <div className="satyam2 d-flex flex-column align-items-center justify-content-center m-2 p-2">
      <h1 className="text-white">Received Warrants</h1>
      <br />
      <div className="warrants-list text-white">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S No.</th>
              <th scope="col">Warrant No.</th>
              <th scope="col">Warrant Type</th>
              <th scope="col">Issue Date</th>
              <th scope="col">Issue Time</th>
              <th scope="col">Accused</th>
              <th scope="col">Aadhar No.</th>
              <th scope="col">Reason</th>
              <th scope="col">Address</th>
              <th scope="col">Pin Code</th>
              <th scope="col">Police Station</th>
              <th scope="col">Status</th>
              {/* <th scope="col"> <button  onClick={}></button> </th> */}
            </tr>
          </thead>
          <tbody>
            {warrants.map((warrant, index) => (
              <tr key={warrant.id}>
                <th scope="row">{index + 1}</th>
                <td>{warrant.warrantNo}</td>
                <td>{warrant.warrantType}</td>
                <td>{warrant.issueDate}</td>
                <td>{warrant.issueTime}</td>
                <td>{warrant.accusedName}</td>
                <td>{warrant.aadharNo}</td>
                <td>{warrant.reason}</td>
                <td>{warrant.address}</td>
                <td>{warrant.pinCode}</td>
                <td>{warrant.policeStation}</td>
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
