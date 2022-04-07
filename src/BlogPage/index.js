import * as React from "react";
import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import Topbar from "../Components/Topbar";
import Footer from "../Components/Footer";
import GridView from "../Components/GridView";

const theme = createTheme();

const BlogPage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    i18n.changeLanguage("fr");
    document.body.dir = i18n.dir();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar language={language} setLanguage={setLanguage} />
      <GridView />
      <Footer />
    </ThemeProvider>
  );
};

export default BlogPage;
