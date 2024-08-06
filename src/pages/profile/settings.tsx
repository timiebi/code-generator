import { ProfileHeaderComponent } from "./header";
import {
   ProfileMainStyle,
   ProfileMainContainerStyle,
   ProfileMainHeaderStyle,
   ProfileListContainerStyle,
   ProfileListMainDiv,
} from "./style";
import { ProfileSettingsList, SettingsProps } from "./data";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// import { useNavigate } from "react-router-dom";

export const ProfileSettings = () => {
//    const navigate = useNavigate();
   return (
      <>
         <ProfileMainStyle>
            <ProfileMainContainerStyle>
               <ProfileMainHeaderStyle>
                  <ProfileHeaderComponent title="Profile" />
               </ProfileMainHeaderStyle>
               <ProfileListContainerStyle>
                  <ProfileListMainDiv>
                     {ProfileSettingsList.map((profile: SettingsProps, index: number) => (
                        <div
                           //    onClick={() => navigate(profile.link)}
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
