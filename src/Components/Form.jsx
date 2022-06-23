import React,{useState} from 'react';
import "./form.css";

function Frm() {
    let input = document.getElementById('email');
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const validateEmail = (e) => {
        let email = e.target.value;
        if(email==="" || email.indexOf("@")===-1 ){
          input.style.borderColor='#FF3565';
        }
        else{
          input.style.borderColor='#183FE1';
        }
      };

      const validateName = (e)=>{
        let value = e.target.value;
        if(value.length<3){
            name.style.borderColor='#FF3565';
        }
        else{
            name.style.borderColor='#183FE1';
        }
      }

      const validatePhone = (e)=>{
        let value = e.target.value;
        if(value.length<=11){
            phone.style.borderColor='#FF3565';
        }
        else{
            phone.style.borderColor='#183FE1';
        }
      }
    return ( 
        <>
        <main className="contain">
            <form className="form">
            <label>Name:</label>
            <input type="name" name="name" id="name" placeholder="Enter your name" onChange={(e) => validateName(e)}/>
            <label>Email:</label>
            <input type="email" name="email" id="email" placeholder="Enter your email" onChange={(e) => validateEmail(e)}/>
            <label>Phone Number:</label>
            <input type="tel" name="phone" id="phone" placeholder="Enter your number" onChange={(e) => validatePhone(e)}/>
            <label for= "sel"> </label>
            <select name="sel" id="sel">
            <option value="Sel">Select</option>
            <option value="opt1">Option 1</option>
            <option value="opt2">Option 2</option>
            <option value="opt3">Option 3</option>
            <option value="opt4">Option 4</option>
            </select>
        <div className="pics">
            <div className="btn-pic">
            <button className="btn btn-upload" type="button">
                Upload Picture
            <input type="file" accept="image/*" onChange={handleChange} />
            </button>
            </div>
            <img src={file}/>
            </div>
            </form>
            
        </main>
        </>
    )
}

export default Frm;