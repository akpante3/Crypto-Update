import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner.jpeg)",
    backgroundRepeat: "no-repeat",
    minWidth: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div  className={classes.tagline}>
            <Typography variant="h2" style={{
                fontWeight:"bold",
                marginBottom: 15,
                fontFamily:"montserrat",
                marginTop: 25
            }}> Crypto Tracker</Typography>
            <Typography variant="h2" style={{
                color:"darkgrey",
                textTransform:"capitalize",
                fontFamily:"montserrat",
            }}> All info concerning your favorite Crypto Currency</Typography>
        </div>
      </Container>
      <Carousel/>
    </div>
  );
};

export default Banner;
