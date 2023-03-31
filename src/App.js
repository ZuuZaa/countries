import { BrowserRouter } from "react-router-dom";
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
