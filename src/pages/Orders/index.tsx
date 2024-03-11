
// import { Box } from "@mui/material";
// import Sidebar from "../../components/Sidebar";
// import Typography from "@mui/material/Typography";
// import OrdersMain from "../../components/Orders/OrdersMain";

// const Orders = () => {



//   return (<Sidebar>
//     <Box>
//         <Typography sx={{ fontSize: "20px", color: "#222222" }}>
//           Orders
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
//       <Box sx={{ mt: "40px" }}>
//         <OrdersMain/>
//       </Box>
//   </Sidebar>)
// };

// export default Orders;
import Sidebar from "../../components/Sidebar";
import Typography from "@mui/material/Typography";

const Orders = () => {



  return <Sidebar>
    <Typography sx={{ fontSize: "20px" }}>
      
      Orders</Typography>
  </Sidebar>
};

export default Orders;