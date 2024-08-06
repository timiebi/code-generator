import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import useGeneratorStore from "../../../store/generatorStore";
import { GenerateCodeNavigationButton } from "../../../components/generateCodeFloatingButton";
import { CodeGenratorDrawerMainStyle, GeneratorHeader } from "./style";
import { TextField } from "../../../utils/textField";
import { CodeGeneratorInputProps, CodeGeneratorInputType } from "./data";
import { AuthButton } from "../../../utils/authButton";

type Anchor = "top" | "left" | "bottom" | "right";

export default function GenerateCode() {
   const { open_generator } = useGeneratorStore();

   console.log(open_generator);
   const [state, setState] = React.useState({
      bottom: false,
   });

   const toggleDrawer =
      (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
         if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
               (event as React.KeyboardEvent).key === "Shift")
         ) {
            return;
         }

         setState({ ...state, [anchor]: open });
      };

   const list = (anchor: Anchor) => (
      <Box
        //  sx={{ height: 500 }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
         <CodeGenratorDrawerMainStyle>
            <GeneratorHeader>
               <p>Invite Guest</p>
            </GeneratorHeader>
            <form action="">
               <div className="select_div">
                  <label htmlFor="">Type</label>
                  <select name="" id="">
                     <option value="">Select Type</option>
                  </select>
               </div>
               {CodeGeneratorInputProps.map((data: CodeGeneratorInputType, index) => (
                  <TextField
                  key={index}
                     id="generate_code_name"
                     name={data.name}
                     type={data.type}
                     value=""
                     label={data.label}
                     onChange={() => console.log("")}
                  />
               ))}

               <div className="textarea_div">
                  <label htmlFor="">Comment</label>
                  <textarea name="" id=""></textarea>
               </div>
               <AuthButton name="Create"/>
            </form>
         </CodeGenratorDrawerMainStyle>
      </Box>
   );

   return (
      <div>
         {(["bottom"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
               <GenerateCodeNavigationButton onClick={toggleDrawer(anchor, true)} />
               {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
               <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                  {list(anchor)}
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   );
}
