import styled from "styled-components";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import { FC } from "react";


type Props = {
   title: string
}
export const ProfileHeaderComponent:FC<Props> = (props) => {
    const navigate = useNavigate()
   return (
      <ProfileHeaderStyle>
         <ContentStyle>
            <ArrowIconDiv onClick={() => navigate(-1)}>
               <ArrowBackRoundedIcon />
            </ArrowIconDiv>
            <ProfileTitle>{props.title}</ProfileTitle>
         </ContentStyle>
      </ProfileHeaderStyle>
   );
};

const ProfileHeaderStyle = styled.div``;

const ContentStyle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ArrowIconDiv = styled.div`
   width: 40px;
   height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50%;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ProfileTitle = styled.p`
   font-size: 1.2rem;
   font-weight: 500;
   text-align: center;
`;
