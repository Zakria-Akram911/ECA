import React, { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { getBannerCategories, getBanners } from "../../api_calls/Banners";
import BannerHomeContent from "./BannerHomeContent";

const BannerHome = () => {
  const [category, setCategory] = useState<any>(null);
  const [categoriesAdded, setCategoriesAdded] = useState([]);
  const [banners, setBanners] = useState([]);
  const [banner, setBanner] = useState<any>(null);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getBannerCategories()
      .then((res: any) => setCategoriesAdded(res.data))
      .catch((err: any) => err);
    getBanners()
      .then((res: any) => setBanners(res.data))
      .catch((err: any) => err);
  }, [update]);

  useEffect(() => {
    if (categoriesAdded?.length > 0) {
      setCategory(categoriesAdded[0]);
    }
  }, [categoriesAdded]);
  useEffect(() => {
    if (category) {
      setBanner(banners?.find((ban: any) => ban.category === category));
    }
  }, [category, banners]);

  return (
    <Box
      sx={{
        mt: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", columnGap: "5px" }}>
          {categoriesAdded?.map((categoryName: string) => {
            return (
              <Button
                disableRipple={true}
                sx={{
                  "&:focus": {
                    boxShadow: "none",
                  },
                  textTransform: "math-auto",
                  fontSize: "18px",
                  lineHeight: "24.59px",
                  letterSpacing: "0.5px",
                  color: `${category === categoryName ? "black" : "black"}`,
                  borderRadius: "0",
                  fontFamily: "myAvenirRegular",
                  p: 0,
                  px: 1,
                  fontWeight: `${category === categoryName ? "800" : "0"}`,
                  borderBottom: `${
                    category === categoryName
                      ? "1px solid black"
                      : "1px solid transparent"
                  }`,
                }}
                onClick={() => setCategory(categoryName)}
                className="product-category-btn"
              >
                {categoryName}
              </Button>
            );
          })}
        </Box>
      </Box>

      <BannerHomeContent
        name={category}
        imageURL={banner?.imageURL}
        uid={banner?.uid}
        update={update}
        setUpdate={setUpdate}
      />
    </Box>
  );
};

export default BannerHome;
