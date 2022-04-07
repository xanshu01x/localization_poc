import * as React from "react";
import {
  AppBar,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const Topbar = ({ language, setLanguage }) => {
  const { i18n } = useTranslation();
  const languagesOption = {
    ar: "Arabic",
    fr: "French",
    en: "English",
    de: "German",
    hi: "Hindi",
  };
  const flagOptions = {
    ar: "ar",
    fr: "fr",
    en: "us",
    de: "de",
    hi: "in",
  };
  document.body.dir = i18n.dir();

  const handleChange = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="relative">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <CameraIcon sx={{ mr: 2 }} /> */}
        <Typography variant="h6" color="inherit" noWrap>
          Demo
        </Typography>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 150 }} size="small">
          <InputLabel id="demo-simple-select-standard-label">
            Language
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={language}
            style={{
              backgroundColor: "#ffff",
              color: "black",
            }}
            onChange={handleChange}
            label="Language"
          >
            {Object.keys(languagesOption).map((key) => (
              <MenuItem value={key}>
                <ReactCountryFlag
                  countryCode={flagOptions[key]}
                  svg
                  style={{ margin: "0px 10px", marginBottom: "5px" }}
                />
                {languagesOption[key]}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
