import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import BannerIntro from './BannerIntro';
import BannerHome from './BannerHome';
import BannerShop from './BannerShop';
import BannerNewBanner from './BannerNewBanner';

const category = ["New Season", "Winter", "Summer"]
const BannerMainComponent = () => {
  const [tab, setTab] = React.useState<string>("Intro");
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");
  return (
    <Box sx={{
      justifyContent: "center",
      width: matchesLargeScreen ? "930px" : "auto",
    }}>
      <Box
        sx={{
          display: "flex",
          bgcolor: "#F5F5F5",
          alignItems: "center",
          p: 2,
          borderRadius: "6px",
          width: "81%",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 800,
            fontFamily: "myAvenirBold",
            lineHeight: "21.86px",
            mx: 4,
            mr: 6,
          }}
        >
          💡 Useful resources
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#016AFE",
            textTransform: "none",
            borderRadius: "6px",
            boxShadow: "none",
            fontSize: "12px",
            ":hover": {
              bgcolor: "#016AFE",
            },
          }}
        >
          Set up your Category
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#9901FE",
            textTransform: "none",
            ml: 1,
            borderRadius: "6px",
            boxShadow: "none",
            fontSize: "12px",
            ":hover": {
              bgcolor: "#9901FE",
            },
          }}
        >
          Design tips
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#B71B05",
            textTransform: "none",
            ml: 1,
            borderRadius: "6px",
            boxShadow: "none",
            fontSize: "12px",
            ":hover": {
              bgcolor: "#B71B05",
            },
          }}
        >
          Restrictions
        </Button>
      </Box>

      <Grid container sx={{ justifyContent: "center", mt: 6 }}>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Intro")}
            sx={{
              background: `${tab === "Intro" ? "black" : "white"}`,
              fontWeight: `${tab === "Intro" ? "600" : "500"}`,
              color: `${tab === "Intro" ? "white" : "black"}`,
              border: `${
                tab === "Intro" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              borderRight:"0",
              boxShadow: `${
                tab === "Intro"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              p: "5px 25px",
              borderRadius: "5px 0 0 5px",
              "&. :hover": {
                color: `${tab === "Intro" ? "black" : "white"}`,
              },
            }}
          >
            Intro
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Home")}
            sx={{
              background: `${tab === "Home" ? "black" : "white"}`,
              fontWeight: `${tab === "Home" ? "600" : "500"}`,
              color: `${tab === "Home" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Home"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "Home" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              borderRight:"0",
              textTransform: "math-auto",
              fontSize: "18px",
              p: "5px 25px",
              borderRadius: "0",
            }}
          >
            Home
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Shop")}
            sx={{
              background: `${tab === "Shop" ? "black" : "white"}`,
              fontWeight: `${tab === "Shop" ? "600" : "500"}`,
              color: `${tab === "Shop" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Shop"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "Shop" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              borderRight:"0",
              textTransform: "math-auto",
              fontSize: "18px",
              p: "5px 25px",
              borderRadius: "0",
            }}
          >
            Shop
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("NewBanner")}
            sx={{
              background: `${tab === "NewBanner" ? "black" : "white"}`,
              fontWeight: `${tab === "NewBanner" ? "600" : "500"}`,
              color: `${tab === "NewBanner" ? "white" : "black"}`,
              boxShadow: `${
                tab === "NewBanner"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "NewBanner" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              p: "5px 25px",
              borderRadius: "0 5px 5px 0",
            }}
          >
            New banner
          </Button>
        </Grid>
      </Grid>

      {tab === "Intro" && (
        <BannerIntro
          category = {category}
        />
      )}
      {tab === "Home" && (
        <BannerHome />
      )}
      {tab === "Shop" && (
        <BannerShop />
      )}
      {tab === "NewBanner" && (
        <BannerNewBanner
        category = {category}
        />
      )}
    </Box>
  )
}

export default BannerMainComponent