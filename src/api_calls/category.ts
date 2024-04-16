import axios from "axios";
import { base_url } from ".";

export const addCategory = async (formData: any) => {
  try {
    const data = await axios.post(
      `${base_url}/category/upload-category`,
      //`http://localhost:8000/category/upload-category`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (err: any) {
    return err;
  }
};

export const updateCategory = async (formData: any, categoryId: string) => {
  console.log(formData);
  try {
    const data = await axios.put(
      `${base_url}/category/update-category/${categoryId}`,

      // `http://localhost:8000/category/update-category/${categoryId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data;
  } catch (err: any) {
    return err;
  }
};

export const deleteSubCategory = async (
  subcategories: any,
  categoryId: string
) => {
  console.log(subcategories);
  try {
    const data = await axios.post(
      `${base_url}/category/delete-subcategory/${categoryId}`,

      //`http://localhost:8000/category/delete-subcategory/${categoryId}`,
      { subcategories }
    );

    return data;
  } catch (err: any) {
    return err;
  }
};
