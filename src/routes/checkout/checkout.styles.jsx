import styled from "styled-components";

export const CheckoutContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media (max-width: 1024px) { /* Tablet */
        width: 70%;
    }

    @media (max-width: 768px) { /* Mobile */
        width: 90%;
        margin: 20px auto 0;
    }
`;

export const CheckoutHeader = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;

    @media (max-width: 768px) { /* Mobile */
        padding: 5px 0;
    }
`;

export const HeaderBlock = styled.div`
    text-transform: capitalize;
    width: 23%;
    
    &:last-child {
        width: 8%;
    }
    
    @media (max-width: 768px) { /* Mobile */
        width: 22%;
        font-size: 14px;
        &:last-child {
            width: 12%;
        }
    }
`;

export const Total = styled.span`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;

    @media (max-width: 768px) { /* Mobile */
        font-size: 28px;
        margin-top: 20px;
    }
`;
