import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import ProductCategory from "../../components/category/ProductCategory";

const Category = () => {
  return (
    <Sidebar>
      <Box>
        <Typography sx={{ fontSize: "20px", color: "#222222" }}>
          Categories
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontFamily: "myAvenirBold", fontWeight: "900" }}
        >
          PoshLittleStar
        </Typography>
      </Box>
      <Box sx={{ mt: "40px" }}>
        <ProductCategory/>
      </Box>
    </Sidebar>
  );
};

export default Category;
