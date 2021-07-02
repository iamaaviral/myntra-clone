import React from 'react';
import './login.css'


const LoginForm = () => {
    return (
        <form>
            <div className="input_group">
                <label className="input_label"><span className="label_text">Name</span></label>
                <input className="input" />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">Email</span></label>
                <input className="input" />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">Password</span></label>
                <input className="input" />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">Re eneter your password</span></label>
                <input className="input" />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">State</span></label>
                <select>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Goa">Goa</option>
                    <option value="Punjab">Punjab</option>
                </select>
            </div>
            <button type="submit" value="Submit" className="button button_wide" >Create your account</button>
        </form>
    )
}


const Login = () => {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <div className="banner-img">
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg" />
                </div>
                {/* FORM ELEMENT STARTS HERE */}
                <div className="form-container">
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Login;