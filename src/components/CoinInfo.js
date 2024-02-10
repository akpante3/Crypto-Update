import { Container, Typography, CircularProgress, ThemeProvider,createTheme } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import SelectButton from "./SelectButton";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { HistoricalChart } from "../config/api";
import { useParams } from "react-router-dom";
import { ContextState } from "../Context";
import { chartDays } from "../config/data";
import { CategoryScale, Chart, LinearScale, PointElement, LineElement} from "chart.js";


Chart.register(CategoryScale);
Chart.register(LinearScale)
Chart.register(PointElement)
Chart.register(LineElement)

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

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const CoinInfo = () => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [flag,setflag] = useState(false);

  const { currency} = ContextState();

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(id, days, currency));
    console.log(data, 'sheeeeh')
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (<ThemeProvider theme={darkTheme}>
    <InfoContainer>
    {!historicData | flag===false ? (
          <CircularProgress
            style={{ color: "#0d8cf1" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#0d8cf1",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
    </InfoContainer>
  </ThemeProvider>);
};

export default CoinInfo;
