import React from 'react';
import './login.css'


const LoginForm = () => {
    // let [name, setName] = React.useState('')
    // let [email, setEmail] = React.useState('')
    // let [pass, setPass] = React.useState('')
    // let [npass, setnpass] = React.useState('')
    // let [state, setState] = React.useState('')

    let [value, setvalue] = React.useState({
        name: '',
        email: '',
        pass: '',
        npass: '',
        state: ''
    })

    let [err, seterr] = React.useState(false)
    let [errtxt, seterrtxt] = React.useState('')


    // let changeName = (e) => {
    //     setName(e.target.value)
    // }

    // let changeEmail = (e) => {
    //     setEmail(e.target.value)
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

    let handleInputChange = (e) => {
        seterr(false)
        console.log(e.target.name)
        setvalue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (!value.name || !value.email || !value.pass || !value.npass) {
            seterrtxt('Some fields are missing')
            seterr(true)
        } else if (value.name.length < 3) {
            seterrtxt('Name length is not enough')
            seterr(true)
        } else if (value.pass !== value.npass) {
            seterrtxt('Passowrds value do not matc')
            seterr(true)
        } else {
            console.log('form submitted')
        }
    }

    return (
        <form>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Name</span></label>
                <input className="input" required onChange={handleInputChange} value={value.name} name="name" />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Email</span></label>
                <input className="input" required type="email" onChange={handleInputChange} value={value.email} name="email" />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Password</span></label>
                <input className="input" type="password" required onChange={handleInputChange} value={value.pass} name="pass" />
            </div>
            <div className="input_group">
                <label className="input_label red_star"><span className="label_text">Re eneter your password</span></label>
                <input className="input" type="password" required onChange={handleInputChange} value={value.npass} name="npass" />
            </div>
            <div className="input_group">
                <label className="input_label"><span className="label_text">State</span></label>
                <select name="state" value={value.state} onChange={handleInputChange}>
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