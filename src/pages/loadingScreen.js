import React from 'react'
import LoadingSpinner from '../components/loadingSpinner'

function LoadingScreen() {
  return (
    <div className='flex items-center justify-center bg-clrMidBlue h-screen w-screen'>
        <LoadingSpinner/>
    </div>
  )
}

export default LoadingScreen