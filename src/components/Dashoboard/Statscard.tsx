import { Box, Typography } from "@mui/material";

const Statscard: any = (props: any) => {



  return (
    <Box sx={{ background: "rgba(0,0,0,0.05)" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          p: "30px 0px",

        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { lg: "30px", xs: "28px" }, fontWeight: "800",color: "#222222" ,fontFamily:"myAvenirBold"}}
        >
          {props.symbol ? props.symbol : null}
          {props.quantity}
        </Typography>
        <Typography paragraph sx={{color: "#222222", fontSize:"16px",fontFamily:"myAvenirLight", fontWeight:350}}>{props.category}</Typography>
      </Box>
    </Box>
  );
};

export default Statscard;
