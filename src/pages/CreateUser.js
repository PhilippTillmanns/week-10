import React, { useEffect, useState } from 'react'
import image from "../images/pexels-alex-conchillos-3745234.jpg"
import './pages-css/home.css'
import GetUserData, { CreateUserInformation } from '../components/HandleUserInformation';
import { activeUser } from '../config/firebase';
import { ReactComponent as IconArrowBackCircle } from '../components/icons';
import { ReactComponent as ArrowLeft } from '../icons/IonArrowBackCircle.svg';


function CreateUser({setIsCreatingUser}) {

  function GetUserInputs () {
    const createdUsername = document.getElementById("inputElement").value;
    const createdPersonalityType = document.getElementById("typeElement").value;
    let canBeCreated = true;


    if(createdUsername.length <= 0 || createdUsername.length > 10){
      alert("Your username is either too long or too short!")
      canBeCreated = false;
    }
    if(createdUsername == null || createdPersonalityType == null){
      canBeCreated = false;
    }

    if(canBeCreated){
      CreateUserInformation({username: createdUsername, personality: createdPersonalityType}).then(() => setIsCreatingUser(false));
    }
  }


  return (
    <div className=' h-screen bg-cover text-white flex justify-center items-center' style={{ backgroundImage:`url(${image})`}} >
        <div className=' rounded-xl p-7 pb-14 flex justify-center items-center bg-gradient-to-br from-clrOrange to-clrPink'>
            <div className='relative'>
                <div className='font-bold text-2xl my-1'>What should we call you?</div>
                <input id='inputElement' className='font-[font-weight: 500] pl-4 w-full leading-10 rounded-[0.5rem] ] text-clrMidBlue'></input>
                <div className='font-bold  mt-3 text-2xl'>What type fits best?</div>
                <select id="typeElement" className="selector">select a type
                  <option value={"helper"}>Helper</option>
                  <option>Challenger</option>
                  <option>Peacemaker</option>
                  <option>Investigator</option>
                  <option>Individualist</option>
                  <option>Reformer</option>
                </select>
                
                <button className=' hover:underline absolute right-0 bottom-[-40px] font-semibold' onClick={() => GetUserInputs()}>Submit</button>
                
                
            </div>
            
            
        </div>
        <button>
          <svg className=' absolute bottom-4 left-2/4' xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 512 512"><path fill="currentColor" d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48S48 141.13 48 256Zm212.65-91.36a16 16 0 0 1 .09 22.63L208.42 240H342a16 16 0 0 1 0 32H208.42l52.32 52.73A16 16 0 1 1 238 347.27l-79.39-80a16 16 0 0 1 0-22.54l79.39-80a16 16 0 0 1 22.65-.09Z"/></svg>
        
        </button>
       

    </div>
  )
}

export default CreateUser

/*
- placeholder for select person type:
<div className=' w-100 py-2 my-1 text-metal rounded-md bg-white'> <span className='ml-2 text-1xl'>select type</span></div>


- placeholder for username textfield:
<div className=' w-100  py-2 text-metal rounded-md bg-white'><span className='ml-2 text-1xl'> username here...</span></div>
*/