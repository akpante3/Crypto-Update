import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import Carousel from "./Carousel";

const BannerContent = styled("div")(({ theme }) => ({
  height: 400,
  display: "flex",
  flexDirection: "column",
  paddingTop: 25,
  justifyContent: "space-around",
}));

const Tagline = styled("div")(({ theme }) => ({
  display: "flex",
  height: "40%",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
}));

const BannerContanier = styled("div")(({ theme }) => ({
  backgroundImage: "url(./banner.jpeg)",
  backgroundRepeat: "no-repeat",
  minWidth: "100%",
  backgroundPosition: "center",
  backgroundSize: "cover",
}));

const Banner = () => {
  return (
    <BannerContanier >
      <Container>
        <BannerContent>
          <Tagline>
            <Typography
              variant="h2"
              style={{
                fontWeight: "bold",
                marginBottom: 15,
                fontFamily: "montserrat",
                marginTop: 25,
              }}
            >
              {" "}
              Crypto Tracker
            </Typography>
            {/* <Typography variant="h2" style={{
                color:"darkgrey",
                textTransform:"capitalize",
                fontFamily:"montserrat",
            }}> All info concerning your favorite Crypto Currency</Typography> */}
          </Tagline>
        </BannerContent>
      </Container>
      <Carousel />
    </BannerContanier >
  );
};

export default Banner;
