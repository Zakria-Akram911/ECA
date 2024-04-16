import axios from "axios";
import { base_url } from ".";

export const getShippingOrders = async () => {
  try {
    const data = axios.get(`${base_url}/order/`);

    return data;
  } catch (err: any) {
    return err;
  }
};
