import { Box, Button, Grid, useMediaQuery, } from "@mui/material";
import defaultImage from "../../assets/defaultImage.jpg";
import OrdersCard from "./OrdersCard";
import speech from '../../assets/speech-bubble.png';
import { Link } from "react-router-dom";
function NewOrders(props: any) {

  // const matchesSmallScreen = useMediaQuery("(max-width:1000px)");
  const matchesMediumScreen = useMediaQuery("(min-width:0px) and (max-width:1200px)");
  const matchesLargeScreen = useMediaQuery("(min-width:1410px)");

const shippingOrders = props.shippingOrders;
console.log(shippingOrders)

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
      {shippingOrders.map((order: any, index: any) => (
        <>
        <Grid item xs={matchesMediumScreen? 6: 3} key={index} sx={{ mt: "40px" }} >
        <Box className="product-image" sx={{ height: "275px", width: "100%" }}>
              <Box
                sx={{
                  height: "100%",
                  width:matchesLargeScreen ?  "262px" : "100%",
                  borderRadius: "8px",
                  objectFit: "cover",
                  objectPosition: "top",
                  backgroundImage: order.imageUrl
                  ? `url(${order.imageUrl
                  })` : `url(${defaultImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />

              </Box>

          <Button
            className="add-product-btn"
            sx={{
              background: "black",
              width: matchesLargeScreen ?  "262px" : "100%",
              fontSize: "18px",
              mt: 2,
              color: "white",
              p: "4px 58px",
              fontWeight: "600",
              textTransform: "math-auto",
              border: "0.5px solid #000",
              boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
            }}
          >
            Begin Order
          </Button>
        </Grid>
        <Grid item xs={matchesMediumScreen? 11: 8} sx={{ mt: "40px" }}>
        <OrdersCard
        largeSize={matchesLargeScreen}
      
        name={order.name}
        category={order.category}
        subcategory={order.subcategory}
        color={order.color}
        size={order.size}
        fullName={order.fullName}
        email={order.email}
        total={order.total}
        orderDate={order.orderDate}
        shippingFee={order.shippingFee}
        onGoingDate={order.onGoingDate}
        deliveredDate={order.deliveredDate}
        address={order.addresses}

        />
       
        </Grid>
        <Grid item xs={1} sx={{mt:'40px'}}>
          <Link to='/chats'>
        <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
  <g>
    <circle cx="23.5" cy="21.5" r="17.5" fill="#222222"/>
    <circle cx="23.5" cy="21.5" r="17.25" stroke="#DADADA" stroke-width="0.5"/>
    <image href={speech} width="17" x="15" y="13" height="17" />
  </g>
</svg>
</Link>
        </Grid>
        </>
      )) } 
      </Grid>
    </Box>
  );
}

export default NewOrders;
