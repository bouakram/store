import React from 'react'
import Button from '../button/button.components'
import FormInput from '../form-input/form-input.component'
import './sin-in-form.styles.scss'
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase.utils'

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
        const { user } = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password)
            console.log(response)
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/invalid-credential') {
                alert('invalid credentials')
                return
            }
        }
    }
    return (
        <div className='sign-in-container'>
            <h2>Already have an account</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} type='email' name='email' value={email} onChange={handleChange} required />
                <FormInput label={"Password"} type='password' name='password' value={password} onChange={handleChange} required />
                <div className='buttons-container'>
                    <Button type='submit'>sign in</Button>
                    <Button button_type={'google'} onClick={signInWithGoogle}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm