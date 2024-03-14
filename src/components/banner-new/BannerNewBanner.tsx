import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
  styled,
} from "@mui/material";
import upperLine from "../../assets/line.svg";
import sideLine from "../../assets/line-1200.png";
import { toast } from "react-toastify";
// import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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

const BannerNewBanner = (props: any) => {
  const [imagePreview, setImagePreview] = React.useState<any>(props?.bannerURL);
  const [image, setImage] = React.useState();
  const [category, setCategory] = React.useState(props?.category[0]);
  console.log(image);
  console.log(category)

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

  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "flex-start",
        }}
      >
        <Grid
          item
          xs={4.7}
          sx={{
            bgcolor: "rgba(245, 245, 245, 1)",
            p: 5,
            borderRadius: "5px",
            height:"326px"
          }}
        >
          <Box>
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
                New Banner
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "21.86px",
                  letterSpacing: "0.2px",
                  color: "black",
                }}
              >
                Important steps
              </Typography>
            </Box>
            <Box sx={{ m: "15px 0px 20px" }}>
              <ul
                style={{
                  listStyle: "none",
                }}
              >
                <li
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.39px",
                    color: "rgba(99, 99, 99, 1)",
                    marginBottom: "10px",
                  }}
                >
                  1. Create a new category & subcategories.
                </li>
                <li
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.39px",
                    color: "rgba(99, 99, 99, 1)",
                    marginBottom: "10px",
                  }}
                >
                  2. Add all relevant product to the category.
                </li>
                <li
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.39px",
                    color: "rgba(99, 99, 99, 1)",
                    marginBottom: "10px",
                  }}
                >
                  3. Select below the newly made category
                </li>
              </ul>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  background: "whitesmoke",
                  color: "black",
                  width: "240px",
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "none",
                  borderRadius: "5px 0px 0px 5px",
                  position: "absolute",
                  top: "0",
                  left: "0px",
                  zIndex: "99",
                  border: "0.5px solid #939393",
                  p: 0,
                }}
                className="menuDropdownList"
              >
                <Typography
                  paragraph
                  sx={{
                    color: "black",
                    fontSize: "14px",
                    lineHeight: "19.12px",
                    fontFamily: "myAvenirLight",
                  }}
                >
                  {"Select Category"}
                </Typography>
              </Box>
              <Box>
                <FormControl sx={{}}>
                  <Select
                    value={""}
                    onChange={(e: any) => {
                      setCategory(e.target.value);
                    }}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    placeholder="Choose Category"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      background: "whitesmoke",
                      border: "0.5px solid #939393",
                      // color: "black",
                      width: "283px",
                      height: "35px",
                      borderRadius: "5px",
                      position: "relative",
                      boxShadow: 0,
                      // "&:hover": { border: "none" },
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },

                      "& .MuiSelect-icon": {
                        right: "10px", // Adjust the right value as needed
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "black",
                        boxShadow: 0,
                      },
                    }}
                  >
                    {props.category?.map((category: any) => (
                      <MenuItem
                        value={category}
                        sx={{
                          color: "black",
                          bgcolor: "whitesmoke",
                          fontSize: "14px",
                          fontFamily: "myAvenirLight",
                          "& .MuiPaper-root": {
                            backgroundColor: "whitesmoke",
                          },
                          "& .MuiMenu-paper": { backgroundColor: "whitesmoke" },
                          "&:hover": {
                            bgcolor: "black",
                            color: "white",
                          },
                          "&.Mui-selected": {
                            color: "black",
                            bgcolor: "white",
                          },
                          "&.Mui-selected: hover": {
                            color: "white",
                            bgcolor: "black",
                          },
                        }}
                      >
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
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
            alignItems:"center",
            height: "628px",
          }}
        >
          <Box
            sx={{
              // height: "60%",
            }}
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
    </Box>
  );
}

export default BannerNewBanner