import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const SettingsModal = (props: any) => {
  const data = props.orderData;
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  const confirmDeleteHanlder = () => {
    setConfirmDelete(true);
  };
  return (
    <Box sx={{ p: "4px" }}>
      {confirmDelete ? (
        <Box>
          {/* Defined at the last of this component */}
          <ConfirmDeleteModal />
        </Box>
      ) : (
        <Box>
          <Grid container columnGap="5px" alignItems="center">
            <Grid item>
              {["Payment Method", "Payment ID", "UID", "User ID"].map(
                (text: string, index: number) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "350",
                      lineHeight: "16.39px",
                      color: "rgba(99, 99, 99, 1)",
                      mb: "9px !important",
                    }}
                  >
                    {text + ":"}
                  </Typography>
                )
              )}
            </Grid>
            <Grid item>
              {[data.paymentMethod, data.paymentId, data.uid, data.userId].map(
                (text: any, index: number) => (
                  <Typography
                    key={index}
                    sx={{
                      fontSize: "12px",
                      fontWeight: "500",
                      lineHeight: "16.39px",
                      mb: "9px !important",
                    }}
                  >
                    {text ? text : "N/A"}
                  </Typography>
                )
              )}
            </Grid>
          </Grid>

          <Button
            variant="outlined"
            sx={{
              border: "0.5px solid rgba(142, 49, 49, 1)",
              color: "rgba(142, 49, 49, 1)",
              fontSize: "16px",
              fontWeight: "800",
              lineHeight: "21.86px",
              letterSpacing: "0.22px",
              textTransform: "initial",
              width: "100%",
              height: "37px",
              mt: "10px",
              fontFamily: "myAvenirRegular",
              "&:hover": {
                border: "0.5px solid rgba(142, 49,49,1)",
              },
            }}
            onClick={confirmDeleteHanlder}
          >
            Cancel order
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default SettingsModal;

const ConfirmDeleteModal = () => {
  return (
    <Box mt="25px">
      <Box mb="13px">
        <Typography
          sx={{ fontSize: "16px", fontWeight: 800, lineHeight: "21.86px" }}
        >
          Are you sure?
        </Typography>
      </Box>
      <Box mb="17px">
        <Typography
          sx={{ fontSize: "12px", fontWeight: 350, lineHeight: "16.39px" }}
        >
          For refunds, visit your{" "}
          <a style={{ fontWeight: 350, lineHeight: "16.39px" }} href="#">
            Stripe account.
          </a>{" "}
          Any issues please contact us.
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          border: "0.5px solid rgba(142, 49, 49, 1)",
          bgcolor: "rgba(142, 49, 49, 1)",
          textTransform: "initial",
          fontSize: "16px",
          fontWeight: 800,
          lineHeight: "21.86px",
          letterSpacing: "0.22px",
          fontFamily: "myAvenirRegular",
          width: "100%",
          height: "37px",
          "&:hover": {
            bgcolor: "rgba(142, 49,49,1)",
          },
        }}
      >
        Confirm cancellation
      </Button>
    </Box>
  );
};
