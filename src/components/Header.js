import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContextState } from "../Context";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  console.log({...ContextState})


const Header = () => {
  const classes = useStyle();
  let navigate = useNavigate();

  const {currency, setCurrency} = ContextState()
  console.log(currency)

  function handleClick() {
    navigate("/");
  }



  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" onClick={handleClick} className={classes.title}>
              Cryto
            </Typography>
            <Select
              variant="standard"
              value={currency}
              style={{
                width: 100,
                heigth: 40,
                marginRight: 15,
              }}
              onChange={(e)=> setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
     </ThemeProvider>
  );
};

export default Header;
