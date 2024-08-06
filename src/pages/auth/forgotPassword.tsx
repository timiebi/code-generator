import { CREATE_IMAGE } from "../../assets/images";
import { useGetCreateUser } from "../../hooks/useCreateUser";
import { paths } from "../../route/frontend";
import { AuthButton } from "../../utils/authButton";
// import { PasswordField } from "../../utils/passwordInput";
import { TextField } from "../../utils/textField";
import {
  AuthMain,
  AuthMainContainer,
  FormContainer,
  ButtonContainer,
  ImageContainer,
  TextDiv,
  BackToLogin
} from "./style";

export const ForgotPassword = () => {
  const {
    // surename,
    // setSurename,
    // othernames,
    // setOthernames,
    email,
    setEmail,
    // phone,
    // setPhone,
  } = useGetCreateUser();

  return (
    <AuthMain>
      <AuthMainContainer>
        <FormContainer>
          <ImageContainer>
            <img src={CREATE_IMAGE} alt="" />
          </ImageContainer>
          <TextDiv>
            <h2 className="create_account">Forgot Password</h2>
          </TextDiv>
          <TextField
            name="Email"
            label="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            type="email"
          />
          <BackToLogin to={paths.login}>Login</BackToLogin>
          <ButtonContainer>
            <AuthButton name="Submit" />
          </ButtonContainer>

        </FormContainer>
      </AuthMainContainer>
    </AuthMain>
  );
};
