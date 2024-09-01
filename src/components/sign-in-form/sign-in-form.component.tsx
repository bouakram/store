import React, { ChangeEvent, FormEvent } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.components'
import FormInput from '../form-input/form-input.component'
// import { signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'
import { ButtonsContainer, SignInContainer } from './sin-in-form.styles'
import { useDispatch } from 'react-redux'
import { googleSignInStart } from '../../store/user/user.action'
import { onEmailSignInStart } from '../../store/user/user.saga'
import { AuthError, AuthErrorCodes } from 'firebase/auth'

const defaultFormField = {
    email: '',
    password: '',
}

function SignInForm() {
    const [formField, setFormField] = React.useState(defaultFormField)
    const { password, email } = formField
    const dispatch = useDispatch()

    const resetFormFields = () => setFormField(defaultFormField)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }

    const signInWithGoogle = async () => {
        // await signInWithGooglePopup()
        dispatch(googleSignInStart(email, password))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            // await signInAuthUserWithEmailAndPassword(email, password)
            dispatch(onEmailSignInStart() as any)
            resetFormFields()
        } catch (err) {
            if ((err as AuthError).code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
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