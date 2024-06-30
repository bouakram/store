import { BaseButton, GoogleButton, InvertedButton } from './button.styles.jsx'

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]
)

function Button({ children, button_type, ...otherProps }) {
    const CustomButton = getButton(button_type)
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default Button