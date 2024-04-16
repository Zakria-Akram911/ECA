import axios from "axios";
import { base_url } from ".";

export const getAllProducts = async () => {
  try {
    const data = await axios.get(`${base_url}/products/get-product`);

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getFeaturedProducts = async () => {
  try {
    const data = await axios.get(`${base_url}/products/featured-products`);

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getCategories = async () => {
  try {
    const data = await axios.get(
      // `${base_url}/category`
      `${base_url}/category`
    );

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getCategoryProduct = async (
  category: string,
  page: number,
  type: string
) => {
  try {
    const data = await axios.get(
      `${base_url}/products/search-product?category=${category}&page=${page}&type=${type}`
    );

    return data;
  } catch (err: any) {
    return err;
  }
};

export const addProduct = async (formData: any) => {
  try {
    const data = await axios.post(`${base_url}/products/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (err: any) {
    return err;
  }
};

export const updateProduct = async (formData: any, productId: string) => {
  try {
    const data = await axios.put(
      `${base_url}/products/update?productId=${productId}`,
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

export const deleteProduct = async (productId: string) => {
  try {
    const data = await axios.delete(
      `${base_url}/products/delete-product/${productId}`
    );

    return data;
  } catch (err: any) {
    return err;
  }
};

export const toggleProduct = async (id: string, type: string) => {
  try {
    const data = await axios.post(
      `${base_url}/products/${id}/toggle/${type}`,
      {}
    );

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getRelatedID = async () => {
  try {
    const data = await axios.get(`${base_url}/products/relatedID`);

    return data;
  } catch (err: any) {
    return err;
  }
};

export const PushNotification = ({
  title,
  body,
  notifUID,
  imageURL,
  type,
}: any) => {
  try {
    const data = axios.post(
      `${base_url}/notification`,
      { title, body, notifUID, imageURL, type },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (err: any) {
    return err;
  }
};
