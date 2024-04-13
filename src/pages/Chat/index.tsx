import { Box, Button, Typography } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import React from "react";

function Chat() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sidebar>
      <Typography sx={{ fontSize: "20px" }}>Chats</Typography>
      <Box>
        <Button sx={{ zIndex: "1400" }} onClick={() => setOpen(!open)}>
          Click
        </Button>
        {open && (
          <Box
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
      </Box>
    </Sidebar>
  );
}

export default Chat;
