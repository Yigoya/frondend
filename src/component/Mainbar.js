import React from 'react'
import Navbar from './Navbar'
import Friends from './Friends'
import Feed from './Feed'
import { Box } from '@mui/material'
function Mainbar({friendUser, isMobile}) {
  return (
    <Box position='absolute'
    top='90px'
    left = {isMobile ?'5vw':'20vw'}
    bgcolor='white'
    borderRadius='40px 40px 0 0'
    >
        <Navbar isMobile={isMobile}  />
        <Box>

          <Friends friendUser={friendUser}/>
          <Feed isMobile={isMobile}  friendUser={friendUser}/>
        </Box>
    </Box>
  )
}

export default Mainbar