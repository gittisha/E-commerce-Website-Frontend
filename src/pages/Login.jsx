import React, { useState } from "react";
import './Css/LoginSignup.css';

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleLogin = () => {
    if (name === "admin" && email === "admin" && password === "admin") {
      triggerToast("Login success!");
    } else {
      triggerToast("Login failed");
    }
  };

  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000); // hides toast after 2 seconds
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login Here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name=" " id=" " />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div 
          style={{
            position: "fixed",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            fontSize: "16px",
            zIndex: 1000
          }}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default Login;
