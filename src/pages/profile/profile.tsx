import { ProfileHeaderComponent } from "./header";
import {
   ProfileMainStyle,
   ProfileMainContainerStyle,
   ProfileMainHeaderStyle,
   ProfileImageName,
   ProfileListContainerStyle,
   ProfileListMainDiv,
   ButtonContainer,
} from "./style";
import { ProfileInputFields, ProfileInputProps } from "./data";
import { ProfileAvatarName } from "../../components/profile";
import { TextField } from "../../utils/textField";
import { AuthButton } from "../../utils/authButton";

export const UserProfile = () => {
   const handleChange = (e: any) => {
      console.log(e.target.name, e.target.value);
   };

   return (
      <>
         <ProfileMainStyle>
            <ProfileMainContainerStyle>
               <ProfileMainHeaderStyle>
                  <ProfileHeaderComponent title="Your Profile" />
               </ProfileMainHeaderStyle>
               <ProfileImageName>
                  <ProfileAvatarName />
               </ProfileImageName>
               <ProfileListContainerStyle>
                  {ProfileInputFields.map((field: ProfileInputProps, index) => (
                     <ProfileListMainDiv key={index}>
                        {field.type === "select" ? (
                           <select
                              name={field.name}
                              onChange={handleChange}
                              className="select_textField"
                           >
                              <option value="">{field.label}</option>
                              {field.options &&
                                 field.options.map((option: string, idx) => (
                                    <option key={idx} value={option}>
                                       {option}
                                    </option>
                                 ))}
                           </select>
                        ) : (
                           <TextField
                              name={field.name}
                              label={field.label}
                              value={field.tValue || ""}
                              onChange={handleChange}
                              type={field.type}
                           />
                        )}
                     </ProfileListMainDiv>
                  ))}
                  <ButtonContainer>
                     <AuthButton name="Update Profile" />
                  </ButtonContainer>
               </ProfileListContainerStyle>
            </ProfileMainContainerStyle>
         </ProfileMainStyle>
      </>
   );
};
