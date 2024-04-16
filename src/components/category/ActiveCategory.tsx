import { Box, Button } from "@mui/material";
import CategoryForm from "./CategoryForm";
import { useEffect, useState } from "react";
import { getCategories } from "../../api_calls/Products";
import { updateCategory } from "../../api_calls/category";
import { toast } from "react-toastify";

const ActiveCategory = (props: any) => {
  const category = props?.category;
  const setCategory = props?.setCategory;
  const [categoryList, setCategoryList] = useState<any>([]);

  useEffect(() => {
    getCategories()
      .then((res: any) => setCategoryList(res.data))
      .catch((err: any) => err);
  }, [category]);

  const UpdateCategoryActive = async (
    categorytoUpdate: any,
    subcategories: any,
    image: any
  ) => {
    const formData = new FormData();

    formData.append("category", categorytoUpdate);
    formData.append("subcategories", subcategories);
    formData.append("categoryBanner", image);

    const response = await updateCategory(formData, category);
    if (response?.status === 200) {
      // toast.success("success")
      toast.success(response?.data?.message);
      props?.setUpdate(!props.update);
    } else if (response?.status === 400) {
      toast.error(response?.data?.message);
    } else {
      toast.error("cannot Update Category");
    }
  };

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
                fontSize: "18px",
                color: `${
                  category === categoryType.category ? "black" : "black"
                }`,
                borderRadius: "0",
                fontFamily: "myAvenirRegular",
                p: 0,
                px: 1,
                fontWeight: `${
                  category === categoryType.category ? "800" : "0"
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
      </Box>
      {props.category && (
        <CategoryForm
          category={props.category}
          setCategory={props?.setCategory}
          categoryList={categoryList}
          updateCategory={UpdateCategoryActive}
          update={props?.update}
          setUpdate={props?.setUpdate}
        />
      )}
    </Box>
  );
};

export default ActiveCategory;
