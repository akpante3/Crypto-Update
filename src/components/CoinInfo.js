import { Container, Typography, ThemeProvider } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { ContextState } from "../Context";

const InfoContainer = styled("div")(({ theme }) => ({
  width: "75%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 25,
  padding: 40,
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginTop: 0,
    padding: 20,
    paddingTop: 0,
  },
}));

const CoinInfo = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = ContextState();

  const classes = useStyles();
  return <div> hello</div>;
};

export default CoinInfo;
