import React, { useState } from "react";
import { Box, Grid, Button, useMediaQuery } from "@mui/material";
import AllProducts from "./AllProducts";
import FeaturedProducts from "./FeaturedProducts";
import NewArrivals from "./NewArrivals";
import { getCategories } from "../../api_calls/Products";

const ProductsMain = () => {
  const [categoryP, setCategoryP] = React.useState("all");
  const [category, setCategory] = useState<string | null>(null);
  const [subcategories, setSubcategories] = React.useState<any>([]);
  const [update, setUpdate] = useState(false);
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");

  React.useEffect(() => {
    getCategories()
      .then((res) => {
        setSubcategories(res.data);
        const data = res?.data;
        const cat = data?.length > 0 ? data[0]?.id : null;
        setCategory(cat);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box
      sx={{
        justifyContent: "center",
        width: matchesLargeScreen ? "930px" : "auto",
      }}
    >
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setCategoryP("all")}
            sx={{
              background: `${categoryP === "all" ? "#222222" : "white"}`,
              fontWeight: "600",
              color: `${categoryP === "all" ? "white" : "black"}`,
              border: `${
                categoryP === "all"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              boxShadow: `${
                categoryP === "all"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "5px 0 0 5px",
              "&. :hover": {
                color: `${categoryP === "all" ? "black" : "white"}`,
              },
            }}
          >
            All
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setCategoryP("featured")}
            sx={{
              background: `${categoryP === "featured" ? "#222222" : "white"}`,
              fontWeight: "600",
              color: `${categoryP === "featured" ? "white" : "black"}`,
              border: `${
                categoryP === "featured"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              boxShadow: `${
                categoryP === "featured"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "0",
            }}
          >
            Featured
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setCategoryP("newArrivals")}
            sx={{
              background: `${
                categoryP === "newArrivals" ? "#222222" : "white"
              }`,
              fontWeight: "600",
              color: `${categoryP === "newArrivals" ? "white" : "black"}`,
              boxShadow: `${
                categoryP === "newArrivals"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                categoryP === "newArrivals"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "0 5px 5px 0",
            }}
          >
            New Arrivals
          </Button>
        </Grid>
      </Grid>
      {categoryP === "all" && (
        <AllProducts
          categories={subcategories}
          category={category}
          setCategory={setCategory}
          update={update}
          setUpdate={setUpdate}
        />
      )}
      {categoryP === "featured" && (
        <FeaturedProducts
          categories={subcategories}
          update={update}
          category={category}
          setCategory={setCategory}
          setUpdate={setUpdate}
        />
      )}
      {categoryP === "newArrivals" && (
        <NewArrivals
          categories={subcategories}
          category={category}
          setCategory={setCategory}
          update={update}
          setUpdate={setUpdate}
        />
      )}
    </Box>
  );
};

export default ProductsMain;
