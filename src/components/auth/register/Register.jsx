import {React , useState} from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../Firebase/firebase';
import bgImage from './loginbg.png';
import logo from './logo.png';
import {Link} from 'react-router-dom';
import './Register.css';

function Register() {

    const [registerEmail , setRegisterEmail] = useState("");
    const [registerPassword , setRegisterPassword] = useState("");
    const [registerName , setRegisterName] = useState("");
    const [registerContact , setRegisterContact] = useState("");

    const register = async () => {
        try {
            const user =  await createUserWithEmailAndPassword(auth , registerEmail ,  registerPassword)
            console.log(user);
            // localStorage.setItem("User" , auth.user.uid);
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
            paddingBottom: '10px'
        }}>
        <center>
        
            <div className="login-form">
    
    
                <img src={logo} alt="" />
                
                <h6>Register Now</h6>
    
                <input type="text" placeholder="Enter Your Name" onChange={(event) =>{setRegisterName(event.target.value)}} />
                <input type="email" placeholder="Enter Your Email" onChange={(event) =>{setRegisterEmail(event.target.value)}} />
                <input type="password" placeholder="*********" onChange={(event) =>{setRegisterPassword(event.target.value)}} />
                <input type="number" placeholder="+92 1234567890" onChange={(event) =>{setRegisterContact(event.target.value)}} />
                
                <button className="btn" onClick={register}>Register</button>
                <br />
                <p>Already Have An Account? <Link className="Link" to="/login">Login</Link></p>
    
            </div>
        </center>
    
        </div>
    )
}

export default Register