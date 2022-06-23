import React from 'react';
import "./form.css";
import {Link} from 'react-router-dom';

function Login() {
  let input = document.getElementById('email');
  let psswd = document.getElementById('pass');
  const link =document.getElementById('link');
    
  const validateEmail = (e) => {
      let email = e.target.value;
      if(email==="" || email.indexOf("@")===-1 ){
        input.style.borderColor='#FF3565';
      }
      else{
        input.style.borderColor='#183FE1';
      }
    };

    const validatePassword = (e) => {
      let pass = e.target.value;
     
      if(pass===""){
        psswd.style.borderColor='#FF3565';
      }
      else{
        psswd.style.borderColor='#183FE1';
      }
    };

    const btnFunction = ()=>{
      if (input.value !=="" && psswd.value!==""){ 
        link.style.pointerEvents = "auto"
      }
      else{
        alert("Fill the input fields");
      }
    };
    return ( 
        <>
        <main className="contain">
            <form className="form">
            <label>Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" onChange={(e) => validateEmail(e)}/>
            <label>Password:</label>
            <input type="password" name="pass" id="pass" placeholder="Enter your password" onBlur={(e) => validatePassword(e)}/>
            <button className="btn" id="login" type="button" onClick={()=>btnFunction()}>
              <Link to="/Form" id="link">Log In</Link>
            </button>
            </form>
        </main>
        </>
    )
}
export default Login;