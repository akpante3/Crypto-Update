import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ContextState } from "../Context";
import { TrendingCoins } from "../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

const CarouselContainer = styled("div")(({ theme }) => ({
  height: "50%",
  display: "flex",
  alignItems: "center",
}));

const CarouselItem = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",
  textTransform: "uppercase",
  color: "white",
}));

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const { currency, symbol } = ContextState();
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    console.log(data);
    setTrending(data);
  };

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 4,
    },
  };

  const items = trending.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coins/${coin.id}`}>
        <CarouselItem>
          <img
            src={coin?.image}
            alt={coin.name}
            height="80"
            style={{ marginBottom: 10 }}
          />
          <span>
            {coin?.symbol}
            &nbsp;
            <span
              style={{
                color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                fontWeight: 500,
              }}
            >
              {profit && "+"}
              {coin?.price_change_percentage_24h?.toFixed(2)}%
            </span>
          </span>
          <span style={{ fontSize: 22, fontWeight: 500 }}>
            {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
          </span>
        </CarouselItem>
      </Link>
    );
  });

  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <CarouselContainer>
      <AliceCarousel
        animationDuration={1500}
        mouseTracking
        infinite
        autoPlayInterval={1000}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={items}
      />
    </CarouselContainer>
  );
};

export default Carousel;
