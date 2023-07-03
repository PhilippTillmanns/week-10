import React from 'react'
import { SignInWithGoogle } from '../components/SignInWithGoogle'

function Landing() {

  
  return (
    <div className="text-center bg-clrEggshell h-screen flex items-center" >
      <div className="text-left fixed left-40 w-7/12">
        <div className="text-6xl mb-4 text-clrDarkBlue">What is it that you want to accomplish this week?</div>
        <div className="text-clrLightBlue mb-9 text-2xl">Create something of precise definition. Something that will guide you through your week like nothing else.</div>
        <button className="rounded-full text-3xl bg-clrMidBlue text-clrLightPurple px-8 py-3" onClick={() => SignInWithGoogle()}> Start Now</button>
        <div></div>
      </div>
    </div>
  )
}

export default Landing