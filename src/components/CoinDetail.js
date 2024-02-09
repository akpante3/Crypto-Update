import { Typography, LinearProgress } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import CoinInfo from "./CoinInfo";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ContextState } from "../Context";
import { SingleCoin } from "../config/api";
import { numberWithCommas } from "./CoinsTable";

// import useMediaQuery from '@mui/material/useMediaQuery'

const CoinDetailContainer = styled("div")(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Sidebar = styled("div")(({ theme }) => ({
  width: "30%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 25,
  borderRight: "2px solid grey",
}));

const Heading = styled("div")({
  fontWeight: "bold",
  marginBottom: 20,
  fontFamily: "Montserrat",
});

const Description = styled("div")(({ theme }) => ({
  width: "100%",
  fontFamily: "Montserrat",
  padding: 25,
  paddingBottom: 15,
  paddingTop: 0,
  textAlign: "justify",
}));

const MarketData = styled("div")(({ theme }) => ({
  alignSelf: "start",
  padding: 25,
  paddingTop: 10,
  width: "100%",
}));

const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = ContextState();

  const getCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    console.log(data);

    setCoin(data);
  };

  useEffect(() => {
    getCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <CoinDetailContainer>
      <Sidebar>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Heading>
          <Typography variant="h3">{coin?.name}</Typography>
        </Heading>
        <Description>
          <Typography variant="subtitle1">
             {coin?.description.en.split(". ")[0] }
          </Typography>
        </Description>

        <MarketData>
          <span style={{ display: "flex" }}>
            <Heading>
              <Typography variant="h5">Rank:</Typography>
            </Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Heading>
              <Typography variant="h5">Current Price:</Typography>
            </Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Heading>
              <Typography variant="h5">Market Cap:</Typography>
            </Heading>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </MarketData>
      </Sidebar>
      <CoinInfo />
    </CoinDetailContainer>
  );
};

export default CoinDetail;
