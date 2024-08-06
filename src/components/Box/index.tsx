import styled from "styled-components";

import { FC } from "react";

type Props = {
   name: string;
   icon?: any;
};
export const Box: FC<Props> = (props) => {
   return (
      <BoxMainStyle>
         <BoxContainerStyle>
            <BoxContent>
               <props.icon />
               <p>{props.name}</p>
            </BoxContent>
         </BoxContainerStyle>
      </BoxMainStyle>
   );
};

const BoxMainStyle = styled.div``;

const BoxContainerStyle = styled.div`
   background-color: #f2f2f2;
   padding: 1rem;
   border-radius: ${(props) => props.theme.Input_radius};
   display: flex;
   align-items: center;
   justify-content: center;
`;

const BoxContent = styled.div`
   svg {
      margin: auto !important;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;
