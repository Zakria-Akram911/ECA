import React from "react";
import { Box, Button, Grid, Typography, styled } from "@mui/material";
import upperLine from "../../../assets/line.svg";
import sideLine from "../../../assets/line-1200.png";
import { toast } from "react-toastify";
// import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import DeleteIcon from "../../../assets/red-delete.png";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const BannerHomeAccessories = (props: any) => {
    const [imagePreview, setImagePreview] = React.useState<any>(props?.bannerURL);
  const [image, setImage] = React.useState();
  // const [category, setCategory] = React.useState(props?.category[0]);
  console.log(image);

  const handleImageSelect = (e: any) => {
    if (e?.target) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = () => {
          if (img.width !== 1195 || img.height !== 1200) {
            toast.error("Dimensions should need to be exact 1195px x 1200px");
          } else {
            setImage(file);
            setImagePreview(event.target?.result as string);
          }
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSendtoApp = () => {};

  const handleDelete = () => {}
  return (
    <Grid
        container
        sx={{
          justifyContent: "flex-start",
        }}
      >
        <Grid item xs={4.7} sx={{}}>
          <Box
            sx={{
              height: "251px",
              bgcolor: "rgba(245, 245, 245, 1)",
              p: "24px 40px",
              borderRadius: "5px",
            }}
            className="accessory-main-div"
          >
            <Box sx={{ position: "relative" }}>
              <Box sx={{ textAlign: "right", marginRight: "-15px" }}>
                <Box
                  component="img"
                  src={DeleteIcon}
                  onClick={handleDelete}
                  sx={{ cursor: "pointer" }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "600",
                    lineHeight: "34.15px",
                    letterSpacing: "0.31px",
                    color: "black",
                  }}
                >
                  Accessories
                </Typography>
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "500",
                    lineHeight: "21.86px",
                    letterSpacing: "0.2px",
                    color: "black",
                  }}
                >
                  Important tip
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    color: "rgba(99, 99, 99, 1)",
                    fontSize: "12px",
                    lineHeight: "16.39px",
                    letterSpacing: "0.5px",
                    mt: "10px",
                  }}
                >
                  Craft your banner to make a strong first impression, convey
                  your brand, and highlight key product features.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#222222",
                  color: "White",
                  width: "100%",
                  mt: 2,
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "37px",
                  boxShadow: "none",
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "#222222",
                    boxShadow: "none",
                  },
                }}
                onClick={handleSendtoApp}
              >
                Send to app
              </Button>
            </Box>
          </Box>
          <Box
            className="delete-this-banner-main-div"
            sx={{
              height: "265px",
              bgcolor: "rgba(245, 245, 245, 1)",
              p: 5,
              mt: "30px",
              borderRadius: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "21.86px",
                letterSpacing: "0.2px",
                color: "black",
              }}
            >
              Delete this banner?
            </Typography>
            <Typography
              paragraph
              sx={{
                color: "rgba(99, 99, 99, 1)",
                fontSize: "12px",
                lineHeight: "16.39px",
                letterSpacing: "0.5px",
                mt: "10px",
              }}
            >
              Home banners are important to direct your customers onto a
              category.
            </Typography>
            <Typography
              paragraph
              sx={{
                color: "rgba(99, 99, 99, 1)",
                fontSize: "12px",
                lineHeight: "16.39px",
                letterSpacing: "0.5px",
                mt: "10px",
              }}
            >
              <b>Note:</b> Deleting the banner will not delete the category.
              Remember to relocate the category onto a new banner.
            </Typography>
            <Box>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "rgba(142, 49, 49, 1)",
                  color: "White",
                  width: "100%",
                  mt: 2,
                  fontSize: "18px",
                  lineHeight: "24.59px",
                  letterSpacing: "0.22px",
                  fontWeight: "bold",
                  height: "37px",
                  boxShadow: "none",
                  textTransform: "none",
                  ":hover": {
                    bgcolor: "rgba(142, 49, 49, 1)",
                    boxShadow: "none",
                  },
                }}
                onClick={handleDelete}
              >
                Delete this banner
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={0.3}></Grid>
        <Grid
          item
          xs={4.7}
          sx={{
            bgcolor: "#F5F5F5",
            border: "5px solid #FFFFFF",
            borderRadius: "30px 30px 0px 0px",
            boxShadow: "2px 5px 15px 0px #00000016",
            px: 2.5,
            pt: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "628px",
          }}
        >
          <Box
            sx={
              {
                // height: "60%",
              }
            }
          >
            <Typography
              sx={{
                fontFamily: "myAvenirRegular",
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: "16px",
                textAlign: "center",
                color: "#222222",
              }}
            >
              1195px
            </Typography>
            <img
              src={upperLine}
              width="323px"
              style={{ marginBottom: "16px", marginTop: "10px" }}
            />

            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Button
                component="label"
                variant="contained"
                sx={{
                  width: "100%",
                  padding: "0",
                  height: { md: "334px", xs: "90px" },
                  background: "#9B9B9B",
                  color: "rgba(0,0,0,0.2)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                  //   backgroundImage: imagePreview ? `url(${imagePreview})` : "",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&:hover": {
                    //background: "#808080",
                    color: "white",
                  },
                }}
              >
                {imagePreview ? null : <AddPhotoAlternateOutlinedIcon sx={{color:"white"}} />}
                <VisuallyHiddenInput type="file" onChange={handleImageSelect} />
              </Button>
            </Box>
            <Typography
              sx={{
                fontFamily: "Helvetica",
                fontSize: "12px",
                fontWeight: 350,
                lineHeight: "16px",
                textAlign: "center",
                color: "#222222",
                mt: 2,
              }}
            >
              🛈 Dimensions need to be exact
            </Typography>
          </Box>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <img
            src={sideLine}
            style={{ marginTop: "174px", paddingLeft: "5px", height: "336px" }}
          />
          <Typography
            sx={{
              pt: 41.5,
              ml: 2,
              fontFamily: "myAvenirRegular",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "16px",
              textAlign: "center",
              color: "#222222",
            }}
          >
            1200px
          </Typography>
        </Grid>
      </Grid>
  )
}

export default BannerHomeAccessories