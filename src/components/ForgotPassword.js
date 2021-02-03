import React from 'react'
import './Login.css'

export default function ForgotPassword() {
    return (
        <div>
            <div className="row header">
                <div className="container">
                    <div className="text-center">
                        <h4 className="head">Forgot your password?</h4>
                        <h6 style={{ color: "#ee6723" }}>We'll send you an email with instructions.</h6>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 text-center input-wrapper"><input type="text" className="inputLabel in" placeholder="Username/Email" /></div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6 text-center"><button className="btn btn-primary " style={{ backgroundColor: "#fdbd39", border: "none" }}>Reset Password</button></div>
                <div className="col-md-3"></div>
            </div>

        </div>
    )
}
