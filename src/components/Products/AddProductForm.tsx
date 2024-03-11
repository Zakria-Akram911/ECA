import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import React from "react";
import { toast } from "react-toastify";
// import { addProduct } from "../../api_calls/Products";

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

const initialState = {
  productTitle: "",
  productPrice: "",
  productQuantity: "",
};
const AddProductForm = (props: any) => {
  const [formValues, setFormValues] = React.useState(initialState);
  const [file, setFile] = React.useState(null);

  const onChangeHandler = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();

    if (
      formValues.productTitle &&
      formValues.productPrice &&
      formValues.productQuantity
    ) {
      if (file === null) {
        return toast.error("Upload Product Image as well");
      }
      props.setOpen(false);
      props.setKeepModalText(false);

      return toast.success("Your product has been uploaded.");
    } else {
      return toast.error("All Fields are required");
    }
  };

  return (
    <Box
      className="add-product-form-main"
      component="form"
      onSubmit={onSubmitHandler}
    >
      <Box className="form-heading">
        <Typography
          variant="h2"
          sx={{ fontSize: "34px", fontWeight: "600", mb: "20px" }}
        >
          Add New Product
        </Typography>
      </Box>
      <Box className="add-product-form-single-field">
        <TextField
          type="text"
          name="productTitle"
          value={formValues.productTitle}
          onChange={onChangeHandler}
          label="Enter Product Name"
          fullWidth
        />
      </Box>
      <Box className="add-product-form-single-field">
        <TextField
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          name="productPrice"
          value={formValues.productPrice}
          onChange={onChangeHandler}
          label="Enter Product Price"
          fullWidth
        />
      </Box>
      <Box className="add-product-form-single-field">
        <TextField
          type="number"
          InputProps={{ inputProps: { min: 0 } }}
          name="productQuantity"
          value={formValues.productQuantity}
          onChange={onChangeHandler}
          label="Enter Stock Available"
          fullWidth
        />
      </Box>
      <Box className="add-product-form-single-field">
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUploadIcon />}
          className="add-product-btn"
          sx={{ color: "white", background: "black" }}
        >
          Upload Product Image
          <VisuallyHiddenInput
            type="file"
            name="productImageUrl"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </Button>
      </Box>
      <Box
        className="add-product-form-submit-btn"
        sx={{
          mt: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "10px",
        }}
      >
        <Button
          variant="contained"
          type="submit"
          className="add-product-btn"
          sx={{ background: "black", color: "white" }}
        >
          Upload Product
        </Button>
        <Button
          variant="contained"
          className="add-product-btn"
          sx={{ background: "black", color: "white" }}
          onClick={() => {
            props.setOpen(false);
            props.setKeepModalText(false);
          }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default AddProductForm;
