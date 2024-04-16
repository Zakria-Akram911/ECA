import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Typography from "@mui/material/Typography";
import OrderNewMain from "../../components/Orders/OrderNewMain";

const Orders = () => {
  return (
    <Sidebar>
      <Box>
        <Typography sx={{ fontSize: "20px", color: "#222222" }}>
          Orders
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
        <OrderNewMain />
      </Box>
    </Sidebar>
  );
};

export default Orders;
