import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../helper/supabaseClient";
import "./login.css";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setMessage(error.message);
      setEmail("");
      setPassword("");
      return;
    }

    if (data) {
      navigate("/");
      return null;
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#6ea3d9b7",
        height: "100%",
        position: "relative",
      }}
    >
      <div className="log-separator">
      
        <div className="log-login">
          <div>
          <h1 style={{ paddingBottom: "50px", fontSize: "50px" }}>Log in</h1>

          <form action="" onSubmit={handleSubit}>
            <table>
              <tr style={{}}>
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
              </tr><br />
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
                  <button type="submit" name="log-btn" style={{padding:"8px 13px",fontSize:"15px", fontWeight:"bold",backgroundColor:"#0355a6da",border:"black", color:"white",borderRadius:"10px"}}>Log In</button>
                </td>
              </tr>
              <br />
            </table>
          </form>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <p style={{color:"#d92828fd",fontSize:"18px"}}>{message && <span>{message}</span>}</p>
          </div>
          
          <br></br>
          <span style={{color:"#999",fontSize:"14pX"}}>Don't have a account ?</span>
          <Link to={"/signin"} style={{paddingLeft:"8px",color:"#596"}}>Sign In</Link>
        </div>
      </div>
        <div className="log-img"></div>
      </div>
    </div>
  );
}
