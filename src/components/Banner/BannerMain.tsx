import React from "react";
import { Box, Grid, Button } from "@mui/material";
import BannerSale from "./BannerSale";
import BannerHome from "./BannerHome";
import BannerShop from "./BannerShop";

function BannerMain() {
    const [bannerType, setBannerType] = React.useState("sale");
    
  return (
    <Box>
    <Grid container sx={{ justifyContent: "center" }}>
      <Grid item>
        <Button
          variant="outlined"

          className="product-main-category-btns"
          onClick={() => setBannerType("sale")}
          sx={{
            background: `${bannerType === "sale" ? "black" : "white"}`,
            fontWeight: "600",
            color: `${bannerType === "sale" ? "white" : "black"}`,
            border: `${bannerType === "sale" ?  "0.5px solid #3D0871": "0.5px solid #DADADA"}`,
            boxShadow: `${bannerType === "sale" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)":"none"}`,
            textTransform: "math-auto",
            fontSize: "16px",
            p: "5px 25px",
            borderRadius: "5px 0 0 5px",
            "&. :hover": {
              color: `${bannerType === "sale" ? "black" : "white"}`,
            },
          }}
        >
          Sales
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          className="product-main-category-btns"
          onClick={() => setBannerType("home")}
          sx={{
            background: `${bannerType === "home" ? "black" : "white"}`,
            fontWeight: "600",
            color: `${bannerType === "home" ? "white" : "black"}`,
            border:  `${bannerType === "home" ?  "0.5px solid #3D0871": "0.5px solid #DADADA"}`,
            boxShadow: `${bannerType === "home" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)":"none"}`,
            textTransform: "math-auto",
            fontSize: "16px",
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
          onClick={() => setBannerType("shop")}
          sx={{
            background: `${bannerType === "shop" ? "black" : "white"}`,
            fontWeight: "600",
            color: `${bannerType === "shop" ? "white" : "black"}`,
            boxShadow: `${bannerType === "shop" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)":"none"}`,
            border: `${bannerType === "shop" ?  "0.5px solid #3D0871": "0.5px solid #DADADA"}`,
            textTransform: "math-auto",
            fontSize: "16px",
            p: "5px 25px",
            borderRadius: "0 5px 5px 0",
          }}
        >
          Shop
        </Button>
      </Grid>
    </Grid>
    {bannerType === "sale" && (
      <BannerSale/>
    //   <AllProducts
    //     categories={subcategories}
    //     category={category}
    //     setCategory={setCategory}
    //     update={update}
    //     setUpdate={setUpdate}
    //   />
    )}
    {bannerType === "home" && (
        <BannerHome/>
    //   <FeaturedProducts
    //     categories={subcategories}
    //     update={update}
    //     category={category}
    //     setCategory={setCategory}
    //     setUpdate={setUpdate}
    //   />
    )}
    {bannerType === "shop" && (
        <BannerShop/>
    //   <saleArrivals
    //     categories={subcategories}
    //     category={category}
    //     setCategory={setCategory}
    //     update={update}
    //     setUpdate={setUpdate}
    //   />
    )}
  </Box>
    
  )
}

export default BannerMain
