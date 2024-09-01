import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;
`

export const ImageContainer = styled.div`
width: 23%;
padding-right: 15px;
img {
    width: 100%;
    height: 100%;
}
`

export const Quantity = styled.div`
display: flex;
width: 23%;
`

export const Arrow = styled.div`
cursor: pointer;
margin: 0 5px;
`

export const Price = styled.span`
width: 23%;
`

export const Name = styled.span`
width: 23%;
`

export const RemoveButton = styled.div`
cursor: pointer;
`