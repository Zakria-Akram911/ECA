import { Box, Typography, Button, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

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

const Photos = (props: any) => {
  const [imagePreview, setImagePreview] = useState<any>(props.thumbnail);
  const [isUploaded, setIsUploaded] = useState(false);

  let totalPhoto: any = 6;
  const [productImagePreviews, setProductImagePreviews] = useState(
    props?.photos ? [...props?.photos] : Array(6).fill(null)
  );

  useEffect(() => {
    if (!isUploaded) {
      if (props.thumbnail) {
        setImagePreview(props.thumbnail);
      }
      setProductImagePreviews([...props?.photos]);
    }
  }, [props.thumbnail, props.photos]);

  const handleImageSelect = (e: any) => {
    setIsUploaded(true);
    if (e?.target) {
      const file = e.target.files[0];
      props.setThumbnail(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string); // Use optional chaining
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductPhotoSelect = (index: any, e: any) => {
    console.log(index)
    const file = e.target.files[0];
    props.setPhotos((prevArr: any) => {
      const resultArr = [...prevArr];

      resultArr[index] = file;
      return resultArr;
    });

    // Display the product image preview
    const reader = new FileReader();
    reader.onload = (event) => {
      const newProductImagePreviews = [...productImagePreviews];
      newProductImagePreviews[index] = event.target?.result as string;
      setProductImagePreviews(newProductImagePreviews);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}}>Photos</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          Add up to 6 photos
        </Typography>
      </Box>
      <Box
        sx={{
          border: "0.5px solid #939393",
          borderRadius: "5px",
          p: "20px 20px",
          pr:"10px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            m: "0 auto",
            flexWrap: { xs: "wrap", lg: "no-wrap" },
          }}
        >
          <Box
            sx={{
              background: "rgba(0,0,0,0.05)",
              p: "20px 20px",
              width: { lg: "35%", xs: "100%" },
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  mb: "10px",
                  textAlign: "center",
                  fontWeight: "800",
                  fontFamily:"myAvenirBold"
                }}
              >
                Thumbnail
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
              <Button
                component="label"
                variant="contained"
                sx={{
                  width: "100%",
                  padding: "0",
                  height: { md: "370px", xs: "200px" },
                  background: "#FAFAFA",
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
          </Box>

          <Box
            sx={{
              p: { md: "20px 10px", xs: "0" },
              mt: { xs: "20px", md: "0" },
              width: { md: "64%", xs: "100%" },
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", mb: "10px", textAlign: "center" ,  fontWeight: "800",
                fontFamily:"myAvenirBold"}}
              >
                Product Photos
              </Typography>
            </Box>
            <Box>
              <Grid container rowSpacing={2} columnSpacing={2}>
                {[...Array(totalPhoto)].map((photo: any,index: number) => (
                  <Grid item xs={6} md={4} key={index}>
                    <Button
                      component="label"
                      variant="contained"
                      key={photo}
                      sx={{
                        width: "100%",
                        padding: "0",
                        height: "180px",
                        color: "rgba(0,0,0,0.2)",
                        background: "#FAFAFA",
                        backgroundImage: productImagePreviews[index]
                          ? `url(${productImagePreviews[index]})`
                          : "",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        boxShadow: "none",
                        "&:hover": {
                          color: "white",
                        },
                      }}
                    >
                      {productImagePreviews[index] ? null : <AddToPhotosIcon />}
                      <VisuallyHiddenInput
                        type="file"
                        onChange={(e) => handleProductPhotoSelect(index, e)}
                      />
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Photos;
