import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";


export default function Login() {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const [toggel, setToggel] = useState(false)
    const [err, setErr] = useState({
        Email: "",
        UserName: "",
        Password: [],
        inputCheck: ""
    })

    function validateEmail() {
        var emailID = email;

        let atpos = emailID.indexOf("@");
        let dotpos = emailID.indexOf(".");

        if (atpos < 1 || (dotpos - atpos < 2)) {
            setErr({ ...err, Email: "Enter A Valid Email" })
            console.log("true")
        }
        else {

            console.log("false")
            setErr({ ...err, Email: " " })
        }
    }

    function ValidatePassword() {
        console.log(password)
        var myInput = password
        let test = false

        var lowerCaseLetters = /[a-z]/g;

        let er = []
        if (myInput.match(lowerCaseLetters)) {
            test = true
            console.log(true)
        } else {
            test = false
            er.push([" Should contain a lower case letter"])

        }

        var upperCaseLetters = /[A-Z]/g;
        if (myInput.match(upperCaseLetters)) {
            test = true
        } else {
            test = false
            er.push([" Should contain a lower case letter"])
        }

        var numbers = /[0-9]/g;
        if (myInput.match(numbers)) {
            test = true
        } else {
            test = false
            er.push([" Should contain a numeric value"])
        }

        if (myInput.length >= 8) {
            test = true
        } else {
            test = false
            er.push([" Should contain an Greater then 7 letters"])

        }
        setErr({ ...err, Password: [...er] })


        return (test)
    }

    const debounce = (func) => {
        var t
        clearTimeout(t)
        t = setTimeout(func, 600);
    }

    const onsubmit = () => {
        if (debounce & tog & user) {
            alert("SignUp done")
        }
        else {
            alert("Please Check the Inputs")
        }


    }

    const tog = () => {
        setToggel(!toggel)
        if (toggel) {

            setErr({ ...err, inputCheck: " Please Read and check it!" })
            return false
        } else {
            setErr({ ...err, inputCheck: "" })
            return true
        }
    }

    const user = () => {
        if (firstName != "") {
            return true
        }
        else {
            setErr({ ...err, UserName: " Please Enter a userName" })
            return false
        }
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
                    <div className="col-md-8 text-center input-wrapper"><small style={{ color: "#ee6723" }}>{err.Email}</small><br />
                        <input type="text" className="inputLabel in" placeholder="Email" onChange={(e) => (setEmail(e.target.value), debounce(validateEmail))} /></div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center input-wrapper"><small style={{ color: "#ee6723" }}>{err.UserName}</small><br />
                        <input type="text" className="inputLabel in" onChange={(e) => setFirstName(e.target.value)} placeholder="User Name" /></div>
                    <div className="col-md-2"></div>
                </div>
                {/* <input type="text" /> */}
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center input-wrapper"><small style={{ color: "#ee6723" }}>{err.Password}</small><br />
                        <input type="password" className="inputLabel in" placeholder="Password" onChange={(e) => (setPass(e.target.value), debounce(ValidatePassword))} /></div>
                    <div className="col-md-2"></div>
                </div>
                <br />
                <div className="container">
                    <div className="row ">
                        <div className="col-md-4"></div>
                        <div className="col-md-6  ">
                            <div className="row">
                                <div class="form-check">
                                    <small style={{ color: "#ee6723" }}>{err.inputCheck}</small><br />
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={() => tog()} />
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
                        <div className="col-md-6 text-center"><button className="btn btn-primary" disabled={false} onClick={() => onsubmit()}>Sign up for free</button></div>
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
