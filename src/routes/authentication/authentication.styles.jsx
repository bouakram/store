import styled from "styled-components";

export const AuthContainer = styled.div`
margin: auto;
display: flex;
justify-content: space-evenly;
max-width: 100%;
width: 1200px;

@media (max-width: 768px) {
    margin: 0;
    padding: 0 24px;
    flex-direction: column; /* Stack items vertically on small screens */
    align-items: center; /* Center items */
  }
`