import { Box, Typography, TextField } from "@mui/material";


const ProductDetails = (props: any) => {
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}}>Product details</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          Include keywords that buyers would use to search for this item
        </Typography>
      </Box>
      <Box>
        <TextField
          //   placeholder="E.g 001"
          sx={{ width: { md: "50%", xs: "100%" },
          "& fieldset": { border: 'none' },
          borderRadius:"5px",
          border:"0.5px solid #939393",
          boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.10) inset" ,
          fontSize:"13px",
          fontFamily:"myAvenirRegular"}}
          //   variant="outlined"
          multiline
          rows={5}
          value={props.productDetail}
          onChange={(e: any) => props.setProductDetail(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default ProductDetails;
