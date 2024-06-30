import { FormInputContainer, FormInputField, FormInputLabel, } from './form-input.styles'

function FormInput({ label, ...otherProps }) {
    return (
        <FormInputContainer>
            <FormInputField {...otherProps} />
            {label && <FormInputLabel shrink={`${otherProps.value.length > 0 ? `shrink` : ``}`} >{label}</FormInputLabel>}
        </FormInputContainer >
    )
}

export default FormInput