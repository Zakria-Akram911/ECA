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
import sideLine from "../../assets/sideLine.svg";
import { toast } from "react-toastify";
// import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import DoneIcon from "@mui/icons-material/Done";
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

const BannerShop = (props: any) => {
  const [imagePreview, setImagePreview] = React.useState<any>(props?.bannerURL);
  const [image, setImage] = React.useState();
  const [category, setCategory] = React.useState(props?.category[0]);
  const [numberOfItem, setNumberOfItems] = React.useState<any>(1);
  const [radioSelection, setRadioSelection] = React.useState<any>();
  console.log(image);

  const handleImageSelect = (e: any) => {
    if (e?.target) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target?.result as string;

        img.onload = () => {
          if (img.width !== 1082 || img.height !== 305) {
            toast.error("Dimensions should need to be exact 1082px x 305px");
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

  const handleAssignSelected = () => {};

  const handleRadioChange = (e: any): void => {
    setRadioSelection(e.target.value);
  };
  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
      }}
    >
      <Grid
        container
        sx={{
          justifyContent: "flex-start",
        }}
      >
        <Grid item xs={4.7} sx={{}}>
          <Box
            sx={{
              height: "358px",
              bgcolor: "rgba(245, 245, 245, 1)",
              p: 5,
              borderRadius: "5px",
            }}
            className="accessory-main-div"
          >
            <Box sx={{ position: "relative" }}>
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
                  Shop
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
                      1. Ensure the text on the left is visible
                    </li>
                    <li
                      style={{
                        fontSize: "14px",
                        lineHeight: "16.39px",
                        color: "rgba(99, 99, 99, 1)",
                        marginBottom: "10px",
                      }}
                    >
                      2. Add picture on new sub-category too
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
                      background: "white",
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
                      {category || "Add Category"}
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
                          background: "white",
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
                              "& .MuiMenu-paper": {
                                backgroundColor: "whitesmoke",
                              },
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: "12px 0px",
                    borderBottom: "0.5px solid rgba(182, 195, 211, 1)",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        lineHeight: "19.12px",
                      }}
                    >
                      Shop order
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        background: "white",
                        color: "black",
                        width: "48px",
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
                        {numberOfItem}
                      </Typography>
                    </Box>
                    <Box>
                      <FormControl sx={{}}>
                        <Select
                          value={""}
                          onChange={(e: any) => {
                            setNumberOfItems(e.target.value);
                          }}
                          displayEmpty
                          inputProps={{ "aria-label": "Without label" }}
                          placeholder="Choose Category"
                          IconComponent={KeyboardArrowDownIcon}
                          sx={{
                            background: "white",
                            border: "0.5px solid #939393",
                            // color: "black",
                            width: "96px",
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
                          {props.numberOfItems?.map((numberOfItem: any) => (
                            <MenuItem
                              value={numberOfItem}
                              sx={{
                                color: "black",
                                bgcolor: "whitesmoke",
                                fontSize: "14px",
                                fontFamily: "myAvenirLight",
                                "& .MuiPaper-root": {
                                  backgroundColor: "whitesmoke",
                                },
                                "& .MuiMenu-paper": {
                                  backgroundColor: "whitesmoke",
                                },
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
                              {numberOfItem}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
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
          </Box>
          <Box
            className="delete-this-banner-main-div"
            sx={{
              height: "337px",
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
              Unassigned shop
            </Typography>
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
                  1. Select the unassigned shop
                </li>
                <li
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.39px",
                    color: "rgba(99, 99, 99, 1)",
                    marginBottom: "10px",
                  }}
                >
                  2. Click on Assign selected
                </li>
                <li
                  style={{
                    fontSize: "14px",
                    lineHeight: "16.39px",
                    color: "rgba(99, 99, 99, 1)",
                    marginBottom: "10px",
                  }}
                >
                  3. Add photo on Shop section
                </li>
              </ul>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Box sx={{ position: "relative" }}>
                  <input
                    type="radio"
                    name="radioOptions"
                    value="dresses"
                    style={{
                      transform: "scale(1.5)",
                      opacity: "0",
                      zIndex: "2",
                      position: "relative",
                      cursor: "pointer",
                    }}
                    checked={radioSelection === "dresses"}
                    onChange={handleRadioChange}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      background:
                        radioSelection === "dresses" ? "black" : "white",
                      border:
                        radioSelection === "dresses"
                          ? "3px solid black"
                          : "3px solid rgba(200, 198, 198, 1)",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      top: "1px",
                      left: "-4px",
                    }}
                  >
                    <Box sx={{ position: "absolute", top: "0px" }}>
                      <DoneIcon
                        sx={{
                          color: "white",
                          fontSize: "15px",
                          display:
                            radioSelection === "dresses" ? "inherit" : "none",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "0.5px solid black",
                    background: "white",
                    width: "239px",
                    height: "35px",
                    borderRadius: "5px",
                    // textAlign:"center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "19.12px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Dresses
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  mt: 1.5,
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <input
                    type="radio"
                    name="radioOptions"
                    value="wallets"
                    style={{
                      transform: "scale(1.5)",
                      opacity: "0",
                      position: "relative",
                      zIndex: "2",
                      cursor: "pointer",
                    }}
                    checked={radioSelection === "wallets"}
                    onChange={handleRadioChange}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      background:
                        radioSelection === "wallets" ? "black" : "white",
                      border:
                        radioSelection === "wallets"
                          ? "3px solid black"
                          : "3px solid rgba(200, 198, 198, 1)",
                      height: "20px",
                      width: "20px",
                      borderRadius: "50%",
                      top: "1px",
                      left: "-4px",
                    }}
                  >
                    <Box sx={{ position: "absolute", top: "0px" }}>
                      <DoneIcon
                        sx={{
                          color: "white",
                          fontSize: "15px",
                          display:
                            radioSelection === "wallets" ? "inherit" : "none",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    border: "0.5px solid black",
                    width: "239px",
                    height: "35px",
                    borderRadius: "5px",
                    background: "white",
                    // textAlign:"center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      lineHeight: "19.12px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Wallets
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* <Typography
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
            </Typography> */}
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
                onClick={handleAssignSelected}
              >
                Assign Selected
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
            pt: 12,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "467px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "60%",
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
              1082px
            </Typography>
            <img
              src={upperLine}
              width="312px"
              style={{ marginBottom: "16px", marginTop: "10px" }}
            />

            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Button
                component="label"
                variant="contained"
                sx={{
                  width: "100%",
                  padding: "0",
                  height: { md: "104px", xs: "90px" },
                  background: "#9B9B9B",
                  color: "rgba(0,0,0,0.2)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
                  backgroundImage: imagePreview ? `url(${imagePreview})` : "",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  "&:hover": {
                    //background: "#808080",
                    color: "white",
                  },
                }}
              >
                {imagePreview ? null : (
                  <AddPhotoAlternateOutlinedIcon sx={{ color: "white" }} />
                )}
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
                mt: 3,
                position: "relative",
                zIndex: "2",
              }}
            >
              🛈 Dimensions need to be exact
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              // height: "80px",
              justifyContent: "space-between",
              flexWrap: "wrap",
              mt: 0,
            }}
          >
            <Box
              sx={{
                bgcolor: "#ECECEC",
                width: "100%",
                borderRadius: "5px 5px 0px 0px",
                height: "104px",
                mt: -3,
                zIndex: "1",
              }}
            />
            <Box
              sx={{
                bgcolor: "#ECECEC",
                width: "100%",
                borderRadius: "5px 5px 0px 0px",
                height: "104px",
                mt: 2,
              }}
            />
          </Box>
        </Grid>
        <Grid item sx={{ display: "flex" }}>
          <img
            src={sideLine}
            style={{ marginTop: "154px", paddingLeft: "5px", height: "104px" }}
          />
          <Typography
            sx={{
              pt: 24.5,
              ml: 2,
              fontFamily: "myAvenirRegular",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "16px",
              textAlign: "center",
              color: "#222222",
            }}
          >
            305px
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerShop;
