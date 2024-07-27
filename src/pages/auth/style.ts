import { Link } from "react-router-dom";
import styled from "styled-components";

export const AuthMain = styled.div``;

export const AuthMainContainer = styled.div`
   width: 90%;
   margin: 2rem auto;
`;

export const FormContainer = styled.form`
   width: 90%;
   margin: auto;
   input {
      margin-bottom: 1.2rem;
   }
   p {
      text-align: center;
      .Link {
         color: ${(props) => props.theme.text};
         text-decoration: none;
      }
   }
`;

export const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 1rem;
`;

export const ImageContainer = styled.div`
   margin: auto;
   img {
      width: 100%;
      max-height: 200px;
      /* border: 2px solid red; */
   }
`;

export const TextDiv = styled.div`
   /* border: 2px solid red; */
   width: fit-content;
   margin: auto;
   margin-bottom: 1.5rem;
   .create_account {
      font-size: 1.8rem;
      font-weight: 500;
      /* border: 2px solid red; */
      display: inline;
   }
`;

export const ForgetPasswordText = styled(Link)`
   text-decoration: none;
   color: ${(props) => props.theme.text};
`;

export const BackToLogin = styled(Link)`
   text-decoration: none;
   display: flex;
   justify-content: right;
   color: ${(props) => props.theme.text};
`;
