import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
// import ProductCategory from "../../components/category/ProductCategory";
import BannerMainComponent from "../../components/banner-new/BannerMainComponent";
// import { Box } from "@mui/material";
// import Sidebar from "../../components/Sidebar";
// import Typography from "@mui/material/Typography";
// import BannerHeader from "../../components/Banner/BannerHeader";
// import BannerMain from "../../components/Banner/BannerMain";
// const Banner = () => {
//   return (
//     <Sidebar>
//      <Box>
//         <Typography sx={{ fontSize: "20px", color: "#222222" }}>
//           Banners
//         </Typography>
//       </Box>
//       <Box>
//         <Typography
//           variant="h1"
//           sx={{ fontSize: "40px", fontFamily: "myAvenirBold", fontWeight: "900" }}
//         >
//           Alya Co Shop
//         </Typography>
//       </Box>
//       <Box sx={{mt:'10px'}}>
//         <BannerHeader/>
//       </Box>
//       <Box sx={{ mt: "40px" }}>
//         <BannerMain/>
//       </Box>
//     </Sidebar>
//   );
// };

// export default Banner;

const Banner = () => {
return(
  <Sidebar>
      <Box>
        <Typography sx={{ fontSize: "20px", color: "#222222" }}>
          Banners
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
        <BannerMainComponent />
      </Box>
    </Sidebar>
)
};

export default Banner;
