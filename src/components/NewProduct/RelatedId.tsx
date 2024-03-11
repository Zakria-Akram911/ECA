import { Box, Typography, Select, MenuItem, FormControl } from "@mui/material";
import { useEffect, useState } from "react";
import { getRelatedID } from "../../api_calls/Products";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';



const RelatedId = (props: any) => {

  // const relateid = props.relatedIds || relatedList;

  // let[related,setRelated]=React.useState([])

  const [relatedIDs ,setRelatedIDs] = useState([]);

  function handleChange(event: any) {
    const value = event.target.value as string[]; 
    if(props.setRelatedId)
   { props.setRelatedId(value);}
   else
   { props.setUpdateRelatedId(value)};
  }

  
  useEffect(() => {
   async function getRelatedIds() { let resp = await getRelatedID()
    setRelatedIDs(resp?.data.relatedIDs)}
    getRelatedIds()
    
  }, []);

  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{fontWeight: "350", fontFamily:"myAvenirBold", fontSize:"16px"}}>Related ID</Typography>
        <Typography paragraph sx={{ fontWeight: "300", fontSize:"16px" ,fontFamily:"myAvenirRegular"}}>
          Related products
        </Typography>
      </Box>
      <Box
        sx={{
          
         border:"0.5px solid #939393",
          background: "#FFF",
         
          borderRadius: "4px",
          p: "20px 20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // alignItems:"center",
            // maxWidth: "90%",
            flexWrap: { md: "no-wrap", xs: "wrap-reverse" },
            m: "0 auto",
          }}
        >
          <Box
            sx={{
              background: "#F5F5F5",
              p: { md: "50px 20px", xs: "80px 20px" },
              width: { md: "45%", xs: "100%" },
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ fontSize: "20px", mb: "10px" , fontWeight: "800", fontFamily:"myAvenirBold"}}>
                Related ID
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  background: "black",
                  color: "white",
                  width: "200px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "3px 0px 0px 3px",
                  position: "absolute",
                  top: "0",
                  left: "0px",
                  zIndex: "99",
                }}
                className="menuDropdownList"
              >
                <Typography paragraph sx={{
            color: "white",
            fontSize:"14px",
            fontFamily:"myAvenirLight",
            padding:'10px',
            maxWidth: "200px", 
           overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
}}>
                {(Array.isArray(props.relatedId) ? props.relatedId.join(', ') : "Related ID" )|| "Add Related ID"}
                </Typography>
              </Box>
              <Box>
                <FormControl sx={{}}>
                  <Select
                    value={Array.isArray(props.relatedId) ? props.relatedId : []}
                    onChange={handleChange}
                    displayEmpty
                    multiple
                    inputProps={{ "aria-label": "Without label" }}
                    IconComponent={KeyboardArrowDownIcon}
                    
                    sx={{
                      background: "black",
                      color: "white",
                      width: "240px",
                      height: "40px",
                      position: "relative",
                      "& .MuiSelect-icon": {
                        right: "9px", // Adjust the right value as needed
                        top: "50%",
                        transform: "translateY(-50%)",
                      },
                    }}
                  >
                    {relatedIDs?.map((category: any) => (
                      <MenuItem value={category}   
                      sx={{ color: "white", bgcolor:"black",fontSize: "14px" , 
                      fontFamily:"myAvenirLight" ,
                      "& .MuiPaper-root": {
                        backgroundColor: "black"
                      },
                      "& .MuiMenu-paper": 
                       { backgroundColor: "black", }
                    ,'&:hover':{
                      bgcolor:"white",
                      color:"black"
                    },
                    '&.Mui-selected': { color: "black",   bgcolor:"white"},
                    '&.Mui-selected: hover': { color: "black",   bgcolor:"white"}
                    
                  }}>{category}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>

          <Box sx={{ p: "50px 20px", width: { md: "45%", xs: "100%" } }}>
            <Box>
              <Typography
                variant="h6"
                sx={{ fontSize: "20px", mb: "10px", textAlign: "center" , fontWeight:"800", fontFamily:"myAvenirBold"}}
              >
                What is related ID?
              </Typography>
            </Box>
            <Box>
              <Typography paragraph sx={{fontSize:"16px",fontFamily:"myAvenirRegular", fontWeight:350,textAlign:"justify"}}>
                What is related ID is to show related products to this product
                you are adding. This way customers can see similar items to this
                one.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedId;
