import { Avatar } from "@mui/material";
import { FC } from "react";
import styled from "styled-components";

type Props = {
    name?: string;
}

export const ProfileAvatarName: FC<Props> = (props) => {
   return (
      <>
         <div>
            <Avatar alt="Profile Picture" sx={{ width: 60, height: 60, margin: "auto" }} />
            <ProfileNameContainer>
               <p className="name">{props.name}</p>
            </ProfileNameContainer>
         </div>
      </>
   );
};


 const ProfileNameContainer = styled.div`
   p {
      text-align: center;
   }
`;