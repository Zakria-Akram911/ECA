import { Box, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Stats from "../../components/Dashoboard/Stats";
import DashboardOrders from "../../components/Dashoboard/Orders";
import { useEffect, useState } from "react";
import { getOrdersForDashboard } from "../../api_calls/Dashboard";

const Dashboard = () => {
  const [showTotal, setShowTotal] = useState(false);
  const [monthlyOrders, setMonthlyOrders] = useState([]);
  const [totalOrders, setTotalOrders] = useState([]);

  useEffect(() => {
    getOrdersForDashboard(false)
      .then((res) => {
        console.log(res.data);
        setMonthlyOrders(res?.data);
      })
      .catch((err: any) => err);
  }, []);

  useEffect(() => {
    getOrdersForDashboard(true)
      .then((res) => {
        console.log(res.data);
        setTotalOrders(res?.data);
      })
      .catch((err: any) => err);
  }, []);

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
          <Stats showTotal={showTotal} setShowTotal={setShowTotal} />
        </Box>
        <Box sx={{ mt: "30px" }}>
          <DashboardOrders orders={showTotal ? totalOrders : monthlyOrders} />
        </Box>
      </Box>
    </Sidebar>
  );
};

export default Dashboard;
