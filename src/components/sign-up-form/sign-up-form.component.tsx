import React, { ChangeEvent, FormEvent } from 'react'
// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.components'
import { SignupContainer, Title } from './sign-up-form.styles.jsx'
import { useDispatch } from 'react-redux'
import { singUPStart } from '../../store/user/user.action.js'
import { AuthError, AuthErrorCodes } from 'firebase/auth'


const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignUpForm() {
    const dispatch = useDispatch()
    const [formField, setFormField] = React.useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formField

    const resetFormFields = () => setFormField(defaultFormField)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormField({ ...formField, [name]: value })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert('password not match')
            return
        }
        try {
            dispatch(singUPStart(email, password, displayName))
            // const { user } = await createAuthUserWithEmailAndPassword(email, password)
            // await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (err) {
            if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                alert('can not create user already in use')
            }
        }
    }
    return (
        <SignupContainer>
            <Title>Crate a new account</Title>
            <form onSubmit={handleSubmit}>
                <FormInput label={"Display Name"} type='text' name='displayName' value={displayName} onChange={handleChange} required />
                <FormInput label={'Email'} type='email' name='email' value={email} onChange={handleChange} required />
                <FormInput label={"password"} type='password' name='password' value={password} onChange={handleChange} required />
                <FormInput label={'Confirm Password'} type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange} required />
                <Button type='submit'>sign up</Button>
            </form>
        </SignupContainer>
    )
}

export default SignUpForm