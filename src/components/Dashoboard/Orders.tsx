import React, { useEffect } from "react";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getOrdersForDashboard } from "../../api_calls/Dashboard";



const DashboardOrders = () => {
 
  const [showNew, setShowNew] = React.useState(false);
  const [orders, setOrders] = React.useState<any>([]);

  useEffect(() => {
    getOrdersForDashboard()
      .then((res: any) => {
        setOrders(res?.data);
      })
      .catch((err: any) => console.log(err));
  }, []);
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");
  return (
    <Box sx={{ justifyContent: "center" ,width:matchesLargeScreen ? "930px":"auto" }}>
      <Typography
        variant="h2"
        sx={{ fontSize: "30px",letterSpacing:"0.375px", fontWeight: "700", color: "#222222" , mb:1
      ,fontFamily:"myAvenirMedium"}}
      >
        Orders
      </Typography>
      <Box>
        <Button
          sx={{
            "&:focus": {
              boxShadow: "none", // Add this to remove the click effect outline
            },
            color: "#222222",
            textDecoration: `${showNew ? "none" : "underline"}`,
            pl:0,
            textTransform: "math-auto",
            justifyContent:"flex-start",
            fontSize: "18px",
            fontWeight: `${showNew ? "400" : "600"}`,
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
          disableRipple={true}
          key={"new"}
          onClick={() => setShowNew(false)}
        >
          New
        </Button>
        <Button
          disableRipple={true}
          sx={{
            "&:focus": {
              boxShadow: "none", // Add this to remove the click effect outline
            },
            textDecoration: `${showNew ? "underline" : "none"}`,
            justifyContent:"flex-start",
            color: "#222222",
            textTransform: "math-auto",
            fontSize: "18px",

            fontWeight: `${showNew ? "600" : "400"}`,
            '&:hover': {
              backgroundColor: 'transparent'
            },
          }}
          onClick={() => setShowNew(true)}
        >
          Completed
        </Button>
      </Box>
      <Box>
        {!showNew ? (
          <TableContainer
            component={Paper}
            sx={{  boxShadow: "none", mt:"11px"}}
            className="dashboard-order-table"
          >
            <Table
              size="small"
              aria-label="customized table"

            >
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      pl:"70px",
                      
                  
                    }}
                  >
                    Order ID
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Customer
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Order date
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Shipping option
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      pr:"70px"
                    }}
                  >
                    Order Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((row: any) => (
                  <TableRow
                    key={row.orderId}
                    sx={{
                      "&:last-child td, &:last-child th": {},
                      marginBottom: "20px",
                    }}
                  >
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: "#222222",
                            fontWeight: "400",
                            fontStyle: "normal",
                            pl:"54px"
                          }}
                        >
                          {row?.OrderId}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{ textTransform: "capitalize" }}>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: " #222222",
                            fontWeight: "400",
                          }}
                        >
                          {" "}
                          {row?.Customer}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: " #222222",
                            fontWeight: "400",
                          }}
                        >
                          {row?.OrderDate}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{ padding: "12px 10px !important" }}>
                        <Button
                          variant="contained"
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            boxShadow: "none",
                            width: "150px",
                            fontWeight: "500",
                            borderRadius: "3px",
                            textTransform: "capitalize",
                            background: `${
                              row?.ShippingOption === "Express"
                                ? "#1338BF"
                                : "#F5F5F5"
                            }`,
                            color: `${
                              row?.ShippingOption === "Express"
                                ? "white"
                                : "black"
                            }`,
                            "&:hover": {
                              background: `${
                                row?.ShippingOption === "Express"
                                  ? "#1338BF"
                                  : "#F5F5F5"
                              }`,
                              color: `${
                                row?.ShippingOption === "Express"
                                  ? "white"
                                  : "black"
                              }`,
                            },
                          }}
                        >
                          {row?.ShippingOption}
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{ textTransform: "capitalize" }}>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#222222",
                            fontFamily:"myAvenirLight",
                            fontWeight: "400",
                          }}
                        >
                          {row?.Status}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "16px",
                            color: "#222222",
                            fontFamily:"myAvenirLight",
                            fontWeight: "400",
                            pr:"54px"
                          }}
                        >
                          £{row.OrderTotal}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <TableContainer
            component={Paper}
            sx={{ boxShadow: "none" , mt:"11px"}}
            className="dashboard-order-table"
          >
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      pl: "70px",
                      pr:"15px"
                    }}
                  >
                    Order ID
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Customer
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Order date
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Shipping option
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      padding: "0 15px",
                    }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontFamily:"myAvenirBold",
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#222222",
                      pl: "15px",
                      pr: "70px",
                    }}
                  >
                    Order Total
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.slice(2, 4)?.map((row: any) => (
                  <TableRow
                    key={row.orderId}
                    sx={{
                      "&:last-child td, &:last-child th": {},
                      marginBottom: "20px",
                    }}
                  >
                    <TableCell
                      align="center"
                      component="th"
                      scope="row"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{}}>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: "#222222",
                            fontWeight: "400",
                            fontStyle: "normal",
                            pl:"54px"



                          }}
                        >
                          {row?.OrderId}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{ textTransform: "capitalize" }}>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: " #222222",
                            fontWeight: "400",
                          }}
                        >
                          {" "}
                          {row?.Customer}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: " #222222",
                            fontWeight: "400",
                          }}
                        >
                          {row?.OrderDate}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{ padding: "12px 10px !important" }}>
                        <Button
                          variant="contained"
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            boxShadow: "none",
                            width: "150px",
                            fontWeight: "500",
                            borderRadius: "3px",
                            textTransform: "capitalize",
                            background: `${
                              row?.ShippingOption === "Express"
                                ? "#1338BF"
                                : "#F5F5F5"
                            }`,
                            color: `${
                              row?.ShippingOption === "Express"
                                ? "white"
                                : "black"
                            }`,
                            "&:hover": {
                              background: `${
                                row?.ShippingOption === "Express"
                                  ? "#1338BF"
                                  : "#F5F5F5"
                              }`,
                              color: `${
                                row?.ShippingOption === "Express"
                                  ? "white"
                                  : "black"
                              }`,
                            },
                          }}
                        >
                          {row?.ShippingOption}
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box sx={{ textTransform: "capitalize" }}>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: "#222222",
                            fontWeight: "400",
                          }}
                        >
                          {row?.Status}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{
                        padding: "0",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily:"myAvenirLight",
                            fontSize: "16px",
                            color: "#222222",
                            fontWeight: "400",
                            pr:"54px"
                          }}
                        >
                          £{row.OrderTotal}
                        </Typography>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};

export default DashboardOrders;
