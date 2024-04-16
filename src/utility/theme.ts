import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h6: {
      fontSize: "18px",
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          "& .MuiPopover-paper.MuiMenu-paper.MuiMenu-paper": {
            backgroundColor: "black",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& .MuiSelect-icon": {
            color: "white",
            right: "12px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // "& input.MuiInputBase-input.MuiOutlinedInput-input": {
          //   padding: "12px 14px",
          //   height: "35px",
          //   boxShadow: "0.2px 0.2px 4px 0.1px rgba(0,0,0,0.2) inset",
          // },
          //   "& textarea.MuiInputBase-input.MuiOutlinedInput-input": {
          //     boxShadow: "0.5px 0.5px 4px 0.1px rgba(0,0,0,0.45) inset",
          //   },
        },
      },
    },
  },
});

// console.log(theme);

export default theme;
