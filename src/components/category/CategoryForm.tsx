import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  styled,
} from "@mui/material";
// import deleteIcon from "../../assets/deleteIcon.png";
// import deleteIconHighlight from "../../assets/deleteIconHighlight.png";
import editIcon from "../../assets/editIcon.png";
import upperLine from "../../assets/line.svg";
import sideLine from "../../assets/sideLine.svg";
import { useEffect, useState } from "react";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { toast } from "react-toastify";
import { deleteSubCategory } from "../../api_calls/category";

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

const CategoryForm = (props: any) => {
  const [subCategories, setSubCategories] = useState<Array<string>>([]);
  const [imagePreview, setImagePreview] = useState<any>(props?.bannerURL);
  const [categoryForm, setCategoryForm] = useState("");
  const [selectedSubCategories, setSelectedSubCategories] = useState<
    Array<string>
  >([]);

  const [editModes, setEditModes] = useState<boolean[]>([]);
  const [editCategoryMode, setEditCategoryMode] = useState<boolean>(false);
  const [isSubcategorySelected, setIsSubcategorySelected] =
    useState<boolean>(false);
  const [isCategoryFocus, setCategoryFocus] = useState(false);
  const [isSubcategoryFocus, setSubcategoryFocus] = useState(false);

  const [image, setImage] = useState();

  useEffect(() => {
    setCategoryForm(props?.category || "");
    if (props?.tab === "Create") {
      setEditCategoryMode(categoryForm === "" ? true : false);
    }
  }, [props?.category]);

  useEffect(() => {
    setSelectedSubCategories([]);
    setIsSubcategorySelected(false);
  }, [props?.category]);

  useEffect(() => {
    setSubCategories([...subCategories, ""]);
    setEditModes([...editModes, true]);
  }, []);

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

  const handleSendtoApp = () => {
    if (props?.updateCategory) {
      props?.updateCategory(categoryForm, subCategories, image);
      //  props?.setUpdate(!props.update)
    }
    if (props?.addNewCategory) {
      props?.addNewCategory(categoryForm, subCategories, image);
      setImage(undefined);
      setImagePreview("");
      setSubCategories([""]);
      setCategoryForm("");
    }
  };

  const handleCheckboxChange = (subcategory: string) => {
    setSelectedSubCategories((prevSelectedSubCategories) => {
      if (prevSelectedSubCategories.includes(subcategory)) {
        const newSelectedSubCategories = prevSelectedSubCategories.filter(
          (selected) => selected !== subcategory
        );
        setIsSubcategorySelected(newSelectedSubCategories.length > 0);
        return newSelectedSubCategories;
      } else {
        const newSelectedSubCategories = [
          ...prevSelectedSubCategories,
          subcategory,
        ];
        setIsSubcategorySelected(true);
        return newSelectedSubCategories;
      }
    });
  };

  useEffect(() => {
    if (props?.category) {
      const matchCategory = props?.categoryList?.find(
        (cat: any) => cat?.category === props?.category
      );
      setSubCategories(matchCategory?.subcategories);
      setImagePreview(matchCategory?.bannerURL);
      setEditModes(new Array(matchCategory?.subcategories.length).fill(false));
    }
  }, [props?.category, props?.categoryList]);

  const handleAddSubCategory = () => {
    setSubCategories([...subCategories, ""]);
    setEditModes([...editModes, true]);
  };

  // const handleDeleteSubCategory = () => {
  //   const newSubCategories = subCategories.filter(
  //     (subcategory) => !selectedSubCategories.includes(subcategory)
  //   );
  //   setSubCategories(newSubCategories);
  //   // Clear the selection after deletion
  //   setSelectedSubCategories([]);
  //   // Update edit modes array after deletion
  //   setEditModes((prevModes) =>
  //     prevModes.filter(
  //       (_, index) => !selectedSubCategories.includes(subCategories[index])
  //     )
  //   );
  // };

  // const handleDeleteSubCategory = async () => {
  //   try {
  //     const response = await deleteSubCategory(
  //       selectedSubCategories,
  //       props?.category
  //     );
  //     if (response?.status === 200) {
  //       toast.success("Subcategories deleted successfully");
  //       props?.setUpdate(!props.update);
  //       setSelectedSubCategories([]);
  //       setIsSubcategorySelected(false);
  //     } else {
  //       toast.error("Error in deleteting");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting subcategories:", error);
  //   }
  // };

  const handleSubCategoryChange = (event: any, index: any) => {
    const newSubCategories: any = [...subCategories];
    newSubCategories[index] = event.target.value;
    setSubCategories(newSubCategories);
  };

  const handleEnterPress = (index: number) => {
    // Disable edit mode and save changes when pressing Enter
    setEditModes((prevModes) => {
      const newModes = [...prevModes];
      newModes[index] = false;
      return newModes;
    });
  };

  return (
    <Box
      sx={{
        mt: 3,
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
            bgcolor: "#F5F5F5",
            p: 5,
            borderRadius: "5px",
          }}
        >
          <Typography
            sx={{
              color: "#6D7278",
              fontSize: "18px",
              fontFamily: "myAvenirLight",
              fontWeight: 500,
            }}
          >
            Category name
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {categoryForm === "" || editCategoryMode ? (
              <TextField
                size="small"
                variant="standard"
                value={categoryForm || ""}
                onFocus={() => {
                  setCategoryFocus(true);
                }}
                label={
                  isCategoryFocus || categoryForm !== "" ? null : "Type Name..."
                }
                onChange={(event) => setCategoryForm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") setEditCategoryMode(false);
                }}
                onBlur={() => {
                  setEditCategoryMode(false);
                  setCategoryFocus(false);
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    marginTop: 0,
                  },
                  "& label.Mui-focused": {
                    color: "#222222",
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                  sx: {
                    color: "#222222",
                    fontFamily: "myAvenirMedium",
                    fontWeight: 700,
                    fontSize: "30px",
                    mt: 0,
                  },
                }}
                InputLabelProps={{
                  shrink: false,
                  sx: {
                    color: "#222222",
                    fontFamily: "myAvenirMedium",
                    fontWeight: 700,
                    fontSize: "30px",
                    right: 0,
                    "-webkit-transform": "none",
                  },
                }}
              />
            ) : (
              <>
                <Typography
                  sx={{
                    color: "#222222",
                    fontFamily: "myAvenirMedium",
                    fontWeight: 700,
                    fontSize: "30px",
                    p: 0,
                  }}
                >
                  {!props.category
                    ? categoryForm
                      ? categoryForm
                      : "Type Name..."
                    : categoryForm}
                </Typography>
                <img
                  src={editIcon}
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                  onClick={() => setEditCategoryMode(true)}
                />
              </>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "20px",
              mb: 2,
            }}
          >
            <Typography
              sx={{
                color: "#6D7278",
                fontSize: "18px",
                fontFamily: "myAvenirLight",
                fontWeight: 500,
              }}
            >
              Sub Categories
            </Typography>
            {/* <img
              src={
                isSubcategorySelected
                  ? props.category === "Home"
                    ? deleteIcon
                    : deleteIconHighlight
                  : deleteIcon
              }
              width="14px"
              height="17px"
              onClick={
                isSubcategorySelected
                  ? props.category === "Home"
                    ? () => {}
                    : handleDeleteSubCategory
                  : () => {}
              }
              style={{
                cursor: isSubcategorySelected
                  ? props.category === "Home"
                    ? "auto"
                    : "pointer"
                  : "auto",
              }}
            /> */}
          </Box>
          {/* <hr color="#DBD5D5" style={{ height: 0.1 }}/> */}
          <Box sx={{ bgcolor: "#DBD5D5", height: "0.5px", width: "100%" }} />

          {subCategories?.map((subcategory, index) => (
            <>
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 1,
                    width: "90%",
                  }}
                >
                  {editModes[index] ? (
                    <TextField
                      fullWidth
                      variant="standard"
                      onFocus={() => {
                        setSubcategoryFocus(true);
                      }}
                      label={
                        isSubcategoryFocus || subcategory !== ""
                          ? null
                          : "Type name..."
                      }
                      value={subcategory}
                      onChange={(event) =>
                        handleSubCategoryChange(event, index)
                      }
                      onKeyDown={(event) => {
                        if (event.key === "Enter") handleEnterPress(index);
                      }}
                      onBlur={() => {
                        setSubcategoryFocus(false);
                      }}
                      sx={{
                        "& .MuiInputBase-root": {
                          marginTop: 0,
                        },
                        "& label.Mui-focused": {
                          color: "#222222",
                        },
                      }}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          color: "#222222",
                          fontFamily: "myAvenirMedium",
                          fontWeight: 700,
                          fontSize: "16px",
                          mt: 0,
                        },
                      }}
                      InputLabelProps={{
                        shrink: false,
                        sx: {
                          color: "#222222",
                          fontFamily: "myAvenirMedium",
                          fontWeight: 700,
                          fontSize: "16px",
                          p: 0,
                          right: 0,
                          "-webkit-transform": "none",
                          ":hover": {
                            color: "#222222",
                          },
                        },
                      }}
                    />
                  ) : (
                    <>
                      <Typography
                        sx={{
                          color: "#222222",
                          fontFamily: "myAvenirMedium",
                          fontWeight: 700,
                          fontSize: "16px",
                          p: 0,
                        }}
                      >
                        {subcategory ? subcategory : "Type Name..."}
                      </Typography>
                      {/* <img
                        src={editIcon}
                        width="13px"
                        height="13px"
                        onClick={() =>
                          setEditModes((prevModes) =>
                            prevModes.map((mode, i) =>
                              i === index ? !mode : mode
                            )
                          )
                        }
                        style={{
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                      /> */}
                    </>
                  )}
                </Box>
                {/* <Checkbox
                  sx={{
                    color: "#00000051",
                    bgcolor: "#FFFFFF",
                    borderRadius: 0,
                    width: "17px",
                    height: "20px",
                    "&.Mui-checked": {
                      color: "#8E3131",
                    },
                    // boxShadow: '0px 0px 2px 0px #00000051 inset'
                  }}
                  disabled={props.category === "Home"}
                  checked={selectedSubCategories.includes(subcategory)}
                  onChange={() => handleCheckboxChange(subcategory)}
                /> */}
              </Box>
              {!(index === subCategories.length - 1) && (
                // <hr color="#DBD5D5" style={{ height: 0.5 }} />
                <Box
                  sx={{ bgcolor: "#DBD5D5", height: "0.5px", width: "100%" }}
                />
              )}
            </>
          ))}
          <IconButton
            onClick={handleAddSubCategory}
            sx={{
              width: "100%",
              bgcolor: "white",
              borderRadius: "3px",
              border: "0.5px solid #DBD5D5",
              mt: "8px",
              mb: "40px",
            }}
          >
            <Add
              sx={{
                width: "16px",
                color: "#222222",
              }}
            />
          </IconButton>

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
            maxHeight: "400px",
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
                {imagePreview ? null : <AddToPhotosIcon />}
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
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "80px",
              justifyContent: "space-between",
              mt: 6,
            }}
          >
            <Box
              sx={{
                bgcolor: "#ECECEC",
                width: "47%",
                borderRadius: "5px 5px 0px 0px",
              }}
            />
            <Box
              sx={{
                bgcolor: "#ECECEC",
                width: "47%",
                borderRadius: "5px 5px 0px 0px",
              }}
            />
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

export default CategoryForm;
