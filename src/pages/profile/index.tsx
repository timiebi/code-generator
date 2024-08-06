import { ProfileHeaderComponent } from "./header";
import {
   ProfileMainStyle,
   ProfileMainContainerStyle,
   ProfileMainHeaderStyle,
   ProfileImageName,
   ProfileListContainerStyle,
   ProfileListMainDiv,
} from "./style";
import { ProfileList, ProfileProps } from "./data";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { ProfileAvatarName } from "../../components/profile";
import { useNavigate } from "react-router-dom";

export const ProfilePage = () => {
   const navigate = useNavigate();
   return (
      <>
         <ProfileMainStyle>
            <ProfileMainContainerStyle>
               <ProfileMainHeaderStyle>
                  <ProfileHeaderComponent title="Profile" />
               </ProfileMainHeaderStyle>
               <ProfileImageName>
                  <ProfileAvatarName name="Emmanuel Okafor Eze" />
               </ProfileImageName>
               <ProfileListContainerStyle>
                  <ProfileListMainDiv>
                     {ProfileList.map((profile: ProfileProps, index: number) => (
                        <div
                           onClick={() => navigate(profile.link)}
                           className="listContents"
                           key={index}
                        >
                           <div className="icon_text">
                              <profile.icon />
                              <p className="profile_list_name">{profile.name}</p>
                           </div>
                           <KeyboardArrowRightRoundedIcon />
                        </div>
                     ))}
                  </ProfileListMainDiv>
               </ProfileListContainerStyle>
            </ProfileMainContainerStyle>
         </ProfileMainStyle>
      </>
   );
};
