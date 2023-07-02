import { Box, Grid } from "@mui/material";
import Header from "@/layout/components/Header";
import SideNav from "@/layout/components/SideNav";
import { Outlet } from "react-router-dom";
import useStyles from "./styled.dashboard";
const AppLayout = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
      <Grid container spacing={0}>
        <Grid
          style={{
            // height: "100vh",
            position: "fixed",
            // width: "40%",
          }}
          sm={2}
          item
        >
          <SideNav />
        </Grid>
        <Grid sm={10} bgcolor="#f3f4f6" item sx={{ ml: "17%", pt: 10 }}>
          <Box className="main">
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppLayout;
