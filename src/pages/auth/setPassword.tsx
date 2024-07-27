import { useState } from "react";
import { CREATE_IMAGE } from "../../assets/images";
import { AuthButton } from "../../utils/authButton";
import { PasswordField } from "../../utils/passwordInput";
import {
   AuthMain,
   AuthMainContainer,
   FormContainer,
   ButtonContainer,
   ImageContainer,
   TextDiv,
} from "./style";

export const SetPassword = () => {
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");

   return (
      <AuthMain>
         <AuthMainContainer>
            <FormContainer>
               <ImageContainer>
                  <img src={CREATE_IMAGE} alt="" />
               </ImageContainer>
               <TextDiv>
                  <h2 className="create_account">Set Password</h2>
               </TextDiv>
               <PasswordField
                  name="Password"
                  password={password}
                  onChange={(e: any) => setPassword(e.target.value)}
               />
               <PasswordField
                  name="Confirm Password"
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
                  password={confirmPassword}
               />
               <ButtonContainer>
                  <AuthButton name="Submit" />
               </ButtonContainer>
            </FormContainer>
         </AuthMainContainer>
      </AuthMain>
   );
};
