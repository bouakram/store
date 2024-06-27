import './sign-up-form.styles.scss'
import React from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils'
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
            console.log("user")
            console.log(user)
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields()
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('can not create user already in use')
            }
            console.log(err)
        }
    }
    return (
        <div className='sign-up-container'>
            <h2>sign-up-form</h2>
            <form>
                <FormInput label={"Display Name"} inputOptions={{ type: 'text', name: 'displayName', value: displayName, onChange: handleChange, required: true }} />
                <FormInput label={'Email'} inputOptions={{ type: 'email', name: 'email', value: email, onChange: handleChange, required: true }} />
                <FormInput label={"password"} inputOptions={{ type: 'password', name: 'password', value: password, onChange: handleChange, handleChange, required: true }} />
                <FormInput label={'Confirm Password'} inputOptions={{ type: 'password', name: 'confirmPassword', value: confirmPassword, onChange: handleChange, required: true }} />
                <Button type='submit' onSubmit={handleSubmit}>sign up</Button>
            </form>
        </div>
    )
}

export default SignUpForm