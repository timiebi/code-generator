import { Select } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

type Props = {
   name?: string;
   label: string;
   value: string;
   onChange: (event: any) => void;
};

export const DefaultSelect: FC<Props> = (props) => {
   return (
      <>
         <TextFieldStyle>
            <Label>{props.label}</Label>
            <DefaultSelectInput name={props.name} onChange={props.onChange} value={props.value} />
         </TextFieldStyle>
      </>
   );
};

const TextFieldStyle = styled.div`
   display: flex;
   flex-direction: column;
`;

const Label = styled.label`
   margin-bottom: 0.5rem;
   font-size: 0.9rem;
`;

const DefaultSelectInput = styled(Select)`
   height: 28px;
   padding: 0.4rem 0.4rem 0.4rem 0.8rem;
   /* width: 90%; */
   outline: none;
   border: 1px solid #1c323c;
   border-radius: ${(props) => props.theme.Input_radius};
`;
