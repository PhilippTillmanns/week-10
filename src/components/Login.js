import React from 'react'

import { SignInWithGoogle } from './SignInWithGoogle'

function Login() {
  return (
    <div>
        <button onClick={() => SignInWithGoogle()}>Click Me</button>
    </div>
  )
}

export default Login