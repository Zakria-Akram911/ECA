import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Organize from "../../components/NewProduct/Organize";
import Title from "../../components/NewProduct/Title";
import ProductDetails from "../../components/NewProduct/ProductDetails";
import SizeAndFit from "../../components/NewProduct/SizeAndFit";
import Size from "../../components/NewProduct/Size";
import Color from "../../components/NewProduct/Color";
import Price from "../../components/NewProduct/Price";
import Stock from "../../components/NewProduct/Stock";
import RelatedId from "../../components/NewProduct/RelatedId";
import Photos from "../../components/NewProduct/Photos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { addProduct, getCategories } from "../../api_calls/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const NewProduct = () => {
  const navigate = useNavigate();

  const [categoryList, setCategoryList] = React.useState<any>([]);
  const [category, setCategory] = React.useState("");
  const [subCategory, setSubCategory] = React.useState("");
  const [productId, setProductId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [productDetails, setProductDetails] = React.useState("");
  const [sizeAndFit, setSizeAndFit] = React.useState("");
  const [sizesAvailable, setSizesAvailable] = React.useState<any>([]);
  const [color, setColor] = React.useState<any>([]);
  const [price, setPrice] = React.useState("");
  const [stockQuantity, setStockQuantity] = React.useState("");
  const [relatedID, setRelatedID] = React.useState([]);
  const [thumbnail, setThumbnail] = React.useState<any>(null);
  const [photos, setPhotos] = React.useState<any>([]);
  const [load, setLoad] = useState(false);

  useMemo(() => {
    getCategories()
      .then((res: any) => setCategoryList(res.data))
      .catch((err: any) => err);
  }, []);

  console.log(photos);
  const addProductHandler = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    console.log(productId);

    formData.append("category", category);
    formData.append("subcategory", subCategory);
    formData.append("productID", productId);
    formData.append("title", title);
    formData.append("price", price);
    formData.append("productDetails", productDetails);
    formData.append("sizeAndFit", sizeAndFit);
    formData.append("sizesAvailable", sizesAvailable?.join(","));
    formData.append("colors", color?.join(","));
    formData.append("stockQuantity", stockQuantity);
    formData.append("thumbnail", thumbnail);
    formData.append("bestseller", "false");
    for (let i = 0; i < photos.length; i++) {
      if (photos[i]) {
        formData.append(`photo${i + 1}`, photos[i]);
      }
    }

    formData.append("relatedID", relatedID?.join(","));

    try {
      setLoad(true);
      let resp = await addProduct(formData);
      if (resp.status === 201) {
        toast.success(resp.data.message);
        navigate("/products");
      } else {
        toast.error(resp?.response?.data?.error);
      }
      setLoad(false);
    } catch (error) {
      console.log(error);
      // toast.error("server error")
    }
  };
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");

  return (
    <Box>
      <Sidebar>
        <Box
          sx={{
            justifyContent: "center",
            width: matchesLargeScreen ? "930px" : "auto",
          }}
        >
          <Box>
            <ToastContainer />
            <Button
              sx={{
                textDecoration: "underline",
                color: "black",
                display: "flex",
                gap: "5px",
                fontSize: "18px",
                fontFamily: "myAvenirBold",
              }}
              onClick={() => navigate("/products")}
            >
              <ArrowBackIosIcon sx={{ fontSize: "18px" }} />
              Back to Product
            </Button>
          </Box>
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: "30px",
                fontWeight: "900",
                mt: "20px",
                fontFamily: "myAvenirBold",
              }}
            >
              New product
            </Typography>
          </Box>
          <Box className="NewProductMainSingleComponent">
            <Organize
              category={category}
              setCategory={setCategory}
              subCategory={subCategory}
              setSubCategory={setSubCategory}
              productId={productId}
              setProductId={setProductId}
              categoryList={categoryList}
            />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <Title productTitle={title} setProductTitle={setTitle} />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <Photos
              thumbnail={thumbnail}
              setThumbnail={setThumbnail}
              photos={photos}
              setPhotos={setPhotos}
            />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <ProductDetails
              productDetail={productDetails}
              setProductDetail={setProductDetails}
            />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <SizeAndFit sizeAndFit={sizeAndFit} setSizeAndFit={setSizeAndFit} />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <Size size={sizesAvailable} setSize={setSizesAvailable} />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <Color color={color} setColor={setColor} />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <Price productPrice={price} setProductPrice={setPrice} />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <Stock
              productStock={stockQuantity}
              setproductStock={setStockQuantity}
            />
          </Box>
          <Box className="NewProductMainSingleComponent">
            <RelatedId relatedId={relatedID} setRelatedId={setRelatedID} />
          </Box>
          <Box sx={{ margin: "20px 0" }}>
            <Button
              className="add-product-btn"
              sx={{
                background: "#222222",
                fontSize: "18px",
                color: "white",
                p: "10px 60px",
                fontWeight: "600",
                textTransform: "math-auto",
                border: "0.5px solid #000",
                boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
              }}
              type="submit"
              onClick={addProductHandler}
            >
              {load ? (
                <CircularProgress sx={{ color: "#fafafa" }} />
              ) : (
                "Add Product"
              )}
            </Button>
          </Box>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default NewProduct;
