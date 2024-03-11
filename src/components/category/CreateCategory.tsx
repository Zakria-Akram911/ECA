import CategoryForm from './CategoryForm'
import { addCategory } from '../../api_calls/category'
import { toast } from 'react-toastify'
import { Box } from '@mui/material'

const CreateCategory = (props : any) => {

    const addNewCategory = async(category: any,subcategories: any,image:any) =>{

      if (!category || subcategories.length === 0) {
        toast.error("Please fill all fields.");
        return;
    }

    if (!image) {
        toast.error("Please upload an image for the category.");
        return;
    }
        
        const formData = new FormData();
        formData.append("category", category);
        formData.append("subcategories" , subcategories);
        formData.append("categoryBanner",image);
        const response = await addCategory(formData);
     
        if(response?.status === 200){
            toast.success(response?.data?.message)
            props.setUpdate(!props.update)
        }else if(response?.status === 400){
          toast.error(response?.data?.error)
        }else{
          toast.error("Error Adding the Category")
        }
    }
  
  return (
    <Box
    sx={{
      mt:6
    }}>
      <CategoryForm
      addNewCategory={addNewCategory}  
      tab={props?.tab}/>
     
    </Box>
  )
}

export default CreateCategory
