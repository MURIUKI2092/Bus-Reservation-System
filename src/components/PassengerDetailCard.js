import React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import TextField from "@mui/material/TextField";

const PassengerDetailCard = ({seat}) => {
  const [selectedGender, setSelectedGender] = React.useState("male");
  console.log(`The seat ${seat}`)
  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <Typography
        style={{
          fontSize: "14px",
          fontWeight: 600,
        }}
      >
        Passenger {seat}
      </Typography>
      <TextField
        required
        fullWidth
        id="name"
        name="name"
        label="Name"
        variant="standard"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "0.5rem",
        }}
      >
        <TextField
          required
          id="age"
          name="age"
          label="Age"
          variant="standard"
        />
        <div
          style={{
            marginLeft: "auto",
            textAlign: "center",
          }}
        >
          <Typography style={{ fontWeight: 600 }}>Gender</Typography>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              value="male"
              onChange={handleChange}
              checked={selectedGender === "male"}
              control={<Radio />}
              label="Male"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="female"
              onChange={handleChange}
              checked={selectedGender === "female"}
              control={<Radio />}
              label="Female"
              labelPlacement="bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassengerDetailCard;
