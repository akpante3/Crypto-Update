import { Container, Typography,  ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextState } from "../Context";

const useStyles = makeStyles(() => ({}));

const CoinInfo = () => {
    const {id} = useParams()
    const [coin, setCoin] = useState()

    const{currency, symbol} = ContextState();


  const classes = useStyles();
  return <div> hello</div>;
};

export default CoinInfo;


