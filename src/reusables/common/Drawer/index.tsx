import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { Drawer as MuiDrawer } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";

import { useDrawer } from "@/hooks/useDrawer";

import useStyles from "@/reusables/common/Drawer/styled.drawer";

import { Button } from "@/reusables/common";

type Props = {
  anchor?: "right" | "left";
  titleText: string;
  primaryButton?: string;
  secondaryButton?: string;
  handleSubmit: () => void;
  drawerName: string;
  children: ReactNode;
  isSubmitting: boolean;
  handleResetFormOnCancel?: () => void;
};

function Drawer({
  anchor,
  titleText,
  primaryButton,
  secondaryButton,
  handleSubmit,
  drawerName,
  children,
  isSubmitting,
  handleResetFormOnCancel,
}: Props) {
  const classes = useStyles();
  const [state, setState] = useDrawer();

  const handleCloseDrawer = () => {
    setState({ ...state, drawerName: "", data: null });
    handleResetFormOnCancel?.();
  };

  return (
    <Box className={classes.root}>
      <MuiDrawer
        anchor={anchor || "right"}
        open={state?.drawerName === drawerName}
        className={classes.drawer}
        onClose={handleCloseDrawer}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={5}
          className={classes.header}
        >
          <Grid item>
            <Typography variant="h3">{titleText}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={handleCloseDrawer}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid
          height="100vh"
          display="flex"
          // alignItems='space-between'
          justifyContent="space-between"
          flexDirection="column"
          spacing={5}
        >
          <Box className={classes.formWrapper}>{children}</Box>
          <Grid
            container
            spacing={4}
            justifyContent="flex-end"
            alignItems="center"
            className={classes.btn}
          >
            {primaryButton && (
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? (
                    <Box className={classes.progressWrapper}>
                      <CircularProgress size={20} sx={{ color: "#fff" }} />
                    </Box>
                  ) : (
                    primaryButton
                  )}
                </Button>
              </Grid>
            )}
            {secondaryButton && (
              <Grid item>
                <Button variant="text" onClick={handleCloseDrawer}>
                  {secondaryButton}
                </Button>
              </Grid>
            )}
          </Grid>
        </Grid>
      </MuiDrawer>
    </Box>
  );
}

export default Drawer;
