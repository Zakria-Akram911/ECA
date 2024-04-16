import axios from "axios";
import { base_url } from ".";

export const getOrderDetails = async () => {
  const data = await axios.get(`${base_url}/dashboard/orders-details`);

  return data;
};

export const getOrdersForDashboard = async (showTotal: Boolean) => {
  try {
    const data = axios.get(
      `${base_url}/dashboard/orders/${showTotal ? "monthly" : "all"}`
    );

    return data;
  } catch (err: any) {
    return err;
  }
};

export const getOneProduct = async (productid: any) => {
  try {
    const data = await axios.get(
      `${base_url}/products/get-product/${productid}`
    );

    return data;
  } catch (err: any) {
    return err;
  }
};
