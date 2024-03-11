import { Box, Typography, TextField } from "@mui/material";


const Price = (props: any) => {
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}}>Price</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          A good price matters
        </Typography>
      </Box>
      <Box sx={{display:"flex",gap:"5px",alignItems:"center"}}>
        <Typography>£</Typography>
        <TextField
          // placeholder="£"
          sx={{ width: { xs: "100%", lg: "80px"},
          "& fieldset": { border: 'none' },
          border:"0.5px solid #939393",
          borderRadius:"3px",
          boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.10) inset",
          fontSize:"13px",
          fontFamily:"myAvenirRegular"
          }}
          value={props.productPrice}
          onChange={(e: any) => props.setProductPrice(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Price;
