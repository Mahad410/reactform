import React from 'react';
import "./form.css";
import {Link} from 'react-router-dom';

function Login() {
  let input = document.getElementById('email');
  let psswd = document.getElementById('pass');
  const l =document.getElementById('link');
    
  const validateEmail = () => {
      if(input.value=="" || input.value.indexOf("@")==-1 ){
        input.style.borderColor='#FF3565';
      }
      else{
        input.style.borderColor='#183FE1';
      }
    };

    const validatePassword = () => {
      if(psswd.value==""){
        psswd.style.borderColor='#FF3565';
      }
      else{
        psswd.style.borderColor='#183FE1';
      }
    };

    const btnFunction = ()=>{
      if (input.value !=="" && psswd.value!==""){ 
        l.style.pointerEvents = "auto"
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
            <input type="email" name="email" id="email" placeholder="Enter your email" onChange={()=>validateEmail()}/>
            <label>Password:</label>
            <input type="password" name="pass" id="pass" placeholder="Enter your password" onBlur={()=>validatePassword()}/>
            <button className="btn" id="login" type="button" onClick={()=>btnFunction()}>
              <Link to="/Form" id="link">Log In</Link>
            </button>
            </form>
        </main>
        </>
    );
}
export default Login;