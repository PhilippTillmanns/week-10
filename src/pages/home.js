import { SignOut } from '../components/HandleLoginAndLogout'
import GetUserData from '../components/HandleUserInformation';
import React, { useEffect, useState } from 'react'
import { activeUser } from '../config/firebase';
import './pages-css/home.css';
import LoadingScreen from './loadingScreen';
import CreateUser from './CreateUser';


function Home() {

    const [isLoading, setIsLoading] = useState(true);
    const [isCreatingUser, setIsCreatingUser] = useState(false);

    const changeIsCreatingUser = (newState) => {
      setIsCreatingUser(newState);
    }

    useEffect(() => {
      //Runs at the start of the loading of the page
      GetUserData().then(() => setIsLoading(false)).then(() => { 
        //Runs when the logged-in user does not yet have a account with us :o
        if(activeUser.username == null){
          setIsCreatingUser(true); //This basically just tells the site that the user needs to create a account
        }
      });
    }, []);



    if(isLoading){
      return(
      //Loading screen :)
        <div>
          <LoadingScreen/>
      </div>
      )
    }else{
      //This runs when the user does not yet have a account but site has loaded
      if(isCreatingUser){
        return(
          <div>
            <CreateUser setIsCreatingUser={changeIsCreatingUser}/>
          </div>
          )
      }else{
      //This runs when the user already has a account and we have their information
      //THIS IS THE MAIN PAGE!!!
        return(
          <div className='h-screen' >
            <h1>Logged In as: {activeUser.username}</h1>
            <h1>Personality: {activeUser.personality}</h1>
            <button onClick={() => SignOut()}>Sign Out</button>
          </div>
        )
      }
    }
}

export default Home

/*
actually in home tun bitte:


 
  */