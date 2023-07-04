import React from 'react'
import image from "../images/pexels-alex-conchillos-3745234.jpg"

function CreateUser() {
  return (
    <div className=' h-screen bg-cover text-white flex justify-center items-center' style={{ backgroundImage:`url(${image})`}} >
        <div className=' rounded-xl p-7 pb-14 flex justify-center items-center bg-gradient-to-br from-clrOrange to-clrPink'>
            <div className='relative'>
                <div className='font-bold text-2xl my-1'>What should we call you?</div>
                <div className=' w-100  py-2 text-metal rounded-md bg-white'><span className='ml-2 text-1xl'> username here...</span></div>
                <div className='font-bold  mt-3 text-2xl'>I am a...</div>
                <div className=' w-100 py-2 my-1 text-metal rounded-md bg-white'> <span className='ml-2 text-1xl'>select type</span></div>
                <div className='absolute right-0 bottom-[-40px] font-semibold'>Submit</div>
            </div>
            
        </div>
        <div></div>
        

    </div>
  )
}

export default CreateUser