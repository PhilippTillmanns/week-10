import React from 'react'
import { SignOut } from '../components/HandleLoginAndLogout'
import './pages-css/home.css';

function Home() {
  return (
    <div class="firstSignIn-bg" >
        <div >Hello</div>
        
        <button onClick={() => SignOut()}>Sign Out</button>

        <div className=''></div>
    </div>
  )
}

export default Home