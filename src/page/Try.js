import { Box } from '@mui/material'
import React from 'react'
import {useTheme} from '@mui/material'
function Try() {
    const theme = useTheme()
  return (
    <div>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.primary.dark}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.primary.main}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.primary.light}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.neutral.dark}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.neutral.main}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.neutral.mediumMain}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.neutral.medium}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.neutral.light}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.background.default}
        margin='10px'>

        </Box>
        <Box
        width='50px'
        height='50px'
        bgcolor={theme.palette.background.alt}
        margin='10px'>

        </Box>
    </div>
  )
}

export default Try