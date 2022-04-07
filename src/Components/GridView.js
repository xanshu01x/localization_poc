import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useTranslation, Trans } from "react-i18next";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GridView = () => {
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <>
      {/* Hero unit */}
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="md">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <Trans i18nKey={"localizationKey"}>Localization Example</Trans>
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <Trans>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Trans>
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="md">
        {/* End hero unit */}

        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/random"
                  alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    <Trans>Heading</Trans>
                  </Typography>
                  <Typography>
                    <Trans>
                      This is a media card. You can use this section to describe
                      the content.
                    </Trans>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Trans>View</Trans>
                  </Button>
                  <Button size="small">
                    <Trans>Edit</Trans>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default GridView;
