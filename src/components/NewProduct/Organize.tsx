import {
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

//const subCategoryList = ["Hoodie", "Jeans", "Shirts"];

const Organize = (props: any) => {
  const [subCategoryList, setSubCategoryList] = useState([]);

  useEffect(() => {
    if (props?.category) {
      const matchCategory = props.categoryList?.find(
        (cat: any) => cat?.category === props?.category
      );
      setSubCategoryList(matchCategory?.subcategories);
    }
  }, [props?.category]);

  return (
    <Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "350",
            fontFamily: "myAvenirBold",
            fontSize: "16px",
          }}
        >
          Organise
        </Typography>
        <Typography
          paragraph
          sx={{
            fontWeight: "300",
            fontSize: "16px",
            fontFamily: "myAvenirRegular",
          }}
        >
          Add the product on the right section
        </Typography>
      </Box>
      <Box
        sx={{
          background: "rgba(0,0,0,0.05)",
          borderRadius: "3px",
          p: "40px 0px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems:"center",
            maxWidth: "70%",
            m: "0 auto",
            flexWrap: { xs: "wrap", md: "no-wrap" },
          }}
        >
          <Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  mb: "10px",
                  fontWeight: "800",
                  fontFamily: "myAvenirBold",
                }}
              >
                Category
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  background: "#222222",
                  color: "white",
                  width: "200px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "3px 0px 0px 3px",
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
                    color: "white",
                    fontSize: "14px",
                    fontFamily: "myAvenirLight",
                  }}
                >
                  {props.category || "Add Category"}
                </Typography>
              </Box>
              <Box>
                <FormControl sx={{}}>
                  <Select
                    value={""}
                    onChange={(e: any) => props.setCategory(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    placeholder="Choose Category"
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      background: "#222222",
                      // color: "black",
                      width: "240px",
                      height: "40px",
                      borderRadius: "3px",
                      position: "relative",

                      "& .MuiSelect-icon": {
                        right: "9px", // Adjust the right value as needed
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                    }}
                  >
                    {props.categoryList?.map((category: any) => (
                      <MenuItem
                        value={category.category}
                        sx={{
                          color: "white",
                          bgcolor: "#222222",
                          fontSize: "14px",
                          fontFamily: "myAvenirLight",
                          "& .MuiPaper-root": {
                            backgroundColor: "#222222",
                          },
                          "& .MuiMenu-paper": { backgroundColor: "#222222" },
                          "&:hover": {
                            bgcolor: "white",
                            color: "black",
                          },
                          "&.Mui-selected": {
                            color: "black",
                            bgcolor: "white",
                          },
                          "&.Mui-selected: hover": {
                            color: "black",
                            bgcolor: "white",
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
          </Box>
          <Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  mb: "10px",
                  fontWeight: "800",
                  fontFamily: "myAvenirBold",
                }}
              >
                Sub category
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  background: "#222222",
                  color: "white",
                  width: "200px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "3px 0px 0px 3px",
                  position: "absolute",
                  top: "0",
                  left: "0px",
                  zIndex: "99",
                }}
                className="menuDropdownList"
              >
                <Typography
                  paragraph
                  sx={{
                    color: "white",
                    fontSize: "14px",
                    fontFamily: "myAvenirLight",
                  }}
                >
                  {props.subCategory || "Add Sub Category"}
                </Typography>
              </Box>
              <Box>
                <FormControl sx={{}}>
                  <Select
                    value={""}
                    onChange={(e: any) => props.setSubCategory(e.target.value)}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    IconComponent={KeyboardArrowDownIcon}
                    sx={{
                      background: "#222222",
                      color: "black",
                      width: "240px",
                      height: "40px",
                      position: "relative",
                      "& .MuiSelect-icon": {
                        right: "9px", // Adjust the right value as needed
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                    }}
                  >
                    {subCategoryList?.map((category: any) => (
                      <MenuItem
                        value={category}
                        sx={{
                          color: "white",
                          bgcolor: "#222222",
                          fontSize: "14px",
                          fontFamily: "myAvenirLight",
                          "& .MuiPaper-root": {
                            backgroundColor: "#222222",
                          },
                          "& .MuiMenu-paper": { backgroundColor: "#222222" },
                          "&:hover": {
                            bgcolor: "white",
                            color: "black",
                          },
                          "&.Mui-selected": {
                            color: "black",
                            bgcolor: "white",
                          },
                          "&.Mui-selected: hover": {
                            color: "black",
                            bgcolor: "white",
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
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  mb: "10px",
                  fontWeight: "800",
                  fontFamily: "myAvenirBold",
                }}
              >
                Product ID
              </Typography>
            </Box>
            <Box>
              <TextField
                placeholder="E.g 001"
                sx={{
                  "& fieldset": { border: "none" },
                  width: "100px",
                  fontSize: "13px",
                  bgcolor: "#FFF",
                  borderRadius: "3px",
                  border: "0.5px solid #939393",
                  boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.10) inset",
                }}
                value={props.productId}
                onChange={(e: any) => props.setProductId(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Organize;
