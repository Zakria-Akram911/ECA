import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const OrderNewCard = (props: any) => {
  const data = props.orderData;
  const [orderStatus, setOrderStatus] = React.useState("begin");

  const onBeingOrderClickHandler = () => {
    if (orderStatus === "begin") {
      setOrderStatus("workingOn");
    }
  };

  const formattedDate = (date: any) => {
    if (!date) {
      return "Invalid Date!";
    }
    const day = date.substring(0, 2);
    const month = date.substring(2, 4);
    const year = date.substring(4, 8);

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const monthName = months[parseInt(month, 10) - 1];
    const formattedDate = `${parseInt(day, 10)} ${monthName}, ${year}`;

    return formattedDate;
  };

  const totalPrice = (): any => {
    const priceOfProduct = data.price;
    const deliveryCharges = data.deliveryCharges;
    let finalAmount = 0;
    if (data.promotionDiscountInPercent) {
      finalAmount =
        (priceOfProduct * data.promotionDiscountInPercent) / 100 +
        deliveryCharges;
    } else {
      finalAmount = priceOfProduct + deliveryCharges;
    }
    return finalAmount;
  };

  return (
    <>
      <Grid container columnGap="10px">
        <Grid item>
          <Box
            component="img"
            src={data.imageUrl}
            sx={{ width: "188px", height: "206px", display: "block" }}
          />
          <Button
            variant="contained"
            sx={{
              boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
              bgcolor:
                data.orderStatus === 3
                  ? "rgba(51, 171, 83, 1)"
                  : "rgba(34, 34, 34, 1)",
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
            {data.orderStatus === 1
              ? "Begin Order"
              : data.orderStatus === 2
              ? "Dispatch"
              : data.orderStatus === 3
              ? "Order completed"
              : ""}
          </Button>
        </Grid>
        <Grid item>
          <Box
            sx={{
              border: "0.5px solid rgba(147, 147, 147, 1)",
              width: "587px",
              p: "10px",
              borderRadius: "5px",
            }}
          >
            <Grid container justifyContent="space-between">
              <Grid item className="product-details" sx={{ width: "313px" }}>
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: "20px",
                    lineHeight: "27.32px",
                    letterSpacing: "0.25px",
                    fontFamily: "myAvenirRegular",
                    m: "5px 0px",
                  }}
                >
                  {data.productTitle}
                </Typography>
                <Box sx={{ mt: "10px" }}>
                  <Grid container sx={{ columnGap: "15px", mb: "6px" }}>
                    <Grid item width="78px">
                      {["category", "sub category", "color", "size"].map(
                        (item: string, index: number) => (
                          <Typography
                            key={index}
                            sx={{
                              fontWeight: 350,
                              fontSize: "12px",
                              lineHeight: "16.39px",
                              color: "rgba(99, 99, 99, 1)",
                              letterSpacing: "0",
                              textTransform: "capitalize",
                              mb: "6px !important",
                            }}
                          >
                            {item + ":"}
                          </Typography>
                        )
                      )}
                    </Grid>
                    <Grid item>
                      {[
                        data.category,
                        data.subcategory,
                        data.color,
                        data.size,
                      ].map((item: string, index: number) => (
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 500,
                            lineHeight: "16.39px",
                            letterSpacing: "0",
                            textTransform:
                              index > 1 ? "uppercase" : "capitalize",
                            mb: "6px !important",
                          }}
                        >
                          {item}
                        </Typography>
                      ))}
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    borderRadius: "5px",
                    background: "rgba(245, 245, 245, 1)",
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#000000",
                      p: "10px 10px 4px 12px",
                      borderRadius: "5px",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(99, 99, 99, 1)",
                        fontWeight: 350,
                        marginRight: "5px",
                      }}
                    >
                      Customer Name:
                    </span>{" "}
                    {data.customerName}
                  </Typography>
                  <Divider sx={{ border: "2px solid white" }} />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#000000",
                      p: "6px 10px 5px 12px",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(99, 99, 99, 1)",
                        fontWeight: 350,
                        marginRight: "5px",
                      }}
                    >
                      {" "}
                      Email address:
                    </span>
                    {data.email}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                className="order-details"
                sx={{
                  width: "244px",
                  bgcolor: "rgba(245, 245, 245, 1)",
                  borderRadius: "5px",
                  // p: "0px 0px 15px",
                }}
              >
                <Box
                  className="promotion"
                  sx={{
                    borderRadius: "5px 5px 0px 0px",
                    bgcolor: data.promotionUsed
                      ? "rgba(153, 45, 45, 1)"
                      : "transparent",
                    height: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {data.promotionUsed && (
                    <Typography
                      sx={{
                        fontSize: "8px",
                        fontWeight: 800,
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      Promotion used!
                    </Typography>
                  )}
                </Box>
                <Box sx={{ p: "0px 20px", mt: "5px" }}>
                  <Box className="order-date">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 800,
                        lineHeight: "19.12px",
                        letterSpacing: "0",
                      }}
                    >
                      {`Ordered ${formattedDate(data.orderDate)}`}
                    </Typography>
                  </Box>
                  <Box mt="13px">
                    <Grid container>
                      <Grid item sx={{ width: "99px" }}>
                        {["Subtotal", data.deliveryType, "Order total"].map(
                          (item: string, index: number) => (
                            <Typography
                              key={index}
                              sx={{
                                fontWeight:
                                  index === 1
                                    ? data.deliveryType === "Express Delivery"
                                      ? 900
                                      : 350
                                    : 350,
                                fontSize: "12px",
                                lineHeight: "16.39px",
                                letterSpacing: "0",
                                color:
                                  index === 1
                                    ? data.deliveryType === "Express Delivery"
                                      ? "rgba(19, 56, 191, 1)"
                                      : "rgba(99, 99, 99, 1)  "
                                    : "rgba(99, 99, 99, 1)",
                                mb: "5px !important",
                              }}
                            >
                              {item + ":"}
                            </Typography>
                          )
                        )}
                      </Grid>
                      <Grid item sx={{ width: "105px" }}>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: "12px",
                            lineHeight: "16.39px",
                            textAlign: "right",
                            letterSpacing: "0.5px",
                            mb: "5px !important",
                          }}
                        >
                          {data.promotionUsed ? (
                            <>
                              <span
                                style={{
                                  color: "rgba(147, 147, 147, 1)",
                                  textDecoration: "line-through",
                                  marginRight: "10px",
                                }}
                              >
                                {`£${data.price}`}
                              </span>
                              <span>{`£${
                                (data.price * data.promotionDiscountInPercent) /
                                100
                              }`}</span>
                            </>
                          ) : (
                            <span>{`£${data.price}`}</span>
                          )}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: "12px",
                            lineHeight: "16.39px",
                            textAlign: "right",
                            letterSpacing: "0.5px",
                            mb: "5px !important",
                          }}
                        >
                          <span>{`£${data.deliveryCharges}`}</span>
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: 800,
                            fontSize: "12px",
                            lineHeight: "16.39px",
                            textAlign: "right",
                            letterSpacing: "0.5px",
                            mb: "5px !important",
                          }}
                        >
                          <span>{`£${totalPrice()}`}</span>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container flexWrap="wrap">
                      <Grid item>
                        <Typography
                          sx={{
                            fontWeight: 350,
                            fontSize: "12px",
                            lineHeight: "16.39px",
                            letterSpacing: "0",
                            color: "rgba(99, 99, 99, 1)",
                            mb: "6px !important",
                          }}
                        >
                          Deliver to:
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 800,
                            lineHeight: "16.39px",
                            textTransform: "capitalize",
                            //   mb: "0px !important",
                          }}
                        >
                          {data.address[0].fullName}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            lineHeight: "16.39px",
                            textTransform: "capitalize",
                            //   mb: "3px !important",
                          }}
                        >
                          {data.address[0].street}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            lineHeight: "16.39px",
                            textTransform: "capitalize",
                            //   mb: "3px !important",
                          }}
                        >
                          {data.address[0].city + " " + data.address[0].state}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            fontWeight: 300,
                            lineHeight: "16.39px",
                            textTransform: "capitalize",
                            //   mb: "3px !important",
                          }}
                        >
                          {data.address[0].country}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderNewCard;
