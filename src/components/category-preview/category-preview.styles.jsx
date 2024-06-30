import styled from 'styled-components';

export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 885px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 615px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

export const CategoryPreviewContainer = styled.div`
    margin: 25px;
    display: flex;
    flex-direction: column;

    h2 {
        margin-bottom: 15px;
    }

    .title {
        font-size: 28px;
        cursor: pointer;
    }
`
