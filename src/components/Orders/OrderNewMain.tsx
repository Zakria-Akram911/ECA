import { Box, Button, Grid } from "@mui/material";
import React from "react";
import NewOrder from "./NewOrder";
import orderData from "../../utility/orderData.json";
import WorkingOnOrder from "./WorkingOnOrder";
import DispatchOrder from "./DispatchOrder";
import CancelledOrder from "./CancelledOrder";

const OrderNewMain = () => {
  const [tab, setTab] = React.useState<string>("New");
  return (
    <>
      <Grid container sx={{ justifyContent: "center", mt: 6 }}>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("New")}
            sx={{
              background: `${tab === "New" ? "#222222" : "white"}`,
              fontWeight: `${tab === "New" ? "600" : "500"}`,
              color: `${tab === "New" ? "white" : "black"}`,
              boxShadow: `${
                tab === "New" ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)" : "none"
              }`,
              border: `${
                tab === "New" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
              borderRadius: "5px 0 0 5px",
            }}
          >
            New
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Working-on")}
            sx={{
              background: `${tab === "Working-on" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Working-on" ? "600" : "500"}`,
              color: `${tab === "Working-on" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Working-on"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "Working-on"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
              borderRadius: "0",
            }}
          >
            Working on
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Dispatched")}
            sx={{
              background: `${tab === "Dispatched" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Dispatched" ? "600" : "500"}`,
              color: `${tab === "Dispatched" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Dispatched"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "Dispatched"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
              borderRadius: "0",
            }}
          >
            Dispatched
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setTab("Cancelled")}
            sx={{
              background: `${tab === "Cancelled" ? "#222222" : "white"}`,
              fontWeight: `${tab === "Cancelled" ? "600" : "500"}`,
              color: `${tab === "Cancelled" ? "white" : "black"}`,
              boxShadow: `${
                tab === "Cancelled"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                tab === "Cancelled"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "18px",
              fontFamily: "myAvenirMedium",
              p: "2px 32px",
              borderRadius: "0 5px 5px 0",
            }}
          >
            Cancelled
          </Button>
        </Grid>
      </Grid>
      {tab === "New" && (
        <Box sx={{ mt: "40px" }}>
          <NewOrder orderData={orderData} />
        </Box>
      )}
      {tab === "Working-on" && (
        <Box sx={{ mt: "40px" }}>
          <WorkingOnOrder orderData={orderData} />
        </Box>
      )}
      {tab === "Dispatched" && (
        <Box sx={{ mt: "40px" }}>
          <DispatchOrder orderData={orderData} />
        </Box>
      )}
      {tab === "Cancelled" && (
        <Box sx={{ mt: "40px" }}>
          <CancelledOrder orderData={orderData} />
        </Box>
      )}
    </>
  );
};

export default OrderNewMain;
