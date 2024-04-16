import { Box, Typography, TextField } from "@mui/material";



const Stock = (props: any) => {
  
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}}>Stock quantity</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          Make sure you have enoguh
        </Typography>
      </Box>
      <Box>
        <TextField
        
          placeholder="E.g 69"
          sx={{ width: { xs: "100%", lg: "80px"},
          "& fieldset": { border: 'none' },
          outline:"none" , border:"0.5px solid #939393",
          borderRadius:"3px",
          boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.10) inset",
          fontSize:"13px",
          fontFamily:"myAvenirRegular" }}
          value={props.productStock}
          onChange={(e: any) => props.setproductStock(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Stock;
