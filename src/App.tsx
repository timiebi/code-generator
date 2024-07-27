import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darktheme } from "./globalStyles/themes";
import { RouterProvider } from "react-router-dom";
import { router } from "./route/main";
import { GlobalStyle } from "./globalStyles";
import MobileWarning from "./route/desktopWarning";
import useDeviceDimensions from "./hooks/useWindowDimension";

function App() {
  const [theme,
    //  setTheme
    ] = useState<string>("light");
  const { largerThanTablets } = useDeviceDimensions();

  if (largerThanTablets) {
     <MobileWarning />;
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darktheme}>
      <MobileWarning />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
