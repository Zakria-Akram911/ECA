import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import ProductsMain from "../../components/Products/ProductsMain";

const Products = () => {
  return (
    <Sidebar>
      <Box>
        <Typography sx={{ fontSize: "20px", color: "#222222" }}>
          Products
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontFamily: "myAvenirBold", fontWeight: "900" }}
        >
          Alya Co Shop
        </Typography>
      </Box>
      <Box sx={{ mt: "40px" }}>
        <ProductsMain />
      </Box>
    </Sidebar>
  );
};

export default Products;
