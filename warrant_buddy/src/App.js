import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import React from "react";
import "./App.css";
// import Lower_Navbar from "./Components/Lower_Navbar";
// import Carousel from "./Components/Carousel";
// import Footer from "./Components/Footer";
// import HomeGrid from "./Components/HomeGrid";
// import Upper_Navbar from "./Components/Upper_Navbar";
// import Div_Guidelines from "./Components/Div_Guidelines";

import LoginForm from "./Login/LoginForm";
import SignUpChoice from "./SignUp/SignUpChoice";
import Home from "./Components/Home";
import JudgeProfile from "./SignUp/JudgeProfile";
import ClientProfile from "./SignUp/ClientProfile";
import PoliceProfile from "./SignUp/PoliceProfile";
import Judge_Profile from "./JudgeProfileFolder/Judge_Profile";
import Client_Profile from "./Page2/Profile";
import Police_Profile from "./Police/Police_Profile";
import ChatApp from "./Chatbot/ChatApp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/chatBot" element={<ChatApp />} />
          {/* <Route path="/" element={<Testing />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/signupChoice" element={<SignUpChoice/>} />
           <Route path="/signup" element={<SignUpChoice />} />
           <Route path="/login" element={<LoginForm />} />
          <Route path="/signupJudge" element={<JudgeProfile />} />
          <Route path="/signupClient" element={<ClientProfile />} />
          <Route path="/signupPolice" element={<PoliceProfile />} />
           <Route path="/loginJudge" element={<Judge_Profile />} />
          <Route path="/loginClient" element={<Client_Profile />} />
          <Route path="/loginPolice" element={<Police_Profile />} />  
        </Routes>
      </BrowserRouter>

      {/* User Profile Page */}
      {/* <Profile /> */}

      {/* Login Page */}
      {/* <LoginForm /> */}

      {/* Sign-Up Page */}
      {/* <SignUpChoice /> */}

      {/* Judge Profile Page */}
      {/* <Judge_Profile></Judge_Profile> */}

      {/* Police Profile */}
      {/* <Police_Profile/> */}
    </>
  );
}

export default App;
