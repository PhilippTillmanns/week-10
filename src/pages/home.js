import React, { useEffect } from 'react'
import { SignOut } from '../components/HandleLoginAndLogout'
import './pages-css/home.css';
import { useState } from 'react';

function Home() {

 

      return (
        <div>
            <h1>Logged In!</h1>
            <button onClick={() => SignOut()}>Sign Out</button>
        </div>
      )
  return (
    <div class="firstSignIn-bg" >
        <div >Hello</div>
        
        <button onClick={() => SignOut()}>Sign Out</button>

        <div className=''></div>
    </div>
  )
}

export default Home