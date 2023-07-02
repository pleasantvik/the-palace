import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import Logo from '@/assets/svgs/logo.svg'
import Typography from '@mui/material/Typography'
// import { Button } from '@/reusables/common'
// import useStyles from '@/modules/authentication/PageNotFound/styled.pageNotFound'
// import { ReactComponent as PageNotFoundImage } from '@/assets/svgs/pageNotFoundImg.svg'
import { useNavigate } from 'react-router-dom'
import useStyles from './styled.pageNotFound'

export default function PageNotFound() {
  const classes = useStyles()

  const navigate = useNavigate()

  return (
    <Box className={classes.root}>
      <AppBar position='fixed' color='transparent'>
        <Toolbar>
          <Grid container alignItems='center' sx={{ mx: 0 }}>
            <Grid
              item
              md={6}
              sx={{
                alignItems: 'center',
              }}
            >
              <Grid container alignItems='center'>
                <Grid item md={4}>
                  {/* <img src={Logo} alt='logo' style={{ height: '60px' }} /> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box className='pageNotFoundContentWrapper'>
        <Grid container alignItems='center' sx={{ m: 21 }}>
          <Grid sx={{ mr: 13 }}>
            <Typography
              fontSize='46px'
              color='#000000'
              sx={{ fontWeight: 500, lineHeight: 1.2 }}
            >
              Oops, Something <br />
              went wrong
            </Typography>
            <Typography
              fontSize='20px'
              color='#000000'
              sx={{ fontWeight: 400, mt: 2 }}
            >
              We can’t find the page you are looking for. <br />
              Please try again or contact the admin <br />
              support if the problem persists.
            </Typography>
            {/* <Button sx={{ width: '108px', mt: 4 }} onClick={() => navigate(-1)}>
              Refresh
            </Button> */}
          </Grid>
          <Grid>
            {/* <PageNotFoundImage style={{ width: 570, height: 570 }} /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
