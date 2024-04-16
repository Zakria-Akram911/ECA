import axios from "axios";
import { base_url } from ".";

export const addIntroBanner = async (formData: any) => {
  try {
    const data = await axios.post(
      `${base_url}/banner/upload-introBanner`,
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

export const addBanner = async (formData: any) => {
  try {
    const data = await axios.post(
      `${base_url}/banner/upload-Banner`,
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

export const updateIntroBanner = async (formData: any) => {
  try {
    const data = await axios.post(
      `${base_url}/banner/update-introBanner`,
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

export const updateBanner = async (formData: any) => {
  try {
    const data = await axios.post(
      `${base_url}/banner/update-Banner`,
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

export const updateShop = async (formData: any, id: string) => {
  try {
    const data = await axios.post(
      `${base_url}/banner/update-Shop/${id}`,
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

export const getIntroBanner = async () => {
  try {
    const data = await axios.get(`${base_url}/banner/get-introBanner`);

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getBanners = async () => {
  try {
    const data = await axios.get(`${base_url}/banner/get-Banners`);

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getShops = async () => {
  try {
    const data = await axios.get(`${base_url}/banner/get-Shops`);

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getBanner = async (uid: string) => {
  try {
    const data = await axios.get(`${base_url}/banner/get-Banner/${uid}`);

    return data;
  } catch (err: any) {
    return err;
  }
};

export const deleteBanner = async (uid: string) => {
  try {
    const data = await axios.delete(`${base_url}/banner/delete-Banner/${uid}`);
    return data;
  } catch (err: any) {
    return err;
  }
};

export const getBannerCategories = async () => {
  try {
    const data = await axios.get(`${base_url}/banner/get-BannerCategories`);

    return data;
  } catch (err: any) {
    return err;
  }
};
