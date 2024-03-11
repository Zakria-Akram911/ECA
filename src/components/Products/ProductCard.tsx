import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Switch,
  Grid,
  FormControlLabel,
  useMediaQuery,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import defaultImage from "../../assets/defaultImage.jpg";
import { useNavigate } from "react-router-dom";
import {
  PushNotification,
  toggleProduct,
  updateProduct,
} from "../../api_calls/Products";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { toast } from "react-toastify";

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

const ProductCard = (props: any) => {
  // const matchesSmallScreen = useMediaQuery("(max-width:1000px)");
  const matchesMediumScreen = useMediaQuery(
    "(min-width:1000px) and (max-width:1280px)"
  );
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");
  const initialState = {
    isShow: props.show,
    featured: props.featured,
    newArrival: props.newArrival,
  };
  const navigate = useNavigate();
  const [switchValue, setSwitchValue] = React.useState(initialState);
  const [disableFeature, setDisableFeature] = React.useState(
    Math.round(parseFloat(props?.featuredRemainingTime ?? 0))
  );
  // const [disableNewArrival, setDisableNewArrivals] = React.useState(
  //   Math.round(parseFloat(props?.newArrivalRemainingTime ?? 0))
  // );

  const [disableNewArrival] = React.useState(
    Math.round(parseFloat(props?.newArrivalRemainingTime ?? 0))
  );

  const [subCategoryList, setSubCategoryList] = useState([]);
  const [category, setCategory] = useState(props?.category);
  const [subcategory, setSubCategory] = useState(props?.subCategory);

  useEffect(() => {
    if (props?.category) {
      const matchCategory = props.categoryList?.find(
        (cat: any) => cat?.category === props?.category
      );
      setSubCategoryList(matchCategory?.subcategories);
    }
  }, [props?.category]);

  const changeHandler = async (e: any) => {
    if (!e.target.checked) {
      if (e.target.name === "featured") {
        setDisableFeature(24);
      }
      //if (e.target.name === "newArrival") {
      //setDisableNewArrivals(24);
      //   const title = "New Arrivals";
      //   const body = props.productTitle;
      //   const notifUID = props.productId;
      //   const imageURL = props.productImage ? props.productImage :"";
      //   const type = "NewArrivals";
      //   PushNotification({title,body,notifUID,imageURL,type}).then((response: any)=>{
      //     console.log(response);
      //   })
      //}
    }
    setSwitchValue({ ...switchValue, [e.target.name]: e.target.checked });
    if (e.target.checked) {
      if (e.target.name === "newArrival") {
        const title = "New Arrivals";
        const body = props.productTitle;
        const notifUID = props.productId;
        const imageURL = props.productImage ? props.productImage : "";
        const type = "NewArrivals";
        PushNotification({ title, body, notifUID, imageURL, type }).then(
          (response: any) => {
            console.log(response);
          }
        );
      }
    }

    const toggle = await toggleProduct(props?.productId, e.target.name);
    if (!toggle?.data?.error) {
      props?.setUpdate(!props?.update);
    }
  };

  const HandleUpdate = async () => {
    const formData = new FormData();
    formData.append("category", category);
    formData.append("subcategory", subcategory);

    try {
      let resp = await updateProduct(formData, props?.productId ?? "");
      if (resp.status === 200) {
        toast.success(resp.data.message);
        props?.setUpdate(!props?.update);
      } else {
        toast.error("errorr occured");
        toast.error(resp);
      }
    } catch (error) {
      console.log(error);
      // toast.error("server error")
    }
  };

  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (!isInitialRender) {
      HandleUpdate();
    } else {
      setIsInitialRender(false);
    }
  }, [category, subcategory]);

  return (
    <Box
      className="product-card-main"
      sx={{
        opacity: `${
          props.productQuantity < 1 || !switchValue?.isShow ? "0.4" : "1"
        }`,
        border: "0.5px solid #939393",
        p: "5px",
        borderRadius: "5px",
        m: "25px 0px",
        width: matchesLargeScreen
          ? "300px"
          : matchesMediumScreen
          ? "100%"
          : "300px",
      }}
    >
      <Box
        className="product-image"
        sx={{ height: "353.357px", width: "100%" }}
      >
        {props.productImage ? (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8px",
              cursor: "pointer",
              backgroundImage: props.productImage
                ? `url(${props.productImage})`
                : "",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={() => {
              navigate(`/update-page/${props.productId}`);
            }}
          />
        ) : (
          <Box
            sx={{
              height: "100%",
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
              objectPosition: "top",
              backgroundImage: defaultImage ? `url(${defaultImage})` : "",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={() => {
              navigate(`/update-page/${props.productId}`);
            }}
          />
        )}
      </Box>
      <Box sx={{ p: "0px 10px 5px 15px" }}>
        <Box className="product-title">
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "16px",
              mt: "15px",
              minHeight: "65px",
              fontFamily: "myAvenirBold",
              textTransform: "capitalize",
            }}
            paragraph
          >
            {props.productTitle?.length < 50
              ? props.productTitle
              : props.productTitle?.substr(0, 47) + "..."}
          </Typography>
        </Box>
        <Box className="product-inventory">
          <Typography
            variant="h6"
            sx={{
              fontSize: "16px",
              color: "#1F2834",
              fontWeight: 350,
              fontFamily: "myAvenirRegular",
            }}
          >
            {props.productQuantity} in stock
          </Typography>
        </Box>
        <Box className="product-price">
          <Typography
            variant="h6"
            sx={{
              fontSize: "16px",
              color: "#1F2834",
              fontWeight: 350,
              fontFamily: "myAvenirRegular",
            }}
          >
            £{props.productPrice}
          </Typography>
        </Box>
        <Box className="show-product-switch-btn">
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
            <Grid item xs={10}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  color: "#1F2834",
                  fontWeight: 350,
                  fontFamily: "myAvenirRegular",
                }}
              >
                Show
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Android12Switch
                    sx={{ m: 0 }}
                    checked={switchValue.isShow}
                    name="isShow"
                    onChange={changeHandler}
                  />
                }
                label=""
                sx={{ m: "0" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          className="add-to-feature-product-switch-btn"
          sx={{ opacity: `${disableFeature ? "0.5" : "1"}` }}
        >
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
                  fontSize: "16px",
                  color: `${disableFeature ? "#B3C3D5" : "#1F2834"}`,
                  fontWeight: 350,
                  fontFamily: "myAvenirRegular",
                }}
              >
                Featured
              </Typography>
            </Grid>

            <Grid item xs={5}>
              {disableFeature ? (
                <Typography
                  sx={{
                    color: "#B6C3D3",
                    fontSize: "12px",
                    fontWeight: 350,
                    fontFamily: "myAvenirRegular",
                  }}
                >
                  {disableFeature} hrs Remaining
                </Typography>
              ) : null}
            </Grid>

            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Android12Switch
                    sx={{ m: 0 }}
                    checked={switchValue.featured}
                    name="featured"
                    onChange={changeHandler}
                    disabled={disableFeature ? true : false}
                  />
                }
                label=""
                sx={{ m: "0" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          className="add-to-new-arrival-product-switch-btn"
          sx={{ opacity: `${disableNewArrival ? "0.5" : "1"}` }}
        >
          <Grid
            container
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
              pt: "10px",
              pr: "10px",
            }}
          >
            <Grid item xs={5}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  color: `${disableNewArrival ? "#B3C3D5" : "#1F2834"}`,
                  fontWeight: 350,
                  fontFamily: "myAvenirRegular",
                }}
              >
                New Arrival
              </Typography>
            </Grid>

            <Grid item xs={5}>
              {disableNewArrival ? (
                <Typography
                  sx={{
                    color: "#B6C3D3",
                    fontSize: "12px",
                    fontWeight: 350,
                    fontFamily: "myAvenirRegular",
                  }}
                >
                  {disableNewArrival} hrs Remaining
                </Typography>
              ) : null}
            </Grid>

            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Android12Switch
                    sx={{ m: 0 }}
                    checked={switchValue.newArrival}
                    name="newArrival"
                    onChange={changeHandler}
                    disabled={disableNewArrival ? true : false}
                  />
                }
                label=""
                sx={{ m: "0" }}
              />
            </Grid>
          </Grid>
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
              width: "215px",
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
                  background: "whitesmoke",
                  border: "0.5px solid #939393",
                  // color: "black",
                  width: "260px",
                  height: "35px",
                  borderRadius: "5px",
                  position: "relative",
                  boxShadow: 0,
                  // "&:hover": { border: "none" },
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },

                  "& .MuiSelect-icon": {
                    right: "9px", // Adjust the right value as needed
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "black",
                    boxShadow: 0,
                  },
                }}
              >
                {props.categoryList?.map((category: any) => (
                  <MenuItem
                    value={category.category}
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
                      "&.Mui-selected": { color: "black", bgcolor: "white" },
                      "&.Mui-selected: hover": {
                        color: "white",
                        bgcolor: "black",
                      },
                    }}
                  >
                    {category.category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: "flex",
            //gap: "5px",
            alignItems: "center",
            position: "relative",
            mt: 2,
          }}
        >
          <Box
            sx={{
              background: "whitesmoke",
              color: "black",
              width: "215px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px 0px 0px 5px",
              position: "absolute",
              top: "0",
              left: "0px",
              zIndex: "99",
              border: "0.5px solid #939393",
            }}
            className="menuDropdownList"
          >
            <Typography
              paragraph
              sx={{
                color: "black",
                fontSize: "14px",
                fontFamily: "myAvenirLight",
              }}
            >
              {subcategory || ""}
            </Typography>
          </Box>
          <Box>
            <FormControl sx={{}}>
              <Select
                value={""}
                onChange={(e: any) => setSubCategory(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                IconComponent={KeyboardArrowDownIcon}
                disabled
                sx={{
                  background: "whitesmoke",
                  border: "0.5px solid #939393",
                  boxShadow: "none",
                  // "&:hover": {
                  //   border: "0.5px solid #939393",

                  //   boxShadow: "none",
                  // },
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },

                  // color: "black",
                  width: "260px",
                  height: "35px",
                  borderRadius: "5px",
                  position: "relative",

                  "& .MuiSelect-icon": {
                    right: "9px", // Adjust the right value as needed
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "black",
                  },
                }}
              >
                {subCategoryList?.map((category: any) => (
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
                      "&.Mui-selected": { color: "black", bgcolor: "white" },
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
        </Box> */}
      </Box>
    </Box>
  );
};

export default ProductCard;
