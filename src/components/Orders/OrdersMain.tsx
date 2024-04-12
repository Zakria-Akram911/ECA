import React, { useState } from "react";
import { Box, Grid, Button } from "@mui/material";

import NewOrders from "./NewOrders";
import { getShippingOrders } from "../../api_calls/Order";

function OrdersMain() {
  const [orders, setOrders] = React.useState("new");
  const [shippingOrders, setShippingOrders] = useState([]);

  React.useEffect(() => {
    getShippingOrders()
      .then((res: any) => {
        setShippingOrders(res.data);
        // const data = res?.data;
        // const cat = data?.length > 0 ? data[0]?.id : null;
        // setCategory(cat);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(shippingOrders);
  return (
    <Box>
      <Grid container sx={{ justifyContent: "center" }}>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setOrders("new")}
            sx={{
              background: `${orders === "new" ? "black" : "white"}`,
              fontWeight: "600",
              color: `${orders === "new" ? "white" : "black"}`,
              border: `${
                orders === "new" ? "0.5px solid #3D0871" : "0.5px solid #DADADA"
              }`,
              boxShadow: `${
                orders === "new"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "5px 0 0 5px",
              "&. :hover": {
                color: `${orders === "new" ? "black" : "white"}`,
              },
            }}
          >
            New
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setOrders("working")}
            sx={{
              background: `${orders === "working" ? "black" : "white"}`,
              fontWeight: "600",
              color: `${orders === "working" ? "white" : "black"}`,
              border: `${
                orders === "working"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              boxShadow: `${
                orders === "working"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "0",
            }}
          >
            Working On
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            className="product-main-category-btns"
            onClick={() => setOrders("dispatched")}
            sx={{
              background: `${orders === "dispatched" ? "black" : "white"}`,
              fontWeight: "600",
              color: `${orders === "dispatched" ? "white" : "black"}`,
              boxShadow: `${
                orders === "dispatched"
                  ? "0px 2px 6px 0px rgba(0, 0, 0, 0.07)"
                  : "none"
              }`,
              border: `${
                orders === "dispatched"
                  ? "0.5px solid #3D0871"
                  : "0.5px solid #DADADA"
              }`,
              textTransform: "math-auto",
              fontSize: "16px",
              p: "5px 25px",
              borderRadius: "0 5px 5px 0",
            }}
          >
            Dispatched
          </Button>
        </Grid>
      </Grid>
      {orders === "new" && (
        <NewOrders shippingOrders={shippingOrders} />
        //   <AllProducts
        //     categories={subcategories}
        //     category={category}
        //     setCategory={setCategory}
        //     update={update}
        //     setUpdate={setUpdate}
        //   />
      )}
      {orders === "working" && (
        <>working</>
        //   <FeaturedProducts
        //     categories={subcategories}
        //     update={update}
        //     category={category}
        //     setCategory={setCategory}
        //     setUpdate={setUpdate}
        //   />
      )}
      {orders === "dispatched" && (
        <>dispatched</>
        //   <NewArrivals
        //     categories={subcategories}
        //     category={category}
        //     setCategory={setCategory}
        //     update={update}
        //     setUpdate={setUpdate}
        //   />
      )}
    </Box>
  );
}

export default OrdersMain;
