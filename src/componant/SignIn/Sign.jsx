import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../helper/supabaseClient";
import "./sign.css";

export default function Myapp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleSubit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      alert("Account created");
      setMessage("Account created");
      navigate("/login")
    }
    setEmail("");
    setPassword("");
  };
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <div className="sign-img"></div>
      <div className="sign-signin">
        <div>
        <h1 style={{ paddingBottom: "50px", fontSize: "50px" }}>Sign in</h1>

        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <p style={{color:"#d92828fd",fontSize:"18px",paddingBottom:"30px"}}>{message && <span>{message}</span>}</p>
          </div>
        <form action="" onSubmit={handleSubit}>
          <table>
            <tr>
              <td style={{fontSize:"18px"}}>Enter the email :</td>
              <td>
                <input
                  type="email"
                  name="uemail"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id=""
                  style={{padding:"4px 10px"}}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td style={{fontSize:"18px"}}>Enter the password :</td>
              <td>
                <input
                  type="password"
                  name="upass"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  id=""
                  style={{padding:"4px 10px"}}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td></td>
              <td>
                <button type="submit" name="sign-btn" style={{padding:"8px 13px",fontSize:"15px", fontWeight:"bold",backgroundColor:"#0355a6da",border:"black", color:"white",borderRadius:"10px"}}>Create a account</button>
              </td>
            </tr>
            <br />
          </table>
        </form>
        <span>Already have account?</span>
        <Link to={"/login"} style={{paddingLeft:"8px",color:"#596"}}>Log In</Link>
      </div>
    </div>
    </div>
  );
}
