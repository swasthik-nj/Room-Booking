
import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../../helper/supabaseClient";

export default function Myapp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubit=async (event) => {
    event.preventDefault();
    setMessage("");

    const {data,error}=await supabase.auth.signUp({
      email:email,
      password:password,
    });
    if (error) {
      setMessage(error.message);
      return;
    }

    if(data){
      setMessage("Account created");
    }
    setEmail("")
    setPassword("")
  };
  return (
    
    <div>
      <h1>Sign in</h1>
      
      {message && <span>{message}</span>}
      <form action="" onSubmit={handleSubit}>
        
        <table>
          <tr>
            <td>Enter the email :</td>
            <td>
              <input
                type="email"
                name="uemail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id=""
              />
            </td>
          </tr>
          <br />
          <tr>
            <td>Enter the password :</td>
            <td>
              <input type="password" name="upass"  onChange={(e) => setPassword(e.target.value)} value={password} id="" />
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
             <button type="submit">Create a account</button> 
            </td>
          </tr>
          <br />
        </table>
      </form>
      <span>Already have account?</span>
      <Link to={'/login'}>Log In</Link>
    </div>
  );
}
