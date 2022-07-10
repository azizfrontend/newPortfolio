import React, { useState } from 'react'
import logo from '../image/logo.png'
import active from '../image/active.png';
import { useLocation, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRef } from 'react';
const Login = () => {
  const [showPassport, setShowPassport] = useState(false);
  const [inputEmail,setInputEmail]=useState('');
  const [inputPassword,setInputPassword]=useState('');
  const btn=useRef(null);

  let navigate = useNavigate();
  const bor = (e) => {
    e.preventDefault();
    if(inputEmail===''&& inputPassword==='')
    btn.current.disabled = true;
    else {
      btn.current.disabled = false;
      navigate('/home');
    }
  }
console.log(inputEmail);
console.log(inputPassword);

  return (
    <div className='login-wrapper'>
      <div className="login-box">
        <img src={logo} alt="logo" />
        <h1>Dashboard Kit</h1>
        <h3>Enter your email and password below</h3>

        <form >
          <label for="email">Email</label><br /><img className='active1' />
          <input required onChange={(event)=>setInputEmail(event.target.value)} value={inputEmail} type="text" id="email" name="email" placeholder='Email address' /> <br />
          <label for="pass">Password</label> <span className='forgot'>Forgot password?</span><br />< span
            onClick={() => setShowPassport(!showPassport)} className='showIcon'>{showPassport?<VisibilityIcon className='show' />:<VisibilityOffIcon className='show'/>}</span>
          <input required onChange={(event)=>setInputPassword(event.target.value)} value={inputPassword} type={showPassport?"text":'password'} id="pass" name="pass" placeholder='Password' /><br />
          <button ref={btn} onClick={bor}>Log In</button>
        </form>
        
        <h3 className='login-sign'>Don't have an account? <span>Sign up</span></h3>
      </div>
    </div>
  )
}

export default Login
