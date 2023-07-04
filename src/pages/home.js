import React, { useEffect } from 'react'
import { SignOut } from '../components/HandleLoginAndLogout'
import './pages-css/home.css';
import { activeUser } from '../config/firebase';
import GetUserData from '../components/HandleUserInformation';
import { useState } from 'react';

function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      GetUserData().then(() => setIsLoading(false));
    });
 
    if(isLoading){
      return(
        <div>
        Is Loading...
      </div>
      )
      
    }else{
      return(
        <div class="firstSignIn-bg" >
          <h1>Logged In as: {activeUser.username}</h1>
          <h1>Personality: {activeUser.personality}</h1>
          <button onClick={() => SignOut()}>Sign Out</button>
        </div>
      )
    }
}

export default Home


/*

 
  */