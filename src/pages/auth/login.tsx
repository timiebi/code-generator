import { useState } from "react";
import { CREATE_IMAGE } from "../../assets/images";
import { useGetCreateUser } from "../../hooks/useCreateUser";
import { paths } from "../../route/frontend";
import { AuthButton } from "../../utils/authButton";
import { PasswordField } from "../../utils/passwordInput";
import { TextField } from "../../utils/textField";
import {
   AuthMain,
   AuthMainContainer,
   FormContainer,
   ButtonContainer,
   ImageContainer,
   TextDiv,
   ForgetPasswordText,
} from "./style";
import { Link } from "react-router-dom";

export const Login = () => {
   const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

   return (
      <AuthMain>
         <AuthMainContainer>
            <FormContainer>
               <ImageContainer>
                  <img src={CREATE_IMAGE} alt="" />
               </ImageContainer>
               <TextDiv>
                  <h2 className="create_account">Login</h2>
               </TextDiv>
               <TextField
                  name="Email"
                  label="Email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  type="email"
               />
               <PasswordField
                  name="Password"
                  password={password}
                  onChange={(e: any) => setPassword(e.target.value)}
               />
               <ForgetPasswordText to={paths.forgot_password}>Forgot Password</ForgetPasswordText>
               <ButtonContainer>
                  <AuthButton name="Login" />
               </ButtonContainer>
               <p>
                  Don't have an account? <Link className="Link" to={paths.create_account}>Sign In</Link>
               </p>
            </FormContainer>
         </AuthMainContainer>
      </AuthMain>
   );
};
