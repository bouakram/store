import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase.utils'

function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        createUserDocumentFromAuth(response.user)
    }
    return (
        <div>
            SignIn
            <button onClick={logGoogleUser}>
                sign-in with google account
            </button>
        </div>
    )
}

export default SignIn