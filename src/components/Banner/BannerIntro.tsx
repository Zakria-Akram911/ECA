import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  styled,
  Switch,
  CircularProgress,
} from "@mui/material";
import upperLine from "../../assets/line.svg";
import sideLine from "../../assets/sideLine.svg";
import { toast } from "react-toastify";
// import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  addIntroBanner,
  getIntroBanner,
  updateIntroBanner,
} from "../../api_calls/Banners";
import { PushNotification } from "../../api_calls/Products";

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

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 6,
  "& .MuiSwitch-track": {
    borderRadius: 30 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 20,
    height: 20,
    margin: 0,
  },
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#1338bf" : "#1338bf",
      },
    },
  },
}));

const BannerIntro = (props: any) => {
  const [imagePreview, setImagePreview] = useState<any>(props?.bannerURL);
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [formValues, setFormValues] = useState<any>({
    title: "",
    subtitle: "",
    sendNotification: false,
  });
  const [submitted, setSubmitted] = useState<any>(null);
  const [titleFocused, setTitleFocused] = useState(false);
  const [subTitleFocused, setsubTitleFocused] = useState(false);

  const [introBanner, setIntroBanner] = useState<any>(null);

  useEffect(() => {
    getIntroBanner()
      .then((res: any) => setIntroBanner(res.data))
      .catch((err: any) => err);
  }, []);

  useEffect(() => {
    if (introBanner?.category) {
      setCategory(introBanner?.category);
    }
    if (introBanner?.imageURL) {
      setImagePreview(introBanner?.imageURL);
    }
  }, [introBanner]);

  const handleFormChange = (e: any): void => {
    const { name, value, checked } = e.target;
    const newValue = name == "sendNotification" ? checked : value;
    setFormValues({
      ...formValues,
      [name]: newValue,
    });
  };

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

  const handleSendtoApp = async (e: any) => {
    setSubmitted("pending");
    e.preventDefault();
    if (!image && !imagePreview) {
      toast.error("Please upload an image for the banner.");
    } else if (
      !category ||
      (formValues?.sendNotification
        ? !formValues?.title || !formValues?.subtitle
        : false)
    ) {
      toast.error("Please fill all fields.");
    }

    const formData = new FormData();
    if (introBanner?.category) {
      let toUpdate = false;

      if (category !== introBanner?.category) {
        toUpdate = true;
      }
      if (imagePreview !== introBanner?.imageURL) {
        toUpdate = true;
        formData.append("bannerImage", image);
      }
      if (toUpdate) {
        formData.append("category", category);

        setSubmitted("inProgress");
        const response = await updateIntroBanner(formData);

        if (response?.status === 200) {
          toast.success(response?.data?.message);
          setSubmitted("fulfilled");
        } else if (response?.status === 400) {
          toast.error(response?.data?.error);
          setSubmitted("error");
        } else {
          toast.error("Error Updating the Banner");
          setSubmitted("error");
        }
      }
    } else if (category && image) {
      formData.append("category", category);

      formData.append("bannerImage", image);
      setSubmitted("inProgress");

      const response = await addIntroBanner(formData);

      if (response?.status === 200) {
        setSubmitted("fulfilled");
        toast.success(response?.data?.message);
      } else if (response?.status === 400) {
        toast.error(response?.data?.error);
        setSubmitted("error");
      } else {
        toast.error("Error Adding the Banner");
        setSubmitted("error");
      }
    }

    if (
      formValues.sendNotification &&
      formValues?.title &&
      formValues?.subtitle
    ) {
      const title = formValues?.title;
      const body = formValues?.subtitle;
      const notifUID = title;
      const imageURL = props.productImage ? props.productImage : "";
      const type = "Intro Banner";

      PushNotification({ title, body, notifUID, imageURL, type }).then(
        (response: any) => {
          if (response?.status === 201) {
            setSubmitted("fulfilled");
            toast.success(response?.data?.message);
          } else {
            toast.error("Could not send the notification.");
            setSubmitted("error");
          }
        }
      );
    }
  };

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
                Intro banner
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
                  3. Connect category below & upload an image.
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
                  border:
                    submitted === "pending" && !category
                      ? "0.5px solid red"
                      : "0.5px solid #939393",
                  position: "absolute",
                  top: "0",
                  left: "0px",
                  zIndex: "99",
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
                  {category || "Select Category"}
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
                      border:
                        submitted === "pending" && !category
                          ? "0.5px solid red"
                          : "0.5px solid #939393",
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
                        value={category?.id}
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
                            bgcolor: "#222222",
                            color: "white",
                          },
                          "&.Mui-selected": {
                            color: "black",
                            bgcolor: "white",
                          },
                          "&.Mui-selected: hover": {
                            color: "white",
                            bgcolor: "#222222",
                          },
                        }}
                      >
                        {category?.category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box sx={{ m: "20px 0px 5px" }}>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "21.84px",
                  letterSpacing: "0.2px",
                  color: "black",
                }}
              >
                Push Notifications
              </Typography>
            </Box>
            <Box>
              <form>
                <FormControl>
                  <Box sx={{ m: "5px 0px" }}>
                    <FormLabel sx={{ fontSize: "12px", lineHeight: "16.39px" }}>
                      <span
                        style={{
                          display: formValues?.sendNotification
                            ? "inherit"
                            : "none",
                        }}
                      >
                        *
                      </span>{" "}
                      A title to catch your audience attention
                    </FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      placeholder={
                        titleFocused ? "" : "Title i.e. ‘New Season’"
                      }
                      name="title"
                      disabled={!formValues?.sendNotification}
                      value={formValues.title}
                      onChange={handleFormChange}
                      onFocus={() => {
                        setTitleFocused(true);
                      }}
                      onBlur={() => {
                        setTitleFocused(false);
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          height: "37px",
                          background: formValues?.sendNotification
                            ? "white"
                            : "",
                          border:
                            formValues?.sendNotification &&
                            submitted === "pending"
                              ? formValues?.title
                                ? ""
                                : "1px solid red"
                              : "",
                        },
                        // "& input": {
                        //   p: "20px 10px",
                        // },
                        "& ::placeholder": {
                          fontSize: "13px",
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ m: "5px 0px" }}>
                    <FormLabel sx={{ fontSize: "12px", lineHeight: "16.39px" }}>
                      <span
                        style={{
                          display: formValues?.sendNotification
                            ? "inherit"
                            : "none",
                        }}
                      >
                        *
                      </span>
                      A subtitle to preview what’s in store
                    </FormLabel>
                    <TextField
                      variant="outlined"
                      fullWidth
                      multiline
                      disabled={!formValues?.sendNotification}
                      rows={2}
                      placeholder={
                        subTitleFocused
                          ? ""
                          : "Subtitle i.e. ‘All new spring dresses’"
                      }
                      name="subtitle"
                      onFocus={() => {
                        setsubTitleFocused(true);
                      }}
                      onBlur={() => {
                        setsubTitleFocused(false);
                      }}
                      value={formValues.subtitle}
                      onChange={handleFormChange}
                      sx={{
                        "& .MuiInputBase-root": {
                          p: "5px 10px",
                          background: formValues?.sendNotification
                            ? "white"
                            : "",
                          border:
                            formValues?.sendNotification &&
                            submitted === "pending"
                              ? formValues?.subtitle
                                ? ""
                                : "1px solid red"
                              : "",
                        },
                        "& ::placeholder": {
                          fontSize: "13px",
                        },
                      }}
                    />
                  </Box>
                </FormControl>
              </form>
            </Box>
          </Box>
          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(0,0,0,0.2)",
              pt: "10px",
              pb: "10px",
              pr: "10px",
            }}
          >
            <Grid item xs={5}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "14px",
                  // color: `${disableFeature ? "#B3C3D5" : "#1F2834"}`,
                  fontWeight: 600,
                  lineHeight: "19.12px",
                  fontFamily: "myAvenirRegular",
                }}
              >
                Send notification
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Android12Switch
                    sx={{ m: 0 }}
                    checked={formValues.sendNotification}
                    name="sendNotification"
                    onChange={handleFormChange}
                  />
                }
                label=""
                sx={{ m: "0" }}
              />
            </Grid>
          </Grid>
          <Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: submitted === "fulfilled" ? "#33AB53" : "#222222",
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
              {submitted === "inProgress" ? (
                <CircularProgress size="1rem" sx={{ color: "#fafafa" }} />
              ) : submitted === "fulfilled" ? (
                "Sent to app"
              ) : (
                "Send to app"
              )}
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
            justifyContent: "space-between",
            maxHeight: "350px",
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
            style={{ marginTop: "94px", paddingLeft: "5px", height: "104px" }}
          />
          <Typography
            sx={{
              pt: 17.5,
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

export default BannerIntro;
