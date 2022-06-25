import React, { useState } from 'react'
import './Login.css'
import bgImage from './loginbg.png';
import logo from './logo.png';
import {Link , useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
function Login() {

    const navigate= useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");


const login = async () => {
    try {
    
        const user =  await signInWithEmailAndPassword(auth , loginEmail ,  loginPassword);
        
        sessionStorage.setItem("uid", user.user.uid);
        let uid = sessionStorage.getItem('uid')
        if (!uid) navigate('/login')

        navigate('/' );
        
    } catch (error) {
        console.log(error.message);
    }
}


return (
    <div className="login"style={{  
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        paddingBottom: '113px'
    }}>
    <center>
    
        <div className="login-form">


            <img src={logo} alt="" />
            
            <h6>Login Now</h6>

            <input type="text" placeholder="Enter Your Email" onChange={(e) => {setLoginEmail(e.target.value)}} />
            <input type="password" placeholder="*********" onChange={(e) => {setLoginPassword(e.target.value)}} />
            
            <button className="btn" onClick={login}>Login</button>
            <br />
            <p>Don't Have An Account? <Link className="Link" to="/register">Register</Link></p>

        </div>
    </center>

    </div>
)
}

export default Login