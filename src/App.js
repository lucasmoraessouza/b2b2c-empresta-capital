import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global/global";
import ContextProvider from "./context/index";
import theme from "./global/themes";
import { Home } from './pages/Home'
import { CodeSMS } from "./pages/CodeSMS";
import { Informations } from "./pages/Informations";
import { ValueAntecipation } from "./pages/ValueAntecipation";
import { Solicitation } from "./pages/Solicitation";

function App() {
  return (
    <>
      <ContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/sms" element={<CodeSMS />} />
              <Route exact path="/informacoes" element={<Informations />} />
              <Route exact path="/valor-antecipacao" element={<ValueAntecipation />} />
              <Route exact path="/solicitacao-enviada" element={<Solicitation />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ContextProvider>
    </>
  );
}

export default App;
