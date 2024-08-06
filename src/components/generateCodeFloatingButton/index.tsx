import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { FC } from "react";

type Props = {
   onClick: (event: React.KeyboardEvent | React.MouseEvent) => void;
}
export const GenerateCodeNavigationButton:FC<Props> = (props) => {

   return (
      <FloatingButtonStyle onClick={props.onClick}>
         <FloatingButtonMain>
            <AddIcon />
         </FloatingButtonMain>
      </FloatingButtonStyle>
   );
};

const FloatingButtonStyle = styled.div`
   position: fixed;
   bottom: 20px;
   right: 20px;
   cursor: pointer;
`;

const FloatingButtonMain = styled.div`
   background-color: ${(props) => props.theme.text};
   color: white;
   border: none;
   width: 50px;
   height: 50px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
`;
