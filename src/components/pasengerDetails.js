import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { themeOptions } from "../utils/theme";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PassengerDetailCard from "./PassengerDetailCard";
import Circle from "./Circle";
import { Button } from "@mui/material";
const theme = themeOptions;

const PassengerDetail = () => {
  const [seats, setSteats] = React.useState([...Array(1)]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const submit_data = {
      email: data.get("email"),
      age: data.get("age"),
      seats: data.get("seats"),
    };
  };

  const handleSeatChange = (event) => {
    let value = parseInt(event.target.value);
    if (value > 0) {
      setSteats([...Array(value)]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          container
          style={{
            marginBottom: "100px",
          }}
        >
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#000",
                marginBottom: "0.5rem",
              }}
            >
              Contact information
            </Typography>
            <TextField
              required
              fullWidth
              id="email"
              name="email"
              type="email"
              label="Email"
              variant="standard"
            />
            <TextField
              required
              fullWidth
              id="phone"
              name="phone"
              label="Phone"
              variant="standard"
            />
          </div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#000",
                marginBottom: "0.5rem",
              }}
            >
              Seats
            </Typography>
            <TextField
              required
              variant="standard"
              onChange={handleSeatChange}
              name="seats"
              label="No. of seats"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </div>
          <div
            style={{
              marginBottom: "1rem",
            }}
          >
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#000",
                marginBottom: "0.50rem",
              }}
            >
              Passanger detail
            </Typography>
          </div>
          {seats.map((e, i) => (
            <PassengerDetailCard key={i} seat={i + 1} />
          ))}
        </div>
        <div
          style={{
            backgroundColor: "#222234",
            height: "70px",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            padding: "1rem",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "0.50rem",
              }}
            >
              Seats
            </Typography>
            { seats.map((e, i) => <Circle key={i} />)}
          </div>
          <div>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Amount
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "0.50rem",
              }}
            >
              100 KSH
            </Typography>
          </div>
          <div>
            <Button type="submit" variant="contained">
              Proceed
            </Button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
};
export default PassengerDetail;
