
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Typography from "@mui/material/Typography";
// import PaymentMain from "../../components/Payment/PaymentMain";


const PaymentOptions = () => {

  return <Sidebar>

<Box>
        <Typography sx={{ fontSize: "20px", color: "#222222" }}>
        Payment options
        </Typography>
      </Box>
      {/* <Box>
        <Typography
          variant="h1"
          sx={{ fontSize: "40px", fontFamily: "myAvenirBold", fontWeight: "900" }}
        >
          Alya Co Shop
        </Typography>
      </Box>
    
      <Box sx={{ mt: "40px" }}>
        <PaymentMain/>
      </Box> */}
    
    
    </Sidebar>
};

export default PaymentOptions;

