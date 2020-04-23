import React from "react";
import "./App.css";
import NgoMain from "./components/card/ngoMain";
import Topbar from "./components/navBar/navBar";
import ThemeProvider from "./components/theme";
import ThemeContext from "./components/theme/ThemeContext";
import { BrowserRouter, Route } from "react-router-dom";
import EditNgo from "./components/form/editForm";
function App() {
  const [theme, setTheme] = React.useState("material");
  return (
    <div style={{ backgroundColor: theme === "material" ? "white" : "black" }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider>
          <Topbar />
          <BrowserRouter>
            <Route path="/" component={NgoMain} exact={true} />
            <Route path="/ngo/edit/:id" component={EditNgo} exact={true} />
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
