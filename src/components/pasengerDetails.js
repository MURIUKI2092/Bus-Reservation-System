import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";

const PassengerDetail = () => {
  return (
    <form className="passengerDetails">
      <Typography component="h3" variant="h5">
        Pasenger Details
      </Typography>
      <div className="passenger">
        <div>
          <h5>Passenger 1</h5>
        </div>
        <div>
          <h5>Seat 1</h5>
        </div>
      </div>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          required
          fullWidth
          id="age"
          label="Age"
          name="age"
          variant="standard"
        />
      </Grid>
      <Grid item xs={12} sm={8} className="passengerGender">
        <h5>Gender</h5>
        <button className="buttonMale">Male</button>
        <button>Female</button>
      </Grid>
    </form>
  );
};
export default PassengerDetail;
