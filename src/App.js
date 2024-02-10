import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Coinpage from "./pages/CoinPage";
import { makeStyles } from "@mui/styles";

import "./App.css";



const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.App }>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage/>}  />
          <Route path="/coins/:id" element={<Coinpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
