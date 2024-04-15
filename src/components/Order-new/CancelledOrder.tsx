import { Grid, Box } from "@mui/material";
import OrderNewCard from "./OrderNewCard";
import chatIcon from "../../assets/chat-icon.svg";
import chatActiveIcon from "../../assets/chat-active-icon.svg";
import focusIcon from "../../assets/focus-icon.svg";
import focusActiveIcon from "../../assets/focus-active-icon.svg";
import settingsIcon from "../../assets/settings-icon.svg";
import settingsActiveIcon from "../../assets/settings-active-icon.svg";
import React from "react";
import SettingsModal from "./SettingsModal";

const modalStyle = {
  position: "absolute",
  bgcolor: "white",
  boxShadow: 24,
  p: "10px",
  boxSizing: "border-box",
  borderRadius: "5px",
};

const focusModalStyle = {
  top: "50%",
  right: "45px",
  transform: "translate(0%, -50%)",
  width: 805,
};

const chatModalStyle = {
  top: "50%",
  right: "55px",
  transform: "translate(0%, -28%)",
  width: 380,
  height: 354,
  p: 1,
};

const settingsModalStyle = {
  top: "50%",
  right: "55px",
  transform: "translate(0%, -60%)",
  width: 286,
  height: 181,
};

const CancelledOrder = (props: any) => {
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

  return (
    <>
      {orderData.map((order: any) => (
        <>
          {order.orderStatus === 4 && (
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
                      cursor: "pointer",
                    }}
                  />
                  {chatModalOpen && order.id === modalOrderId && (
                    <Box
                      sx={{ ...modalStyle, ...chatModalStyle, zIndex: "1400" }}
                    >
                      <Box position="relative">
                        <Box
                          sx={{
                            width: "0",
                            height: "0",
                            borderLeft: "15px solid transparent",
                            borderRight: "15px solid transparent",
                            borderBottom: "21px solid white",
                            transform: "rotate(90deg)",
                            position: "absolute",
                            top: "78px",
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
                      cursor: "pointer",
                    }}
                  />
                  {focusModalOpen && order.id === modalOrderId && (
                    <Box
                      sx={{ ...modalStyle, ...focusModalStyle, zIndex: "1400" }}
                    >
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
                      cursor: "pointer",
                    }}
                  />
                  {settingsModalOpen && order.id === modalOrderId && (
                    <Box
                      sx={{
                        ...modalStyle,
                        ...settingsModalStyle,
                        zIndex: "1400",
                      }}
                    >
                      <>
                        <Box position="relative">
                          <SettingsModal orderData={filteredData} />
                          <Box
                            sx={{
                              width: "0",
                              height: "0",
                              borderLeft: "15px solid transparent",
                              borderRight: "15px solid transparent",
                              borderBottom: "22px solid white",
                              transform: "rotate(90deg)",
                              position: "absolute",
                              top: "86px",
                              right: "-31px",
                            }}
                          />
                        </Box>
                      </>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          )}
        </>
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

export default CancelledOrder;
