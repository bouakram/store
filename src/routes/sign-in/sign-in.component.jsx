import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../../utils/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'
import Button from '../../components/button/button.components'

function SignIn() {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        createUserDocumentFromAuth(response.user)
    }
    return (
        <div>
            SignIn
            <Button button_type={'google'} onClick={logGoogleUser}>
                sign in with google
            </Button>
            <SignUpForm />
        </div>
    )
}

export default SignIn