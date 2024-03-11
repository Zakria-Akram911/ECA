import { Box, Typography, TextField } from "@mui/material";


const Title = (props: any) => {
  return (
    <Box>
      <Box>
        <Typography variant="h6"  sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}} >Title</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          Include keywords that buyers would use to search for this item
        </Typography>
      </Box>
      <Box>
        <TextField
          //   placeholder="E.g 001"
          sx={{ width: { xs: "100%", md: "50%" } ,
          "& fieldset": { border: 'none' },
          borderRadius: "3px",
          border:"0.5px solid #939393",
          background:"#FFF",
          boxShadow:"0px 0px 4px 1px rgba(0, 0, 0, 0.10) inset"
          }}
          value={props.productTitle}
          onChange={(e: any) => props.setProductTitle(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default Title;
