import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";


export default function Login() {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    function validateEmail() {
        var emailID = email;

        let atpos = emailID.indexOf("@");
        let dotpos = emailID.indexOf(".");

        if (atpos < 1 || (dotpos - atpos < 2)) {
            return false;
        }
        return (true);
    }

    function ValibatePassword() {
        var myInput = password
        let test = false
        var lowerCaseLetters = /[a-z]/g;
        if (myInput.match(lowerCaseLetters)) {
            test = true
        } else {
            test = false
        }

        var upperCaseLetters = /[A-Z]/g;
        if (myInput.match(upperCaseLetters)) {
            test = true
        } else {
            test = false
        }

        var numbers = /[0-9]/g;
        if (myInput.match(numbers)) {
            test = true
        } else {
            test = false
        }

        if (myInput.length >= 8) {
            test = true
        } else {
            test = false
        }
        return (test)
    }

    const onsubmit = () => {
        const emailValidation = validateEmail()
        const formValidation = ValibatePassword()
        console.log(emailValidation)
        console.log(formValidation)
        console.log(firstName)
    }

    return (
        <div>
            <div className="row header">
                <div className="container">
                    <div className="text-center">
                        <div className="head">Start using Zeplin!</div>
                    </div>
                </div>
            </div>
            <div className="container">
                < div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 text-center ">
                        <button className="btn loginWithGoogle "> <img src="https://app.zeplin.io/img/logoGoogle.svg" /><span className="loginText">Sign up with Google</span></button>
                    </div>
                    <div className="col-md-1"></div>
                </div>
                <div className="row ">
                    <div className="col-md-12 text-center loginText">or</div>
                </div>
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center input-wrapper"><input type="text" className="inputLabel in" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /></div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center input-wrapper"><input type="text" className="inputLabel in" placeholder="User Name" onChange={(e) => setFirstName(e.target.value)} /></div>
                    <div className="col-md-2"></div>
                </div>
                {/* <input type="text" /> */}
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center input-wrapper"><input type="password" className="inputLabel in" placeholder="Password" onChange={(e) => setPass(e.target.value)} /></div>
                    <div className="col-md-2"></div>
                </div>
                <br />
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4"></div>
                        <div className="col-md-6  ">
                            <div className="row">
                                <div class="form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label inputset" for="exampleCheck1">I agree to <span style={{ color: "#419bf9" }}><a href="https://zeplin.io/terms">Ziplin's Terms Of Service</a> </span></label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text-center"><button className="btn btn-primary" onClick={() => onsubmit()}>Sign up for free</button></div>
                        <div className="col-md-3"></div>

                    </div>
                </div>
                <br /><br />
                <div className="container" style={{ width: "100%", maxWidth: "400px" }}>
                    <div className="row inputset ">
                        <Link to='/forgot-password' style={{ color: "#419bf9" }}>Forgot Password </Link>
                    </div>
                    <div className="row inputset ">
                        Already have an account? <Link to='/login' style={{ color: "#419bf9" }}> Login </Link>
                    </div>
                    <div className="row inputset ">
                        Looking for the Windows app?
                            <Link to='/' style={{ color: "#419bf9" }}>Download here </Link>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        </div >
    )
}
