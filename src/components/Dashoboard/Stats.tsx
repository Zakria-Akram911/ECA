import React, { useEffect } from "react";
import Statscard from "./Statscard";
import { Box, Button, Grid, useMediaQuery } from "@mui/material";
import { thisMonthOrderDetails } from "../../api_calls/Dashboard";

// const thisMonths: any = [
//   {
//     quantity: "5",
//     category: "New orders",
//   },
//   {
//     quantity: "34",
//     category: "Completed orders",
//   },
//   {
//     quantity: "£449.74",
//     category: "Revenue",
//   },
//   {
//     quantity: "38",
//     category: "New customers",
//   },
// ];
// const total: any = [
//   {
//     quantity: "855",
//     category: "Orders",
//   },
//   {
//     quantity: "3489",
//     category: "Completed orders",
//   },
//   {
//     quantity: "£44990.74",
//     category: "Revenue",
//   },
//   {
//     quantity: "680",
//     category: "Customers",
//   },
// ];
const Stats = () => {
  const [showTotal, setShowTotal] = React.useState(false);
  const [thisMonth, setThisMonth] = React.useState<any>({});

  useEffect(() => {
    thisMonthOrderDetails()
      .then((res) => setThisMonth(res?.data))

      .catch((err: any) => err);
  }, []);
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");
  return (
    <Box sx={{ justifyContent: "center" ,width:matchesLargeScreen ? "930px":"auto" }}>
      <Box>
        <Button
          sx={{
            textDecoration: `${showTotal ? "none" : "underline"}`,
            color: "#222222",
            textTransform: "math-auto",
            fontSize: "18px",
            pl:0,
            fontWeight: `${showTotal ? "400" : "600"}`,
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
          onClick={() => setShowTotal(false)}
          disableRipple={true}
        >
          This month
        </Button>
        <Button
          sx={{
            textDecoration: `${showTotal ? "underline" : "none"}`,
            color: "#222222",
            textTransform: "math-auto",
            fontSize: "18px",
            fontWeight: `${showTotal ? "600" : "400"}`,
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
          disableRipple={true}
          onClick={() => setShowTotal(true)}
        >
          Total
        </Button>
      </Box>
      <Box>
        <Grid container spacing={1}>
          {!showTotal ? (
            <>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.newOrders}
                  category={"New Order"}
                />
              </Grid>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.completedOrders}
                  category={"Completed Orders"}
                />
              </Grid>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.thisMonthRevenue}
                  category={"This month Revenue"}
                  symbol="£"
                />
              </Grid>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.newCustomers}
                  category={"New Customers"}
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.totalOrders}
                  category={"Total Order"}
                />
              </Grid>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.completedOrders}
                  category={"Completed Orders"}
                />
              </Grid>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.totalRevenue}
                  category={"Total Revenue"}
                  symbol="£"
                />
              </Grid>
              <Grid item xs={3}>
                <Statscard
                  quantity={thisMonth?.newCustomers}
                  category={"New Customers"}
                />
              </Grid>
              {/* <Statscard quantity={item.quantity} category={item.category} /> */}
            </>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Stats;
