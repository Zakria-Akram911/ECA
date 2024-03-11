import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Dashoboard/Stats";
import DashboardOrders from "../../components/Dashoboard/Orders";

const Dashboard = () => {
  return (
    <Sidebar>
      <Box>
        <Box>
          <Typography sx={{ fontSize: "20px", color: "#222222" }}>
            Dashboard
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
            Alya Co Shop
          </Typography>
        </Box>
        <Box sx={{ mt: "28px" }}>
          <Stats />
        </Box>
        <Box sx={{ mt: "30px" }}>
          <DashboardOrders />
        </Box>
      </Box>
    </Sidebar>
  );
};

export default Dashboard;
