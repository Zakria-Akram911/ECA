import { useState, useEffect, useMemo } from "react";
import ProductCard from "./ProductCard";
import { Box, Grid, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getCategories, getCategoryProduct } from "../../api_calls/Products";
import { useMediaQuery } from "@mui/material";

const AllProducts = (props: any) => {
  const matchesSmallScreen = useMediaQuery("(max-width:1000px)");
  const matchesMediumScreen = useMediaQuery("(min-width:1001px) and (max-width:1280px)");
  const matchesLargeScreen = useMediaQuery("(min-width:1281px)");
  const category = props?.category;
  const setCategory = props?.setCategory;
  const [page] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [noProducts, setNoProducts] = useState(false);
  const [categoryList, setCategoryList] = useState<any>([]);

  const navigate = useNavigate();

  useMemo(() => {
    getCategories()
      .then((res: any) => setCategoryList(res.data))
      .catch((err: any) => err);
  }, [ props?.update]);

  useEffect(() => {
    if (category) {
      getCategoryProduct(category, page, "all")
        .then((res) => {
          setProducts(res?.data?.products);
          if (res.data?.products?.length > 0) {
            setNoProducts(false);
          } else {
            setNoProducts(true);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [category, props?.update]);

  return (
    <Box sx={{ mt: "40px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
          {props.categories?.map((categoryType: any) => (
            <Button
              disableRipple={true}
              key={categoryType.category}
              sx={{
                "&:focus": {
                  boxShadow: "none", 
                },
                textTransform: "math-auto",
                fontSize:"18px",
                color: `${
                  category === categoryType.category
                    ? "black"
                    : "black"
                }`,
                borderRadius: "0",
                fontFamily:"myAvenirRegular",
                fontWeight: `${
                  category === categoryType.category
                    ? "800"
                    : "0"
                }`,
                borderBottom: `${
                  category === categoryType.category
                    ? "1px solid black"
                    : "none"
                }`,
              }}
              onClick={() => setCategory(categoryType.category)}
              className="product-category-btn"
            >
              {categoryType.category}
            </Button>
          ))}
        </Box>
        <Box>
          <Button
            onClick={() => navigate("/add-product")}
            className="add-product-btn"
            sx={{
              background: "black",
              fontSize: "18px",
              color: "white",
              p: "10px 60px",
              fontWeight: "600",
              textTransform: "math-auto",
              border: '0.5px solid #000',
              boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",

            }}
          >
            New Product
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {products?.map((product: any) => (
          <>
            {
              <>
                 <Grid item xs={matchesSmallScreen ? 12 : (matchesMediumScreen ? 6 : (matchesLargeScreen ? 4 : 6))} key={product?.productID}>
                  <ProductCard
                    productId={product.id}
                    productImage={product?.imageURL}
                    productTitle={product?.name}
                    productQuantity={product?.stockQuantity}
                    productPrice={product?.price}
                    category={product?.category}
                    subCategory={product?.subcategory}
                    categoryList={categoryList}
                    show={product?.isShow}
                    featured={product?.featured}
                    featuredRemainingTime={product?.featuredRemainingTime}
                    newArrivalRemainingTime={product?.newArrivalRemainingTime}
                    newArrival={product?.newArrival}
                    hoursRemaining={product?.hoursRemaining}
                    update={props?.update}
                    setUpdate={props?.setUpdate}
                  />
                </Grid>
              </>
            }
          </>
        ))}
        {noProducts && category && products?.length === 0 && (
          <Typography
            sx={{
              textAlign: "center",
              mt: "50px",
              fontSize: "40px",
              ml: "30px",
              fontFamily:"myAvenirRegular"
            }}
          >
            No products are present
          </Typography>
        )}
      </Grid>
    </Box>
  );
};

export default AllProducts;
