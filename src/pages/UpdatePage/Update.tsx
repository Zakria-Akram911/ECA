import { CircularProgress, Typography, useMediaQuery } from "@mui/material";
import React, { useMemo, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Box from "@mui/material/Box/Box";
import Organize from "../../components/NewProduct/Organize";
import Title from "../../components/NewProduct/Title";
import Photos from "../../components/NewProduct/Photos";
import ProductDetails from "../../components/NewProduct/ProductDetails";
import Size from "../../components/NewProduct/Size";
import Button from "@mui/material/Button";
import Color from "../../components/NewProduct/Color";
import SizeAndFit from "../../components/NewProduct/SizeAndFit";
import Price from "../../components/NewProduct/Price";
import RelatedId from "../../components/NewProduct/RelatedId";
import { useNavigate } from "react-router-dom";
import Stock from "../../components/NewProduct/Stock";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../api_calls/Dashboard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  deleteProduct,
  getCategories,
  updateProduct,
} from "../../api_calls/Products";
import { toast } from "react-toastify";

function UpdatePage(props: any) {
  console.log(props);
  let navigate = useNavigate();
  const params = useParams();
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

  async function fetchOneProduct() {
    let resp = await getOneProduct(params.productId);
    setCategory(resp.data.category);
    setSubCategory(resp.data.subcategory);
    setProductId(resp.data.productID);
    setTitle(resp.data.name);
    setProductDetails(resp.data.descriptionFull);
    setSizeAndFit(resp?.data?.descriptionFullTwo);
    setSizesAvailable(resp.data.sizes);
    setPrice(resp.data.price);
    setStockQuantity(resp.data.stockQuantity);
    setRelatedID(resp.data.relatedIDs);
    setThumbnail(resp.data.imageURL);
    setPhotos(resp.data.imageURLs);
    setColor(resp?.data?.sizestwo);
    // setColor(resp.data.imageURLs)
  }
  // console.log(photos,"photos,array");

  React.useEffect(() => {
    fetchOneProduct();
  }, []);

  const HanadleUpdate = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("subcategory", subCategory);
    formData.append("productID", productId);
    formData.append("title", title);

    formData.append("price", String(price));
    formData.append("productDetails", productDetails);
    formData.append("sizeAndFit", sizeAndFit);
    formData.append("sizesAvailable", sizesAvailable?.join(","));
    formData.append("colors", color?.join(","));

    // // Convert numeric values to strings before appending
    formData.append("stockQuantity", String(stockQuantity));

    formData.append("thumbnail", thumbnail);
    formData.append("bestseller", String(false));

    for (let i = 0; i < photos.length; i++) {
      if (photos[i]) {
        formData.append(`photo${i + 1}`, photos[i]);
      }
    }

    formData.append("relatedID", relatedID.join(","));

    try {
      setLoad(true);
      let resp = await updateProduct(formData, params?.productId ?? "");
      if (resp.status === 200) {
        toast.success(resp.data.message);
        navigate("/products");
      } else {
        toast.error("errorr occured");
        toast.error(resp);
      }
      setLoad(false);
    } catch (error) {
      console.log(error);
      // toast.error("server error")
    }
  };

  const HanadleDelete = async (e: any) => {
    e.preventDefault();

    try {
      let resp = await deleteProduct(params?.productId ?? "");
      if (resp.status === 200) {
        toast.success(resp.data.message);
        navigate("/products");
      } else {
        toast.error("errorr occured");
        toast.error(resp);
      }
    } catch (error) {
      console.log(error);
      // toast.error("server error")
    }
  };

  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");

  return (
    <Sidebar>
      <Box
        sx={{
          justifyContent: "center",
          width: matchesLargeScreen ? "930px" : "auto",
        }}
      >
        <Box>
          <Button
            sx={{
              textDecoration: "underline",
              color: "#222222",
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
        <Typography
          variant="h5"
          sx={{
            fontSize: "30px",
            fontWeight: "900",
            mt: "20px",
            fontFamily: "myAvenirBold",
          }}
        >
          Update Data
        </Typography>

        <Box className="NewProductMainSingleComponent">
          <Organize
            category={category}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            setCategory={setCategory}
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
        <Box>
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
          <RelatedId relatedId={relatedID} setUpdateRelatedId={setRelatedID} />
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
            onClick={HanadleUpdate}
          >
            {load ? (
              <CircularProgress sx={{ color: "#fafafa" }} />
            ) : (
              "Update Product"
            )}
          </Button>

          <Button
            className="add-product-btn"
            sx={{
              background: "#222222",
              fontSize: "18px",
              color: "white",
              p: "10px 60px",
              m: "0px 10px",
              fontWeight: "600",
              textTransform: "math-auto",
              border: "0.5px solid #000",
              boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
            }}
            type="submit"
            onClick={HanadleDelete}
          >
            Delete Product
          </Button>
        </Box>
      </Box>
    </Sidebar>
  );
}

export default UpdatePage;
