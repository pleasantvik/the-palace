import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

// import Logo from '@/assets/svgs/logo.svg'
import { Typography } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import Persona from '@/assets/svgs/Persona.svg'

const Header = function () {
  return (
    <AppBar position="fixed" color="transparent">
      <Toolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mx: 0 }}
        >
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid container alignItems="center">
              <Grid item md={4}>
                {/* <img src={Logo} alt='logo' style={{ height: '60px' }} /> */}
                <Typography>Logo</Typography>
              </Grid>
              {/* <Grid item md={8}>
                <TextField size="small" placeholder="search" fullWidth />
              </Grid> */}
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Grid
              container
              spacing={6}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item>
                {/* <Avatar src={Persona} sx={{ width: 30, height: 30 }} /> */}
                <Typography>Welcome</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
