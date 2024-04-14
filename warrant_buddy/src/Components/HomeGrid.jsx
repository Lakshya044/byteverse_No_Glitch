import React from "react";
import { useNavigate } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.min.css";

function HomeGrid() {
  const navigate = useNavigate();
  const bot = () => {
    // Navigate to the sign-up component
    navigate("/chatBot");
  };
  return (
    
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-md-4 m-2 homeCard d-flex flex-column text-center justify-content-between">
          <div className="mt-5">Check Warrants issued against you</div>
          <div className="mb-2">
            <button
              className="btn btn-sm me-2 btn-outline-success m-2"
              type="button"
            >
              CLICK HERE
            </button>
          </div>
        </div>
        <div className="col-md-4 m-2 homeCard d-flex flex-column text-center justify-content-between">
          <div className="mt-5">
            Talk to our Virtual Assistant, Enhance your knowledge about Law and
            Order.
          </div>
          <div className="mb-2">
            <button
              className="btn btn-sm me-2 btn-outline-success m-2"
              type="button" onClick={bot}
            >
              CLICK HERE
            </button>
          </div>
        </div>
        <div className="col-md-4 m-2 homeCard d-flex flex-column text-center justify-content-between">
          <div className="mt-5">File a Complaint against Someone</div>
          <div className="mb-2">
            <button
              className="btn btn-sm me-2 btn-outline-success m-2"
              type="button"
            >
              CLICK HERE
            </button>
          </div>
        </div>
        <div className="col-md-4 m-2 homeCard d-flex flex-column text-center justify-content-between">
          <div className="mt-5">Contact a Legal Advisor</div>
          <div className="mb-2">
            <button
              className="btn btn-sm me-2 btn-outline-success m-2"
              type="button"
            >
              CLICK HERE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeGrid;
