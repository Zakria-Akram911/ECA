import { Grid, Box, Button } from "@mui/material";
import OrderNewCard from "./OrderNewCard";
import chatIcon from "../../assets/message-icon.png";
import zoomIcon from "../../assets/zoom-icon.png";
import settingsIcon from "../../assets/settings-icon.png";
import React from "react";

const NewOrder = (props: any) => {
  const orderData = props.orderData.orders;
  const [orderStatus, setOrderStatus] = React.useState("begin");

  const onBeingOrderClickHandler = () => {
    if (orderStatus === "begin") {
      setOrderStatus("workingOn");
    }
  };

  return (
    <>
      {orderData.map((order: any) => (
        <Grid container columnGap="10px" mt="30px">
          <Grid item>
            <Box
              component="img"
              src={order.imageUrl}
              sx={{ width: "188px", height: "206px", display: "block" }}
            />
            <Button
              variant="contained"
              sx={{
                boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
                bgcolor: "rgba(34, 34, 34, 1)",
                height: "30px",
                width: "188px",
                fontSize: "14px",
                fontWeight: "800",
                lineHeight: "19.12px",
                letterSpacing: "0.17px",
                textTransform: "initial",
                mt: "10px",
                fontFamily: "myAvenirRegular",
                "&:hover": {
                  bgcolor: "rgba(14, 14, 14, 1)",
                  boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
                },
              }}
              onClick={onBeingOrderClickHandler}
            >
              {orderStatus === "begin" && "Begin order"}
              {orderStatus === "workingOn" && "Working On"}
            </Button>
          </Grid>
          <Grid item>
            <OrderNewCard orderData={order} />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml:"10px"
            }}
          >
            <Box className="chat-icon" mb="10px">
              <Box component="img" src={chatIcon} />
            </Box>
            <Box className="zoom-icon" mb="10px">
              <Box component="img" src={zoomIcon} />
            </Box>
            <Box className="settings-icon">
              <Box component="img" src={settingsIcon} />
            </Box>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default NewOrder;
