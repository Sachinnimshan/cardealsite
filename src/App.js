import "./App.css";
import { AppContainer, AppContent } from "./app.styled";
import Footer from "./components/footer";
import Header from "./components/header";
import useResponsive from "./hooks/useResponsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CarDetails from "./components/pages/CarDetails";
import { carData, conditionTabs } from "./common/data";
import SearchPage from "./components/pages/SearchPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  const mobile = useResponsive();
  return (
    <AppContainer>
      <Header mobile={mobile} />
      <AppContent marginTop={!mobile}>
        <BrowserRouter>
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
        </BrowserRouter>
      </AppContent>

      <Footer mobile={mobile} />
    </AppContainer>
  );
}

export default App;
