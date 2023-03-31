import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { ThemeContextProvider } from "./context/theme";
import { Routing } from "./routing";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <Routing />
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
