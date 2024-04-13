import {
  Grid,
  Box,
  Button,
  Modal,
  Typography,
  Dialog,
  DialogTitle,
} from "@mui/material";
import OrderNewCard from "./OrderNewCard";
import chatIcon from "../../assets/chat-icon.svg";
import chatActiveIcon from "../../assets/chat-active-icon.svg";
import focusIcon from "../../assets/focus-icon.svg";
import focusActiveIcon from "../../assets/focus-active-icon.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import settingsActiveIcon from "../../assets/settings-active-icon.svg";
import React from "react";
import SettingsModal from "./SettingsModal";

const focusModalStyle = {
  position: "absolute",
  top: "50%",
  right: "43px",
  transform: "translate(0%, -50%)",
  width: 805,
  bgcolor: "white",
  boxShadow: 24,
  p: 1,
  boxSizing: "border-box",
  borderRadius: "5px",
};

const chatModalStyle = {
  position: "absolute",
  top: "50%",
  right: "55px",
  transform: "translate(0%, -28%)",
  width: 380,
  height: 354,
  bgcolor: "white",
  boxShadow: 24,
  p: 1,
  boxSizing: "border-box",
  borderRadius: "5px",
};

const settingsModalStyle = {
  position: "absolute",
  top: "50%",
  right: "55px",
  transform: "translate(0%, -60%)",
  width: 286,
  height: 181,
  bgcolor: "white",
  boxShadow: 24,
  p: 1,
  boxSizing: "border-box",
  borderRadius: "5px",
};

const NewOrder = (props: any) => {
  const orderData = props.orderData.orders;
  const [focusModalOpen, setFocusModalOpen] = React.useState(false);
  const [chatModalOpen, setChatModalOpen] = React.useState(false);
  const [settingsModalOpen, setSettingsModalOpen] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState(orderData);
  const [modalOrderId, setModalOrderId] = React.useState(null);

  const handleFocusModalOpen = (id: any) => {
    const dataById = orderData.filter((order: any) => order.id === id);
    setFilteredData(dataById[0]);
    setFocusModalOpen(!focusModalOpen);
    if (!focusModalOpen) {
      setModalOrderId(id);
    } else {
      setModalOrderId(null);
    }
  };
  const handleChatModalOpen = (id: any) => {
    setChatModalOpen(!chatModalOpen);
    if (!chatModalOpen) {
      setModalOrderId(id);
    } else {
      setModalOrderId(null);
    }
  };
  const handleSettingsModalOpen = (id: any) => {
    const dataById = orderData.filter((order: any) => order.id === id);
    setFilteredData(dataById[0]);
    setSettingsModalOpen(!settingsModalOpen);
    if (!settingsModalOpen) {
      setModalOrderId(id);
    } else {
      setModalOrderId(null);
    }
  };

  const handleClose = () => {
    setModalOrderId(null);
    setChatModalOpen(false);
    setSettingsModalOpen(false);
    setFocusModalOpen(false);
  };

  // const onBeingOrderClickHandler = () => {
  //   if (orderStatus === "begin") {
  //     setOrderStatus("workingOn");
  //   }
  // };

  return (
    <>
      {orderData.map((order: any) => (
        <Grid container columnGap="10px" mt="30px" key={order.id}>
          <Grid item>
            <OrderNewCard orderData={order} />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              ml: "10px",
            }}
          >
            {/* Chat Icon Button */}
            <Box className="chat-icon" mb="10px" position="relative">
              <Box
                component="img"
                src={
                  order.id === modalOrderId && chatModalOpen
                    ? chatActiveIcon
                    : chatIcon
                }
                onClick={() => handleChatModalOpen(order.id)}
                sx={{
                  zIndex:
                    order.id === modalOrderId && chatModalOpen
                      ? "1400"
                      : "1200",
                  position: "relative",
                }}
              />
              {chatModalOpen && order.id === modalOrderId && (
                <Box
                  sx={{
                    ...chatModalStyle,
                    zIndex: "1400",
                  }}
                >
                  <Box position="relative">
                    <Box
                      sx={{
                        width: "0",
                        height: "0",
                        borderLeft: "20px solid transparent",
                        borderRight: "20px solid transparent",
                        borderBottom: "25px solid white",
                        transform: "rotate(90deg)",
                        position: "absolute",
                        top: "75px",
                        right: "-31px",
                      }}
                    />
                  </Box>
                </Box>
              )}
            </Box>

            {/* Focus Icon Button */}
            <Box className="focus-icon" mb="10px" position="relative">
              <Box
                component="img"
                src={
                  order.id === modalOrderId && focusModalOpen
                    ? focusActiveIcon
                    : focusIcon
                }
                onClick={() => handleFocusModalOpen(order.id)}
                sx={{
                  zIndex:
                    order.id === modalOrderId && focusModalOpen
                      ? "1400"
                      : "1200",
                  position: "relative",
                }}
              />
              {focusModalOpen && order.id === modalOrderId && (
                <Box sx={{ ...focusModalStyle, zIndex: "1400" }}>
                  <>
                    <OrderNewCard orderData={filteredData} />
                  </>
                </Box>
              )}
            </Box>

            {/* Settings Icon Button */}
            <Box className="settings-icon" position="relative">
              <Box
                component="img"
                src={
                  order.id === modalOrderId && settingsModalOpen
                    ? settingsActiveIcon
                    : settingsIcon
                }
                onClick={() => handleSettingsModalOpen(order.id)}
                sx={{
                  zIndex:
                    order.id === modalOrderId && settingsModalOpen
                      ? "1400"
                      : "1200",
                  position: "relative",
                }}
              />
              {settingsModalOpen && order.id === modalOrderId && (
                <Box sx={{ ...settingsModalStyle, zIndex: "1400" }}>
                  <>
                    <Box position="relative">
                      <SettingsModal orderData={filteredData} />
                      <Box
                        sx={{
                          width: "0",
                          height: "0",
                          borderLeft: "13px solid transparent",
                          borderRight: "13px solid transparent",
                          borderBottom: "20px solid white",
                          transform: "rotate(90deg)",
                          position: "absolute",
                          top: "87px",
                          right: "-30px",
                        }}
                      />
                    </Box>
                  </>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      ))}
      {(focusModalOpen || chatModalOpen || settingsModalOpen) && (
        <Box
          onClick={handleClose}
          sx={{
            position: "fixed",
            top: "0",
            bottom: "0",
            right: "0",
            left: "0",
            bgcolor: "rgba(0,0,0,0.5)",
            zIndex: "1300",
          }}
        />
      )}
    </>
  );
};

export default NewOrder;
