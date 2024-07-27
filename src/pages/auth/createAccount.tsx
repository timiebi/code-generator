import { CREATE_IMAGE } from "../../assets/images";
import { useGetCreateUser } from "../../hooks/useCreateUser";
import { AuthButton } from "../../utils/authButton";
import { PasswordField } from "../../utils/passwordInput";
import { TextField } from "../../utils/textField";
import { Link } from "react-router-dom";
import {
   AuthMain,
   AuthMainContainer,
   FormContainer,
   ButtonContainer,
   ImageContainer,
   TextDiv,
} from "./style";
import { paths } from "../../route/frontend";

export const CreateAccount = () => {
   const {
      surename,
      setSurename,
      othernames,
      setOthernames,
      email,
      setEmail,
      phone,
      setPhone,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
   } = useGetCreateUser();

   return (
      <AuthMain>
         <AuthMainContainer>
            <FormContainer>
               <ImageContainer>
                  <img src={CREATE_IMAGE} alt="" />
               </ImageContainer>
               <TextDiv>
                  <h2 className="create_account">create account</h2>
               </TextDiv>
               <TextField
                  name="Surename"
                  label="Surename"
                  value={surename}
                  onChange={(e: any) => setSurename(e.target.value)}
                  type="text"
               />
               <TextField
                  name="Other names"
                  label="Other names"
                  value={othernames}
                  onChange={(e: any) => setOthernames(e.target.value)}
                  type="text"
               />
               <TextField
                  name="Email"
                  label="Email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  type="email"
               />
               <TextField
                  name="Phone number"
                  label="Phone number"
                  value={phone}
                  onChange={(e: any) => setPhone(e.target.value)}
                  type="tel"
               />
               <PasswordField
                  name="Password"
                  password={password}
                  onChange={(e: any) => setPassword(e.target.value)}
               />
               <PasswordField
                  name="Confirm Password"
                  password={confirmPassword}
                  onChange={(e: any) => setConfirmPassword(e.target.value)}
               />
               <ButtonContainer>
                  <AuthButton name="Create Account" />
               </ButtonContainer>
               <p>
                  Already have an account? <Link className="Link" to={paths.login}>Login</Link>
               </p>
            </FormContainer>
         </AuthMainContainer>
      </AuthMain>
   );
};
