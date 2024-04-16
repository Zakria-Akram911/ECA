import React from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
 
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginApi } from "../../api_calls/Auth";


const initialState = {
  email: "",
  password: "",
};
const Login = ({ handleLogin }: any) => {
  const [formValues, setFormValues] = React.useState(initialState);
  const navigate = useNavigate();



  const changeHandler = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();
    // if (
    //   formValues.email === "admin@pruuf.pro" &&
    //   formValues.password === "admin"
    // ) {
    //   // Authentication successful
    //   localStorage.setItem('isAdminAuthenticated', 'true');
    //   navigate('/contact');
    // } else {
    //   toast.error('Invalid credentials');
    // }
    const data = {
        email: formValues.email,
        password: formValues.password,
        
      };
      LoginApi(data)
        .then((response: any) => {
          console.log(response)
          const token = localStorage.getItem('userToken')
          if(token)
         { navigate('/')
         handleLogin();
         console.log(token)
      }else
        { toast.error('Invalid credentials')}
    
        })
        .catch((err: any) => {
          return toast.error(err.response?.message);
          
        });
  
  };

  

  return (
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: { lg: "100vh", xs: "95vh" },
      flexDirection: { lg: "column", xs: "column" },
      maxWidth: { lg: "inherit", xs: "90%" },
      gap: "20px",
      m: { xs: "0 auto", lg: "0px 0px" },
    }}
  >
    <Box
      sx={{
        maxWidth: { lg: "40%", xs: "100%" },
        m: { lg: "0 auto", xs: "40px auto" },
        minHeight: { lg: "auto", xs: "auto" },
        display: { lg: "inherit", xs: "flex" },
        alignItems: { lg: "inherit", xs: "center" },
        justifyContent: { lg: "inherit", xs: "center" },
        flexDirection: { lg: "inherit", xs: "column" },
        background: "#F5F5F5",
        borderRadius: "10px",
      }}
    >
    
      <Box sx={{ p: "30px 20px" }}>
        <Box component="form" onSubmit={onSubmitHandler}>
          <Typography
            variant="h2"
            sx={{ fontSize: "40px", fontFamily: "myAvenirBold", fontWeight: "900" ,textAlign: "center", marginBottom: "20px", color: "black" }}
          >
            Login
          </Typography>
          <Grid
            container
            sx={{
              rowGap: "15px",
             
            }}
          >
            <Grid xs={12}>
              <TextField
                label="Email"
                type="email"
                name="email"
                sx={{
                    "& input.MuiInputBase-input.MuiOutlinedInput-input": {
                        padding: "14px 14px",
                        height:"55px",
                        boxShadow: "0.2px 0.2px 4px 0.1px rgba(0,0,0,0.2) inset",
                      }
                }}
                value={formValues.email}
                onChange={changeHandler}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="password"
                label="Password"
                name="password"
                sx={{
                    "& input.MuiInputBase-input.MuiOutlinedInput-input": {
                        padding: "14px 14px",
                        height:"55px",
                        boxShadow: "0.2px 0.2px 4px 0.1px rgba(0,0,0,0.2) inset",
                      }
                }}
                value={formValues.password}
                onChange={changeHandler}
                fullWidth
                required
              />
            </Grid>
         

            <Grid item xs={12} sx={{ textAlign: "center" }}>
              <Button className="add-product-btn"
            sx={{
              background: "black",
              fontSize: "18px",
              mt: 2,
              color: "white",
              p: "4px 58px",
              fontWeight: "600",
              textTransform: "math-auto",
              border: "0.5px solid #000",
              boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.13)",
            }} type="submit">
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: "center" }}>
           
                     <Link to="/sign-up">
                        {"Don't have an account? Sign Up"}
                      </Link>
          
            </Grid>
          </Grid>
        </Box>

        {/* <Box sx={{ textAlign: "center", m: "10px 0px" }}>
          <Link
            to="/forgot-password/provider"
            style={{ color: "#1b9ad1", fontWeight: "600" }}
          >
            Forgot Password
          </Link>
        </Box> */}
        
      </Box>
    </Box>
  </Box>
  );
};

export default Login;
