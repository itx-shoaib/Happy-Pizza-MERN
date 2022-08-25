import React,{ useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "../Css/RegisterPage.css"
function RegisterPage() {

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [number, setnumber] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');

  async function register(){
    if (password === cpassword) {
        const user = {
            name,
            email,
            password,
            cpassword
        };
        try {

            const result = await axios.post('/api/user/register',user).data;

            setname('')
            setemail('')
            setpassword('')
            setcpassword('')

        } catch (error) {
            console.log(error);
        }
    }
    else{
        alert("Password is not matched");
    }
}

  return (
    <>
    <div className="scrolling-disable">
      <div className="row justify-content-center">
        <div className="col-md-4 text-center mt-2">
          <img
            className="menuimg"
            src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
          alt="..." />
          <h3 className="boldtext my-3">SIGN UP</h3>
          <div className="my-5 ms-5 me-2 text-start centeredRegItems">
          <label for="name">Name</label>
            <input
              id="name"
              className="form-control mb-4"
              placeholder="Name"
              value={name} 
              onChange={(e) => { setname(e.target.value) }}
            />
            <label for="email">Email Address</label>
            <input
              id="email"
              className="form-control mb-4"
              placeholder="Email"
              value={email} 
              onChange={(e) => { setemail(e.target.value) }}
            />
            <label for="number">Phone</label>
            <input
              id="number"
              className="form-control mb-4"
              placeholder="Phone"
              value={number} 
              onChange={(e) => { setnumber(e.target.value) }}
            />
            <label for="password">Password</label>
            <input
              id="password"
              className="form-control mb-4"
              placeholder="Password"
              value={password} 
              onChange={(e) => { setpassword(e.target.value) }}
            />
            <label for="cpassword">Confirm Password</label>
            <input
              id="cpassword"
              className="form-control mb-4"
              placeholder="Confirm Password"
              value={cpassword} 
              onChange={(e) => { setcpassword(e.target.value) }}
            />
            <div className="disablediv">
                <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdO4hceAAAAAKUC0dEVBc05Whup7eljef2r2Pno&amp;co=aHR0cHM6Ly93d3cuaGFwcHlzcGl6emFidXJnZXIuY28udWs6NDQz&amp;hl=en-GB&amp;v=mq0-U1BHZ5YTcoDC-CvsLPNc&amp;theme=light&amp;size=normal&amp;cb=3dyygsvgyiom" width="304" height="78" role="presentation" name="a-yjjttnpaq2gk" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
            </div>
          </div>

          <div className="mb-5">
            <button className="btn btn-primary registerbtn" onClick={register}>SIGN IN</button>
            <button className="btn btn-light registerbtn"><i class="fa-brands fa-google"></i>  GOOGLE</button>
            <button className="btn btn-light registerbtn"><i class="fa-brands fa-square-facebook"></i>  FACEBOOK</button>
          </div>

          <p className="mb-5">Already have an account yet? <Link to="/login">Login</Link></p>
        </div>
        <div className="col-md-8 disablediv">
          <img
            className="registerimg"
            src="https://as2.ftcdn.net/v2/jpg/01/90/52/65/1000_F_190526564_IVy5J7E9JXdyKqeSrZx8hr6YTLhyIYpQ.jpg"
          alt="..." />
        </div>
      </div>
      </div>
    </>
  );
}

export default RegisterPage;
