import {
  ThemeProvider,
  createTheme,
} from "@mui/material";
import React from "react";
import CoinDetail from "../components/CoinDetail";

const theme = createTheme();

const CoinDetailPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CoinDetail />
    </ThemeProvider>
  );
};

export default CoinDetailPage;
