import "./App.css";
import { AppContainer } from "./app.styled";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import useResponsive from "./useResponsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/screens/HomePage";

function App() {
  const mobile = useResponsive();
  return (
    <AppContainer>
      <Header mobile={mobile} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage mobile={mobile} />} />
        </Routes>
      </BrowserRouter>
      <Footer mobile={mobile} />
    </AppContainer>
  );
}

export default App;
