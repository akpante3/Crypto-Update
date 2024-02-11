import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ContextState } from "../Context";


const Title = styled("div")(() => ({
  flex: 1,
  color: "#0d8cf1",
  fontFamily: "Montserrat",
  fontWeight: "bold",
  cursor: "pointer",
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      color: "#fff",
    },
    type: "dark",
  },
});

console.log({ ...ContextState });

const Header = () => {
  let navigate = useNavigate();

  const { currency, setCurrency } = ContextState();
  console.log(currency);

  function handleClick() {
    navigate("/");
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar style={{
              display: "flex",
              justifyContent: "space-between"
          }}>
            <Typography variant="h6" onClick={handleClick}>
              <Title>Crypto</Title>
            </Typography>
            <Select
              variant="standard"
              value={currency}
              style={{
                width: 100,
                heigth: 40,
                marginRight: 15,
                color: "darkgrey",
              }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"NGN"}>NGN</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
