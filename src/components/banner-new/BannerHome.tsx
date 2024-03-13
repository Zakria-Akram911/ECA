import React from "react";
import { Box, Button } from "@mui/material";
import BannerHomeAccessories from "./BannerHome/BannerHomeAccessories";
import BannerHomeWomen from "./BannerHome/BannerHomeWomen";

const BannerHome = () => {
  const [category, setCategory] = React.useState<string>("Accessories");

  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb:3
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
          <Button
            disableRipple={true}
            sx={{
              "&:focus": {
                boxShadow: "none",
              },
              textTransform: "math-auto",
              fontSize: "18px",
              lineHeight: "24.59px",
              letterSpacing: "0.5px",
              color: `${category === "Accessories" ? "black" : "black"}`,
              borderRadius: "0",
              fontFamily: "myAvenirRegular",
              p: 0,
              px: 1,
              fontWeight: `${category === "Accessories" ? "800" : "0"}`,
              borderBottom: `${
                category === "Accessories" ? "1px solid black" : "none"
              }`,
            }}
            onClick={() => setCategory("Accessories")}
            className="product-category-btn"
          >
            Accessories
          </Button>
          <Button
            disableRipple={true}
            sx={{
              "&:focus": {
                boxShadow: "none",
              },
              textTransform: "math-auto",
              fontSize: "18px",
              lineHeight: "24.59px",
              letterSpacing: "0.5px",
              color: `${category === "Women" ? "black" : "black"}`,
              borderRadius: "0",
              fontFamily: "myAvenirRegular",
              p: 0,
              px: 1,
              fontWeight: `${category === "Women" ? "800" : "0"}`,
              borderBottom: `${
                category === "Women" ? "1px solid black" : "none"
              }`,
            }}
            onClick={() => setCategory("Women")}
            className="product-category-btn"
          >
            Women
          </Button>
        </Box>
      </Box>
      {category === "Accessories" ? (
        <BannerHomeAccessories />
      ) : (
        <BannerHomeWomen />
      )}
    </Box>
  );
};

export default BannerHome;
