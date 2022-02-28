import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { handleLogout } from "../utils/auth";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { themeOptions } from "../utils/theme";

const theme = themeOptions;

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    handleLogout(navigate);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Typography>Loggin Out...</Typography>
    </ThemeProvider>
  );
};

export default Logout;
