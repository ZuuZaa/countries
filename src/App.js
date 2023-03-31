import React from "react";
import { MainLayout } from "./components/MainLayout";
import { ThemeContextProvider } from "./context/theme";

const App = () => {
  return (
    <ThemeContextProvider>
     <MainLayout/>
     </ThemeContextProvider>
  );
}

export default App;
