import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleEmail = (event) => {
    setEmail(event.target.value);
    
   
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);

    
  };
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Final Email:", email);  
    console.log("Final Password:", password); 
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={email}
          onChange={handleEmail}
          placeholder="Enter your email"
          className="input-field"
        />
        <p className="input-text">Your email is: {email}</p>
      </div>

      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={handlePassword}
          placeholder="Enter your password"
          className="input-field"
        />

        <button type="submit">Submit</button>
        <br />
        <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        <p className="input-text">Your Password is: {showPassword ? password : "••••••••"}</p>
      </div>
      </form>
    </div>
  );
  
}

export default Form;
