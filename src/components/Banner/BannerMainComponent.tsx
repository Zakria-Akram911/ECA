import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import BannerIntro from "./BannerIntro";
import BannerHome from "./BannerHome";
import BannerShop from "./BannerShop";
import BannerNewBanner from "./BannerNewBanner";
import { getCategories } from "../../api_calls/Products";
import { getShops } from "../../api_calls/Banners";

const shopCategories = ["T-Shirts", "Casual Shirts", "Pants"];
const numberOfItems = ["1", "2", "3", "4", "5", "6", "7"];

const BannerMainComponent = () => {
  const [tab, setTab] = React.useState<string>("Intro");
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");
  const [update, setUpdate] = React.useState(false);

  const [categoryList, setCategoryList] = useState<any>([]);
  const [shopList, setShopList] = useState<any>([]);

  useEffect(() => {
    getCategories()
      .then((res: any) => setCategoryList(res.data))
      .catch((err: any) => err);
    getShops()
      .then((res: any) => setShopList(res.data))
      .catch((err: any) => err);
  }, [tab, update]);

  return (
    <Box
      sx={{
        justifyContent: "center",
        width: matchesLargeScreen ? "930px" : "auto",
      }}
    >
      {/* <Box
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
      </Box> */}

      <Grid container sx={{ justifyContent: "center", mt: 6, width: "81%" }}>
        {/* <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Intro")}
            sx={{
              background: `${tab === "Intro" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Intro" ? "600" : "500"}`,
              color: `${tab === "Intro" ? "white" : "black"}`,
              border: `${
                tab === "Intro" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              borderRight: "0",
              boxShadow: `${
                tab === "Intro" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)" : "none"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
              borderRadius: "5px 0 0 5px",
              "&. :hover": {
                color: `${tab === "Intro" ? "black" : "white"}`,
              },
            }}
          >
            Intro
          </Button>
        </Grid> */}
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Intro")}
            sx={{
              background: `${tab === "Intro" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Intro" ? "600" : "500"}`,
              color: `${tab === "Intro" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Intro" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)" : "none"
              }`,
              border: `${
                tab === "Intro" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              // borderRight:"0",
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
              borderRadius: "5px 0 0 5px",
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
              background: `${tab === "Home" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Home" ? "600" : "500"}`,
              color: `${tab === "Home" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Home" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)" : "none"
              }`,
              border: `${
                tab === "Home" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              // borderRight:"0",
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
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
              background: `${tab === "Shop" ? "#222222" : "white"}`,
              color: `${tab === "Shop" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Shop" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)" : "none"
              }`,
              border: `${
                tab === "Shop" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              // borderRight:"0",
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
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
              background: `${tab === "NewBanner" ? "#222222" : "white"}`,
              fontWeight: `${tab === "NewBanner" ? "600" : "500"}`,
              color: `${tab === "NewBanner" ? "white" : "black"}`,
              boxShadow: `${
                tab === "NewBanner"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "NewBanner"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
              borderRadius: "0 5px 5px 0",
            }}
          >
            New banner
          </Button>
        </Grid>
      </Grid>

      {tab === "Intro" && <BannerIntro category={categoryList} />}
      {tab === "Home" && <BannerHome />}
      {tab === "Shop" && (
        <BannerShop update={update} setUpdate={setUpdate} category={shopList} />
      )}
      {tab === "NewBanner" && <BannerNewBanner category={categoryList} />}
    </Box>
  );
};

export default BannerMainComponent;
