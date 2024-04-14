import "bootstrap/dist/css/bootstrap.min.css";
// import Lower_Navbar_2 from "../Page2/Lower_Navbar_2";
// import Lower_Navbar_2 from "../Page2/Lower_Navbar_2" ;
import Footer from "../Components/Footer";
import JudgeIssuedWarrants from "./JudgeIssuedWarrants";
import JudgeRegisterComplaint from "./JudgeRegisterComplaint";
import IssueWarrant from "./IssueWarrant";
import preamble from "../Assets/preamble.jpg";
import warrantBuddy from "../Assets/warrantBuddy.jpg";
import React, { useState } from "react";
import "../App.css";

function Lower_Navbar_2() {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
      <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center navbar-bg">
        <div className="d-flex align-items-center">
          <img
            src={preamble}
            width="70"
            height="70"
            className="d-inline-block align-top mr-2"
            alt="Preamble"
          />
          <img
            src={warrantBuddy}
            height="70"
            className="d-inline-block align-top ml-2"
            alt="warrantBuddy"
          />
          <div className="dropdown ml-2 position-relative">
            <button
              className="btn btn-sm me-2 btn-outline-secondary LNbtn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={showDropdown}
              onClick={toggleDropdown}
            >
              PROFILE
            </button>
            {showDropdown && (
              <div
                className="dropdown-menu show"
                aria-labelledby="dropdownMenuButton"
                style={{
                  position: "absolute",
                  left: 980,
                  top: "100%",
                  transform: "translateY(0.5rem)",
                }}
              >
                <a className="dropdown-item" href="/signupJudge">
                  Edit Profile
                </a>
                <a className="dropdown-item" href="#">
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  }

function Judge_Profile(){
    return <> 
     {Lower_Navbar_2()}
     <IssueWarrant/>
        <div className="position-relative">
        <JudgeIssuedWarrants/>
        </div>
         
     <JudgeRegisterComplaint/>
    <Footer/>
      
    </>
}
export default Judge_Profile;