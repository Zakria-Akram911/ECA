import axios from "axios";
import { base_url } from ".";

export const LoginApi = async ({ email, password }: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${base_url}/auth/login`,
      { email, password },
      config
    );
    // store user's token in local storage
    localStorage.setItem("userToken", data?.token);
    console.log(data);

    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
};

export const SignUpApi = async ({
  name,
  email,
  password,
  confirmpassword,
}: any) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `${base_url}/auth/sign-up`,
      { name, email, password, confirmpassword },
      config
    );

    return data;
  } catch (error: any) {
    if (error.response && error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.message;
    }
  }
};
