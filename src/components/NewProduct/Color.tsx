import { Box, Typography, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

const Color = (props: any) => {
  const [count, setCount] = React.useState(1);
  const [colors, setColors] = React.useState<string[]>([]);

  React.useEffect(() => {
    setColors(props.color || []);
    setCount(props?.color?.length > 0 ? props?.color?.length : 1);
  }, [props.color]);

  const removeColor = (index: any) => {
    if (count > 1) {
      setCount(count - 1);
      props.setColor((prevArr: any) => {
        const resultArr = [...prevArr];
        resultArr.splice(index, 1);
        return resultArr;
      });
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}}>Color</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          Write your colour ranges
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
        {[...Array(count)].map((_, index) => (
          <Box
         
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "3px",
              border:"0.5px solid #939393",
              padding: "6px 10px", 
              height:"35px",
              boxShadow: "0px 0px 4px 1px rgba(0, 0, 0, 0.10) inset",
              '&:hover': {
                border: '1px solid black inset',
                cursor: 'text',
              },
             
            }}
          >
            <input
              placeholder="E.g Purple"
              style={{
                width: "80px",
                border: "none",
                outline: "none",
                padding: "5px 10px",
                fontSize:"13px",
                fontFamily:"myAvenirRegular"
              
                
              }}
              // value={props.color[index] || ""}
              value={
                props.color && props.color[index] ? props.color[index] : ""
              }
             
              onChange={(e) => { 
                props.setColor((prevArr: any) => {
                  const newColors = [...colors];
                  newColors[index] = e.target.value;
                  setColors(newColors);
                  props.setColor(newColors);

                  const resultArr = [...prevArr];
                  resultArr[index] = e.target.value;
                  return resultArr;
                });
              }}
            />
            {index > 0 && (
              <ClearIcon
                onClick={() => removeColor(index)}
                sx={{ cursor: "pointer", height: "18px" }}
              />
            )}
          </Box>
        ))}

        <Box>
          <Button sx={{ color: "black" }} onClick={() => setCount(count + 1)}>
            <AddIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Color;
