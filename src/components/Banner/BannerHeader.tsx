import { Box, Typography } from "@mui/material"


function BannerHeader() {
  return (
   <Box sx={{borderRadius: '4px',
    opacity: '0.9896',
    background: '#F0EBE3',
    p:'30px 30.5px'}}>
  <Typography
  sx={{color: '#1F2834',
    fontFamily: 'AirbnbCerealWBk',
    fontSize: '19px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '0.237px'}}>Banners are important to showcase the category of your product. Need creative tips?
    <span style={{textDecorationLine: 'underline'}}>Learn more</span></Typography>
   </Box>
  )
}

export default BannerHeader
