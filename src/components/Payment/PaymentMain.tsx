import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import badge1 from "../../assets/paymentBadge1.png";
import badge2 from "../../assets/paymentBadge2.png";
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 6,
  "& .MuiSwitch-track": {
    borderRadius: 30 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 20,
    height: 20,
    margin: 0,
  },
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#1338bf" : "#1338bf",
      },
    },
  },
}));

function PaymentMain() {

  return (
    <Box>
    <Grid container spacing={2} sx={{m:0}}>
      <Grid
        sx={{
          borderRadius: "5px",
          border: "0.5px solid #939393",
          background: "#FFF",
        }}
        item
        xs={12}
      >
        <Grid
          sx={{ p: "20px" }}
          container
          spacing={2}
          justifyContent="space-between"
        >
          <Grid
            sx={{ borderRadius: "5px", background: "#F5F5F5", p: "39px" }}
            xs={6}
          >
            <Typography
              sx={{
                color: "#000",
                fontFamily: "myAvenirBold",
                fontSize: "20px",
                fontWeight: 800,
              }}
            >
              Shipping options
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "19px",
              }}
            >
              <Box sx={{ width: "30%", mr: "56px" }}>
                <Typography
                  sx={{
                    color: "#000",
                    fontFamily: "myAvenirBold",
                    fontSize: "14px",
                    fontWeight: 800,
                  }}
                >
                  Promo duration
                </Typography>
                <Typography
                  sx={{
                    color: "#8C8686",
                    fontFamily: "myAvenLight",
                    fontSize: "8px",
                    fontWeight: 350,
                  }}
                >
                  We recommend to keep the dates short and sweet.
                </Typography>
              </Box>

              <Box sx={{ width: "60%" }}>
                <Box
                  sx={{
                    borderRadius: "3px",
                    border: "0.5px solid #DADADA",
                    background: "#FFF",
                    display: "flex",
                    height: "37px",
                    mb: "10px",
                    p: "2px",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "3px",
                      background: "#1338BF",
                      width: "50%",
                      color: "#FFF",
                      p: "8px 27px",
                      textAlign: "center",
                      fontFamily: "AirbnbCerealWBd",
                      fontSize: "12px",
                      fontWeight: 400,
                      letterSpacing: "0.15px",
                    }}
                  >
                    Express
                  </Box>
                  <Box
                    sx={{
                      borderRadius: "3px",
                      width: "50%",
                      p: "8px 27px",
                      color: "#636363",
                      textAlign: "center",
                      fontFamily: "AirbnbCerealWBk",
                      fontSize: "12px",
                      fontWeight: 400,
                      letterSpacing: "0.15px",
                    }}
                  >
                    Standard
                  </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    placeholder="E.g '3 to 5 Days"
                    sx={{
                      borderRadius: "3px",
                      width: "60%",
                      "& fieldset": { border: "none" },
                      "& input": {
                        color: "#636363",
                        fontFamily: "AirbnbCerealWBk",
                        fontsize: "10px",
                        fontWeight: 400,
                      },
                      "& input::placeholder": {
                        fontSize: "10px",
                      },
                      border: "0.5px solid #DADADA",
                      background: "#FFF",
                    }}
                  />

                  <TextField
                    placeholder="£"
                    sx={{
                      width: "40%",
                      borderRadius: "3px",
                      "& fieldset": { border: "none" },
                      "& input": {
                        color: "#636363",
                        fontFamily: "AirbnbCerealWBk",
                        fontsize: "10px",
                        fontWeight: 400,
                      },

                      border: "0.5px solid #DADADA",
                      background: "#FFF",
                      ml: "10px",
                      color: "#636363",
                      fontFamily: "AirbnbCerealWBk",
                      fontsize: "5px",
                      fontWeight: 400,
                    }}
                  />
                </Box>
                <Button
                  className="add-product-btn"
                  sx={{
                    background: "#222",
                    fontSize: "18px",
                    width: "100%",
                    mt: 2,
                    color: "white",
                    p: "6px 44px",
                    fontWeight: "800",
                    borderRadius: "3px",
                    textTransform: "math-auto",
                    border: "0.5px solid #440076",
                    boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
                  }}
                >
                  Create
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid xs={5} sx={{ pt: "38px" }}>
            <Typography
              sx={{
                color: "#1D2835",
                fontFamily: "myAvenirBold",
                fontSize: "20px",
                fontWeight: 800,
              }}
            >
              Active Shipping
            </Typography>
            <Grid container spacing={1} sx={{ pr: "48px", mt: "16px" }}>
              <Grid item xs={10}>
                <Box
                  sx={{
                    borderRadius: "3px",
                    border: "0.5px solid #939393",
                    background: "#FFF",
                    height: "38px",
                    display: "flex",
                    p: "10px 10px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1D2835",
                      fontFamily: "myAvenirRegular",
                      fontSize: "14px",
                      fontWeight: 350,
                    }}
                  >
                    3 to 5 days
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1D2835",
                      fontFamily: "myAvenirRegular",
                      fontSize: "14px",
                      fontWeight: 800,
                    }}
                  >
                    Standard
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1D2835",
                      fontFamily: "myAvenirRegular",
                      fontSize: "14px",
                      fontWeight: 350,
                    }}
                  >
                    £2.90
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box
                  sx={{
                    borderRadius: "3px",
                    border: "0.5px solid #939393",
                    background: "#FFF",
                    height: "38px",
                  }}
                ></Box>
              </Grid>
              <Grid item xs={10}>
                <Box
                  sx={{
                    borderRadius: "3px",
                    border: "0.5px solid #939393",
                    background: "#FFF",
                    height: "38px",
                    display: "flex",
                    p: "10px 10px",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#1D2835",
                      fontFamily: "myAvenirRegular",
                      fontSize: "14px",
                      fontWeight: 350,
                    }}
                  >
                    1 to 2 days
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1D2835",
                      fontFamily: "myAvenirRegular",
                      fontSize: "14px",
                      fontWeight: 800,
                    }}
                  >
                    Express
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1D2835",
                      fontFamily: "myAvenirRegular",
                      fontSize: "14px",
                      fontWeight: 350,
                    }}
                  >
                    £5.00
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={2}>
                <Box
                  sx={{
                    borderRadius: "3px",
                    border: "0.5px solid #939393",
                    background: "#FFF",
                    height: "38px",
                  }}
                ></Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{
          borderRadius: "5px",
          border: "0.5px solid #939393",
          background: "#FFF",
          mt: "37px",
        }}
        item
        xs={12}
      >
        <Grid
          sx={{ p: "20px" }}
          container
          spacing={2}
          justifyContent="space-between"
        >
          <Grid xs={6}>
            <Box
              sx={{
                borderRadius: "5px",
                background: "#F5F5F5",
                p: "30px 28px",
                pr: "60px",
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "myAvenirBold",
                  fontSize: "20px",
                  fontWeight: 800,
                }}
              >
                Active payments
              </Typography>
              <Box className="show-product-switch-btn">
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                    pt: "20px",
                  }}
                >
                  <Grid item xs={5}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#1D2835",
                        fontWeight: 800,
                        fontFamily: "myAvenirRegular",
                      }}
                    >
                      Apple Pay
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Android12Switch
                          sx={{ m: 0 }}
                          //checked={}
                          name="isShow"
                          //onChange={changeHandler}
                        />
                      }
                      label=""
                      sx={{ m: "0" }}
                    />
                  </Grid>
                </Grid>
              </Box>

              <Box className="show-product-switch-btn">
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                    pt: "5px",
                  }}
                >
                  <Grid item xs={10}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#1D2835",
                        fontWeight: 800,
                        fontFamily: "myAvenirRegular",
                      }}
                    >
                      Card payment
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Android12Switch
                          sx={{ m: 0 }}
                          //checked={}
                          name="isShow"
                          //onChange={changeHandler}
                        />
                      }
                      label=""
                      sx={{ m: "0" }}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box className="show-product-switch-btn">
                <Grid
                  container
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(0,0,0,0.2)",
                    pt: "5px",
                  }}
                >
                  <Grid item xs={10}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#1D2835",
                        fontWeight: 800,
                        fontFamily: "myAvenirRegular",
                      }}
                    >
                      Paypal
                    </Typography>
                  </Grid>

                  <Grid item xs={2}>
                    <FormControlLabel
                      control={
                        <Android12Switch
                          sx={{ m: 0 }}
                          //checked={}
                          name="isShow"
                          //onChange={changeHandler}
                        />
                      }
                      label=""
                      sx={{ m: "0" }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid xs={5} textAlign="center" sx={{ p: "40px 30px" }}>
            <Typography
              sx={{
                color: "#1D2835",
                textAlign: "center",
                fontFamily: "myAvenirRegular",
                fontSize: "20px",
                fontWeight: 350,
              }}
            >
              Other payment <br />
              methods coming soon
            </Typography>
            <Box
              sx={{
                display: "flex",
                p: "8px 55px",
                justifyContent: "space-between",
              }}
            >
              <img src={badge1} />
              <img src={badge2} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    </Box>
  );
}

export default PaymentMain;
