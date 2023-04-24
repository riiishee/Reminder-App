import React from 'react';
import './loginpage.css'
import Button from '@mui/material/Button';
import { app } from '../firebase/firebase';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

const auth = getAuth(app);
const googleProvider  = new GoogleAuthProvider();

function LoginPage() {

  const loginwithGoogle = () => {
signInWithPopup(auth, googleProvider)
  }
  return (
    <>
  
  <div className='container'>

     <h1 className='text'>Reminder App</h1>
     <div>

     <Button onClick={loginwithGoogle}  
     className="button" 
     variant="contained">Log In</Button>
     </div>

  </div>
  
    </>
  )
}

export default LoginPage;
