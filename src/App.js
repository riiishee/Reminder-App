import './App.css';
import { app } from './firebase/firebase';
import LoginPage from './logpage/LoginPage';
import { useState, useEffect } from 'react';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import Reminder from './Reminder/Reminder';




const auth = getAuth(app)

function App() {
    const [user, setUser] = useState(null);

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user){
setUser(user);
    }else {
console.log("you are logged out");
setUser(null)
    }
  })
}, []);  

if (user === null){
  return (
    <LoginPage />
  )
}

 return (
<div>
  <h1>
  <Reminder />
</h1>
  <button  className='logout'  onClick={()=> signOut(auth)}>Logout</button>
</div>
   
   
  );
}

export default App;
