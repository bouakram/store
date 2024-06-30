import styled from "styled-components";

export const CategoryContainer = styled.div`
margin: 25px;
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 15px;
row-gap: 25px;
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
