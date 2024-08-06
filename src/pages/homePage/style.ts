import { styled } from "styled-components";

export const HomeContainer = styled.div`
   width: 90%;
margin: 5rem auto;
`;

export const HomeHeaderStyle = styled.div`
margin-bottom: 1rem;
   p {
      font-size: 1.4rem;
      font-weight: 500;
      span {
         font-size: 0.92rem;
         font-weight: 400;
      }
   }
`;


export const BoxContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 1rem;
margin-top: 3rem;
`

export const BoxContent = styled.div``