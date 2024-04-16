import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import ActiveCategory from "./ActiveCategory";
import CreateCategory from "./CreateCategory";
import { getCategories } from "../../api_calls/Products";

const ProductCategory = () => {
  const [tab, setTab] = useState("Active");
  const [category, setCategory] = useState<string | null>(null);
  const [subcategories, setSubcategories] = useState<any>([]);
  const [update, setUpdate] = useState(false);
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");

  useEffect(() => {
    getCategories()
      .then((res) => {
        setSubcategories(res.data);
        const data = res?.data;
        const cat = data?.length > 0 ? data[0]?.id : null;
        setCategory(cat);
      })
      .catch((err) => console.log(err));
  }, [update]);

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
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Active")}
            sx={{
              background: `${tab === "Active" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Active" ? 600 : 400}`,
              color: `${tab === "Active" ? "white" : "#222222"}`,
              border: `${
                tab === "Active" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              boxShadow: `${
                tab === "Active"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "5px 0 0 5px",
              "&. :hover": {
                color: `${tab === "Active" ? "#222222" : "white"}`,
              },
            }}
          >
            Active
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Create")}
            sx={{
              background: `${tab === "Create" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Create" ? 600 : 400}`,
              color: `${tab === "Create" ? "white" : "#222222"}`,
              boxShadow: `${
                tab === "Create"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "Create" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "0 5px 5px 0",
            }}
          >
            Create
          </Button>
        </Grid>
      </Grid>
      {tab === "Active" && (
        <ActiveCategory
          categories={subcategories}
          category={category}
          setCategory={setCategory}
          setUpdate={setUpdate}
          update={update}
        />
      )}
      {tab === "Create" && (
        <CreateCategory setUpdate={setUpdate} update={update} tab={tab} />
      )}
    </Box>
  );
};

export default ProductCategory;
