import { SignOut } from '../components/HandleLoginAndLogout'
import GetUserData from '../components/HandleUserInformation';
import React, { useEffect, useState } from 'react'
import { activeUser } from '../config/firebase';
import './pages-css/home.css';
import LoadingScreen from './loadingScreen';
import CreateUser from './CreateUser';

function Home() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      GetUserData().then(() => setIsLoading(false));
    });
 
    if(isLoading){
      return(
        <div>
          <LoadingScreen/>
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