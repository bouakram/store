import './sign-up-form.styles.scss'
import React from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.components'


const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
    const [formField, setFormField] = React.useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField

    const resetFormFields = () => setFormField(defaultFormField)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('password not match')
            return
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('can not create user already in use')
            }
        }
    }
    return (
        <div className='signup-container'>
            <h2>Crate a new account</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Display Name"} type='text' name='displayName' value={displayName} onChange={handleChange} required />
                <FormInput label={'Email'} type='email' name='email' value={email} onChange={handleChange} required />
                <FormInput label={"password"} type='password' name='password' value={password} onChange={handleChange} required />
                <FormInput label={'Confirm Password'} type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} required />
                <Button type='submit'>sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm