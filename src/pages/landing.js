import React from 'react'
import { SignInWithGoogle } from '../components/SignInWithGoogle'

function Landing() {
  const imageURL = "https://images.pexels.com/photos/4203100/pexels-photo-4203100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  
  return (
    <div className="text-center bg-cover bg-center h-screen flex items-center" style={{ backgroundImage:`url(${image})` }} >
      <div className="text-left fixed left-40 w-7/12">
        <div className="text-6xl mb-4 text-clrDarkBlue">What is it that you want to accomplish this week?</div>
        <div className="text-clrLightBlue mb-9 text-2xl">Create something of precise definition. Something that will guide you through your week like nothing else.</div>

        <button className="rounded-full text-3xl bg-clrMidBlue text-clrLightPurple px-8 py-3" onClick={() => SignInWithGoogle()}> Start Now</button>

        <button className=" ease-in-out duration-300 rounded-full text-3xl bg-clrMidBlue text-clrLightPurple px-8 py-3 hover:bg-clrLightPurple hover:text-clrDarkBlue" onClick={() => console.log("Hello world")}> Start Now</button>

        <div></div>
      </div>
    </div>
  )
}

export default Landing