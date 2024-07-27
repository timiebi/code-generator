import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { FC, useState } from "react";

type Props = {
    password: string | number
    onChange: (event: any) => void;
    name: string
};
export const PasswordField:FC<Props> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <PasswordFieldContainer>
      <Label>{props.name}</Label>
      <Input onChange={props.onChange} type={showPassword ? "text" : "password"} value={props.password}/>
      <IconText>
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </div>
        {/* <span>{showPassword ? "Hide" : "Show"}</span> */}
      </IconText>
    </PasswordFieldContainer>
  );
};


const PasswordFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

// const LabelContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 0.5rem;
//   font-size: 0.9rem;
//   width: 95%;
// `;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  width: 95%;
`;

const IconText = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: right;
  position: absolute;
  right: 1rem;
  top: 40%;
`;

const Input = styled.input`
  height: 28px;
  padding: 0.4rem 0.4rem 0.4rem 0.8rem;
  /* width: 95%; */
  outline: none;
  border: 1px solid #1c323c;
  border-radius: ${(props) => props.theme.Input_radius};
`;
