import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../../components/header";
import { MainContainer, MainStyle } from "./style";
// import { GenerateCodeNavigationButton } from "../../components/generateCodeFloatingButton";
import { paths } from "../../route/frontend";
import GenerateCode from "../profile/codeGeneratorPage";

export const Main = () => {
   return (
      <>
         <MainStyle>
            <MainContainer>
               <HeaderComponent link={paths.profile} />
            </MainContainer>
         </MainStyle>
         <Outlet />

         <GenerateCode />
      </>
   );
};
