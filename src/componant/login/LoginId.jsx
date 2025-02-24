
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../../helper/supabaseClient";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate();

  const handleSubit=async (event) => {
    event.preventDefault();
    setMessage("");

    const {data,error}=await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    });
    if (error) {
      setMessage(error.message);
      setEmail("")
      setPassword("")
      return;
    }

    if(data){
      navigate('/home')
      return null;
    }
   
  };
  return (
    
    <div>
      <h1>Log in</h1>
      
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
             <button type="submit">Log In</button> 
            </td>
          </tr>
          <br />
        </table>
      </form>
      <span>Don't have a account ?</span>
      <Link to={'/'}>Sign In</Link>
    </div>
  );
}
