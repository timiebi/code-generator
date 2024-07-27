import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
}
*{
  font-family: "Poppins", sans-serif;
}
input{
  font-size: 16px;
}
`;
