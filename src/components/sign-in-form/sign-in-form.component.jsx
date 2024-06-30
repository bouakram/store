import React from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.components'
import FormInput from '../form-input/form-input.component'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import { ButtonsContainer, SignInContainer } from './sin-in-form.styles'

const defaultFormField = {
    email: '',
    password: '',
}

function SignInForm() {
    const [formField, setFormField] = React.useState(defaultFormField)
    const { password, email } = formField

    const resetFormFields = () => setFormField(defaultFormField)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup()
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/invalid-credential') {
                alert('invalid credentials')
                return
            }
        }
    }
    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} type='email' name='email' value={email} onChange={handleChange} required />
                <FormInput label={"Password"} type='password' name='password' value={password} onChange={handleChange} required />
                <ButtonsContainer>
                    <Button type='submit'>sign in</Button>
                    <Button button_type={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm