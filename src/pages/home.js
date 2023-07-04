import React from 'react'
import { SignOut } from '../components/HandleLoginAndLogout'

function Home() {
      return (
        <div>
            <h1>Logged In!</h1>
            <button onClick={() => SignOut()}>Sign Out</button>
        </div>
      )
}

export default Home