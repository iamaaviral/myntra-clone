import React, { useState } from 'react';
import './login.css'


const LoginForm = (props) => {

    // let [name, setname] = useState('')
    // let [email, setemail] = useState('')
    // let [pass, setPass] = React.useState('')
    // let [npass, setnpass] = React.useState('')
    // let [state, setState] = React.useState('')

    // let changeName = (e) => {
    //     setname(e.target.value)
    // }

    // let changeEmail = (e) => {
    //     setemail(e.target.value)
    // }

    // let changePass = (e) => {
    //     setPass(e.target.value)
    // }

    // let changenPass = (e) => {
    //     setnpass(e.target.value)
    // }

    // let changeState = (e) => {
    //     setState(e.target.value)
    // }


    let [value, setValue] = useState({
        name: '',
        email: '',
        pass: '',
        npass: '',
        state: ''
    })

    let [err, seterr] = useState(false)
    let [errtxt, seterrtxt] = React.useState('')

    let handleInputChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    React.useEffect(() => {
        return () => {
            // Anything in here is fired on component unmount.
            console.log('Component Unmounted')
        }
    }, [])

    let handleSubmit = (e) => {
        e.preventDefault();
        if (!value.name || !value.email || !value.pass || !value.npass) {
            seterr(true)
            seterrtxt('Some fields are missing')
        } else if (value.name.length < 2) {
            seterr(true)
            seterrtxt('Name is too small')
        } else if (value.pass !== value.npass) {
            seterr(true)
            seterrtxt('Passwords do not match')
        } else {
            seterr(false)
            localStorage.setItem('user', JSON.stringify(value))
            props.changeUserData(value)
        }
    }

    return (
        <form>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Name</span></label>
                <input className="input" name="name" required value={value.name} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Email</span></label>
                <input className="input" name="email" required type="email" value={value.email} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Password</span></label>
                <input className="input" name="pass" type="password" required value={value.pass} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Re eneter your password</span></label>
                <input className="input" name="npass" type="password" required value={value.npass} onChange={handleInputChange} />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">State</span></label>
                <select value={value.state} name="state" onChange={handleInputChange}>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Goa">Goa</option>
                    <option value="Punjab">Punjab</option>
                </select>
            </div>
            {err ? <div className="err">{errtxt}</div> : null}
            <button type="submit" value="Submit" className="button button_wide" onClick={handleSubmit}>Create your account</button>
        </form>
    )
}


const Login = (props) => {
    return (
        <div className="login-wrapper">
            <div className="login-form">
                <div className="banner-img">
                    <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2021/7/1/d07fff8e-c616-44ae-a01d-f0163c2e743c1625160833447-Banner-Hamburger-500--1-.jpg" />
                </div>
                {/* FORM ELEMENT STARTS HERE */}
                <div className="form-container">
                    <LoginForm changeUserData={props.changeUserData} />
                </div>
            </div>
        </div>
    )
}

export default Login;