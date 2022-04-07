import * as React from "react";
import { Box, Link, Typography } from "@mui/material";
import { Trans } from "react-i18next";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        <Trans>Your Website</Trans>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        <Trans>Footer</Trans>
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        <Trans>Something here to give the footer a purpose!</Trans>
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
