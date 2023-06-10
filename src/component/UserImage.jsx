import { Box } from "@mui/material";

const UserImage = ({ image, size = "70px", margin = '0' }) => {
  return (
    <Box m={`0 0 ${margin} 0`} borderRadius='50%' sx={{
      border:'2px solid red',
      p:"2.5px"
    }}>
     <Box width={size} height={size} >
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        
        src={`http://localhost:5000/assets/${image}`}
      />
      </Box>
    </Box>
  );
};

export default UserImage;
