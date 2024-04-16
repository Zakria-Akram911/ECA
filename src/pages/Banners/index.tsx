import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
// import ProductCategory from "../../components/category/ProductCategory";
import BannerMainComponent from "../../components/banner/BannerMainComponent";

const Banner = () => {
  return (
    <Sidebar>
      <Box>
        <Typography sx={{ fontSize: "20px", color: "#222222" }}>
          Banners
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: "40px",
            fontFamily: "myAvenirBold",
            fontWeight: "900",
          }}
        >
          PoshLittleStar
        </Typography>
      </Box>
      <Box sx={{ mt: "40px" }}>
        <BannerMainComponent />
      </Box>
    </Sidebar>
  );
};

export default Banner;
