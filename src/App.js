import "./App.css";
import { AppContainer, AppContent } from "./app.styled";
import Footer from "./components/footer";
import Header from "./components/header";
import useResponsive from "./hooks/useResponsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CarDetails from "./components/pages/CarDetails";
import { carData } from "./common/data";
import SearchPage from "./components/pages/SearchPage";
import LoginPage from "./components/pages/LoginPage";
import { useEffect, useState } from "react";

function App() {
  const [isHome, setIsHome] = useState(false);
  const mobile = useResponsive();

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setIsHome(true);
    }
  }, [window.location]);

  return (
    <AppContainer>
      <BrowserRouter>
        <Header mobile={mobile} />
        <AppContent marginTop={!mobile}>
          <Routes>
            <Route path="/" element={<HomePage mobile={mobile} />} />
            <Route
              path="/cars/:id"
              element={<CarDetails mobile={mobile} data={carData} />}
            />
            <Route
              path="/search"
              element={<SearchPage mobile={mobile} data={carData} />}
            />
            <Route path="/login" element={<LoginPage mobile={mobile} />} />
          </Routes>
        </AppContent>
      </BrowserRouter>
      <Footer mobile={mobile} />
    </AppContainer>
  );
}

export default App;
