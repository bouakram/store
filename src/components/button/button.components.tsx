import React, { ButtonHTMLAttributes, FC } from 'react';
import { BaseButton, ButtonSpinner, GoogleButton, InvertedButton } from './button.styles.jsx'

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted',
}

export type ButtonProps = {
    children: React.ReactNode;
    button_type?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => (
    {
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]
)

const Button: FC<ButtonProps> = ({ children, button_type, isLoading, ...otherProps }) => {
    const CustomButton = getButton(button_type)
    return (
        <CustomButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButton>
    )
}

export default Button