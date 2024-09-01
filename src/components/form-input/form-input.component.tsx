import { FC, InputHTMLAttributes } from 'react'
import { FormInputContainer, FormInputField, FormInputLabel, } from './form-input.styles'

export type FormInputProps = {
    label: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
    return (
        <FormInputContainer>
            <FormInputField {...otherProps} />
            {label && <FormInputLabel shrink={
                Boolean(
                    `${otherProps.value &&
                        typeof otherProps.value === 'string' &&
                        otherProps.value.length > 0 ? `shrink` : ``
                    }`
                )
            }
            >
                {label}
            </FormInputLabel>
            }
        </FormInputContainer >
    )
}

export default FormInput