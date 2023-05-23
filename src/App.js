import "./App.css";
import { AppContainer } from "./app.styled";
import Footer from "./components/footer";
import Header from "./components/header";
import useResponsive from "./hooks/useResponsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import CarDetails from "./components/pages/CarDetails";
import { carData } from "./common/data";

function App() {
  const mobile = useResponsive();
  return (
    <AppContainer>
      <Header mobile={mobile} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage mobile={mobile} />} />
          <Route path="/cars/:id" element={<CarDetails mobile={mobile} data={carData}/>}/>
        </Routes>
      </BrowserRouter>
      <Footer mobile={mobile} />
    </AppContainer>
  );
}

export default App;
