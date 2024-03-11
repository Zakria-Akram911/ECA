import { Box, Typography, Button } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

const Size = (props: any) => {
  const [count, setCount] = React.useState(1);
  const [sizes, setSizes] = React.useState<string[]>([]);

  React.useEffect(() => {
    setSizes(props.size || []);
    setCount(props?.size?.length > 0 ? props?.size?.length : 1);
  }, [props.size]);

  const handleSizeChange = (index: any, value: any) => {
    const newSizes = [...sizes];

    newSizes[index] = value;
    setSizes(newSizes);

    props.setSize(newSizes);
  };

  const removeSize = (index: any) => {
    if (count > 1) {
      setCount(count - 1);
      const newSizes = [...sizes];
      newSizes.splice(index, 1);
      setSizes(newSizes);
      props.setSize(newSizes);
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}}>Size</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          One size or more sizes
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
              placeholder="E.g M"
              style={{
                width: "80px",
                border: "none",
                padding: "5px 10px",
                outline: "none",
                fontSize:"13px",
                fontFamily:"myAvenirRegular"
              }}
              value={
                props.size && props.size[index] ? props.size[index] : ""
              }
              onChange={(e) => handleSizeChange(index, e.target.value)}
              
            />
            {index > 0 && (
              <ClearIcon
                onClick={() => removeSize(index)}
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

export default Size;
