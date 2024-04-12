import {
  Box,
  Divider,
  Grid,
  List,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";

function OrdersCard(props: any) {
  const maxwidthsmall = useMediaQuery("(max-width:900px)");

  function formatOrderDate(orderDate: any) {
    if (!orderDate || orderDate.length !== 14) {
      return "Invalid date";
    }
    const year = orderDate.substring(0, 4);
    const month = orderDate.substring(4, 6);
    const day = orderDate.substring(6, 8);

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
  }
  return (
    <Grid
      sx={{
        border: "0.5px solid #939393",
        borderRadius: "5px",
        m: 0,
        p: "20px",
        display: "flex",
        justifyContent: "space-between",
        width: props.largeSize ? "709px" : "100%",
      }}
    >
      <Grid item xs={maxwidthsmall ? 7 : 6}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 800,
            letterSpacing: "0.25px",
            fontFamily: "myAvenirBold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.name}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <List>
            {["Category", "Sub Category", "Color", "Size"].map(
              (item: any, index: any) => (
                <ListItemText
                  sx={{
                    fontFamily: "myAvenirMedium",
                    fontSize: "12px",
                    fontWeight: 350,
                    color: "#636363",
                    lineHeight: 2,
                  }}
                  key={index}
                  primary={`${item}:`}
                  disableTypography
                />
              )
            )}
          </List>

          <List sx={{ pl: 2 }}>
            {[
              `${props.category}`,
              `${props.subcategory}`,
              `${props.color}`,
              `${props.size}`,
            ].map((item: any, index: any) => (
              <ListItemText
                sx={{
                  fontFamily: "myAvenirMedium",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 2,
                }}
                key={index}
                primary={item}
                disableTypography
              />
            ))}
          </List>
        </Box>

        <Box sx={{ borderRadius: "5px", background: "#F5F5F5", mt: 4.5 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#000000",
              p: "9px",
            }}
          >
            <span style={{ color: "#636363", fontWeight: 350 }}>
              Customer Name:
            </span>{" "}
            {props.fullName}
          </Typography>
          <Divider sx={{ border: "2px solid white" }} />
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#000000",
              p: "9px",
            }}
          >
            <span style={{ color: "#636363", fontWeight: 350 }}>
              {" "}
              Email address:{" "}
            </span>
            {props.email}
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        sx={{ pl: "50px" }}
        xs={maxwidthsmall ? 6 : 5.6}
        justifyContent="flex-end"
      >
        <Box sx={{ borderRadius: "5px", background: "#F5F5F5", p: "20px" }}>
          <Typography
            sx={{ fontFamily: "myAvenirBold", fontSize: "14px" }}
          >{`Dispatch by ${formatOrderDate(props.onGoingDate)}`}</Typography>
          <Typography
            sx={{
              fontFamily: "myAvenirMedium",
              fontSize: "12px",
              fontWeight: 350,
              color: "#636363",
              lineHeight: "normal",
            }}
          >{`Ordered ${formatOrderDate(props.orderDate)}`}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <List>
              {[
                "Express delivery",
                "Item total",
                "Promotion used",
                "Order total",
                "Deliver to",
              ].map((item: any, index: any) => (
                <ListItemText
                  sx={{
                    fontFamily: "myAvenirMedium",
                    fontSize: "12px",
                    fontWeight: 350,
                    color: "#636363",
                    lineHeight: "normal",
                  }}
                  key={index}
                  primary={`${item}:`}
                  disableTypography
                />
              ))}
            </List>

            <List sx={{ pl: 2 }}>
              {[
                `£${props.shippingFee}`,
                "£119.30",
                "50%",
                `£${props.total}`,
              ].map((item: any, index: any) => (
                <ListItemText
                  sx={{
                    fontFamily: "myAvenirMedium",
                    fontSize: "12px",
                    fontWeight: 800,
                    lineHeight: "normal",
                    textAlign: "right",
                  }}
                  key={index}
                  primary={item}
                  disableTypography
                />
              ))}
            </List>
          </Box>
          {props.address.map((address: any, index: any) => (
            <Typography
              key={index} // Don't forget to add a unique key for each item in the map function
              sx={{
                color: "#000",
                fontFamily: "myAvenirMedium",
                fontSize: "12px",
                fontWeight: 350,
                lineHeight: "normal",
              }}
            >
              <span style={{ fontWeight: 800 }}> {address.fullName}</span>
              <br />
              {address.street}
              <br />
              {address.city}
              {address.state}
              <br />
              {address.country}
            </Typography>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default OrdersCard;
