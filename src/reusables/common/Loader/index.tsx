import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'

function Loader() {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      sx={{ height: '100vh', width: '100%' }}
    >
      <CircularProgress />
    </Box>
  )
}

export default Loader
