import React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { red } from "@mui/material/colors";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import PassengerDetail from "./pasengerDetails";
import ContactDetails from "./ContactInfo";

const TravelCard = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card>
        <CardContent>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "0 0 0.50rem 0",
            }}
          >
            <Typography variant="h5" color="#000">
              Intercity Travels
            </Typography>
            <Typography sx={{ color: red[600] }}>Kes 500</Typography>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "0 0 1rem 0",
            }}
          >
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginRight: "1rem",
              }}
            >
              A/C Sleeper(2+1)
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              |
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                margin: "0 1rem 0 1rem",
              }}
            >
              1 rest stop
            </Typography>
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                marginLeft: "auto",
              }}
            >
              30 seats
            </Typography>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
            }}
          >
            <div>
              <Typography
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Departure
              </Typography>
              <Typography
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                color="#000"
              >
                21:00
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Departure
              </Typography>
              <Typography
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                color="#000"
              >
                21:00
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                }}
              >
                Departure
              </Typography>
              <Typography
                style={{
                  fontWeight: "700",
                  fontSize: "16px",
                }}
                color="#000"
              >
                21:00
              </Typography>
            </div>
            <div
              style={{
                textAlign: "center",
                margin: "auto 0 auto 0",
              }}
            >
              <Button onClick={handleOpen}>
                <Typography
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: red[600],
                  }}
                >
                  Select Trip
                </Typography>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <PassengerDetail />
        </Box>
      </Modal>
    </>
  );
};
export default TravelCard;
