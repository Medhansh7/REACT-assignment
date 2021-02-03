import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";


export default function Login() {

    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    return (
        <div>
            <div className="row header">
                <div className="container">
                    <div className="text-center">
                        <div className="head">Great to see you again!</div>
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
                    <div className="col-md-8 text-center input-wrapper"><input type="text" className="inputLabel in" placeholder="Username/Email" /></div>
                    <div className="col-md-2"></div>
                </div>
                {/* <input type="text" /> */}
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center input-wrapper"><input type="password" className="inputLabel in" placeholder="Password" /></div>
                    <div className="col-md-2"></div>
                </div>
                <br />

                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text-center"><button className="btn btn-primary">Login</button></div>
                        <div className="col-md-3"></div>

                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 text-center"><button className="btn btn-primary" style={{ backgroundColor: "white", color: "#419bf9", border: "none" }}>Login with SSO</button></div>
                        <div className="col-md-3"></div>

                    </div>
                </div>
                <br /><br />
                <div className="container" style={{ width: "100%", maxWidth: "400px" }}>
                    <div className="row inputset ">
                        <Link to='/forgot-password' style={{ color: "#419bf9" }}>Forgot Password </Link>
                    </div>
                    <div className="row inputset ">
                        Not account yet? <Link to='/' style={{ color: "#419bf9" }}> Signup </Link>
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
