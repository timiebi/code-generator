import styled from "styled-components";

export const CodeGenratorDrawerMainStyle = styled.div`
   /* overflow: auto; */

   form {
      padding: 1rem;
      .select_div, .textarea_div {
         display: flex;
         flex-direction: column;
         margin-bottom: 1.2rem;
         select{
            /* height: 28px; */
            padding: 0.7rem 0.4rem 0.7rem 0.8rem;
            /* width: 90%; */
            outline: none;
            /* border: 1px solid #1c323c; */
            border-radius: ${(props) => props.theme.Input_radius};
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-color: rgb(244, 244, 244);
            border: none;
         }
         textarea{
            outline: none;
            border: none;
            background-color: rgb(244, 244, 244);
            /* border: 1px solid #1c323c; */
            border-radius: ${(props) => props.theme.Input_radius};
         }
      }
      #generate_code_name{
        background-color: rgb(244, 244, 244);
        border: none !important;
        margin-bottom: 1.2rem;
      }
   }
`;

export const GeneratorHeader = styled.div`
   background-color: ${(props) => props.theme.text};
   color: ${(props) => props.theme.background};
   /* position: fixed; */
   /* width: 100%; */
   padding: 0.7rem;
   /* top: 0; */
`;
