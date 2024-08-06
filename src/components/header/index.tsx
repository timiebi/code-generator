// import { Link } from "react-router-dom";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FC } from "react";
import { Link } from "react-router-dom";
import { CREATE_IMAGE } from "../../assets/images";

type Props = {
   link: string;
};
export const HeaderComponent: FC<Props> = (props) => {
   return (
      <>
         <HeaderStyle>
            <HeaderContainerStyle>
               <LogoStyle>
                  {" "}
                  <img src={CREATE_IMAGE} alt="" />
               </LogoStyle>
               <NavigationContainerStyle>
                  <IconDiv to={props.link}>
                     <AccountCircleIcon fontSize="large" />
                  </IconDiv>
               </NavigationContainerStyle>
            </HeaderContainerStyle>
         </HeaderStyle>
      </>
   );
};

const HeaderStyle = styled.div`
   background-color: ${(props) => props.theme.text};
   color: ${(props) => props.theme.background};
   position: fixed;
   top: 0;
   width: 100%;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const HeaderContainerStyle = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 90%;
   margin: auto;
`;

const LogoStyle = styled.div`
   max-width: 40px;
   img {
      width: 100%;
   }
`;

const NavigationContainerStyle = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;
`;

// const NavigationLinkStyle = styled(Link)`
//    color: ${(props) => props.theme.background};
// `;

const IconDiv = styled(Link)`
   display: flex;
   align-items: center;
   justify-content: center;
   text-decoration: none;
   color: #fff;
`;
