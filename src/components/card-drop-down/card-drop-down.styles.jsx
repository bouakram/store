import styled from 'styled-components'
import { BaseButton, GoogleButton, InvertedButton } from '../button/button.styles'

export const CartDropdownContainer = styled.div`
position: absolute;
width: 290px;
height: 340px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 60px;
right: 25px;
z-index: 99;

${BaseButton},
${GoogleButton},
${InvertedButton}{
    margin-top: auto;
}
`

export const EmptyMessage = styled.span`
font-size: 18px;
margin: 50px auto;
`

export const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: scroll;
`