import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/CoinPage";
import { styled } from "@mui/system";

import "./App.css";


const AppContainer = styled("div")(({ theme }) => ({
  backgroundColor: "#14161a",
  color: "white",
  minHeight: "100vh",
}));

function App() {

  return (
    <AppContainer>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>}  />
          <Route path="/coins/:id" element={<Coinpage/>} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
