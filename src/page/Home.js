import React from 'react'
import Sidebar from 'component/Sidebar'
import Mainbar from 'component/Mainbar'
import { Box, useMediaQuery } from '@mui/material'
import Bottom from 'component/Bottom';

function Home() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  console.log(isMobile)
  return (
    <Box
      >
      
      {!isMobile && <Sidebar />}
        <Mainbar isMobile={isMobile} />
        {isMobile && (<Bottom />)}
    </Box>
  )
}

export default Home