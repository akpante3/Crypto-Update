import {
  Container,
  Typography,
  ThemeProvider,
  createTheme,
  LinearProgress,
} from "@mui/material";
import React from "react";
import Banner from "../components/Banner";
import CoinDetail from "../components/CoinDetail";

const theme = createTheme();

const Coinpage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CoinDetail />
    </ThemeProvider>
  );
};

export default Coinpage;
