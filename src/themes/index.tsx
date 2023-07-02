// material core
import { createTheme } from "@mui/material/styles";
import typography from "@/themes/typography";
import palette from "@/themes/palette";

import { pxToRem } from "@/helpers/formatFont";

const themes = createTheme({
  components: {
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          "& .Mui-disabled": {
            backgroundColor: "#F1F2F6",
          },
        },
        sizeSmall: {
          height: 48,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableTouchRipple: true,
        disableFocusRipple: true,
        variant: "contained",
        disableElevation: true,
        color: "primary",
        fullWidth: true,
        size: "large",
      },
      styleOverrides: {
        root: {
          borderRadius: "4px",
          color: "#fff",
          fontSize: pxToRem(14),
          textTransform: "capitalize",
          fontFamily: "'Ubuntu', sans-serif",
          // marginRight: '4px',
          // padding: '5px 24px',
          "& .MuiCircularProgress-root": {
            marginLeft: "4px",
          },
        },
        textError: {
          background: "#fff",
        },
      },
    },
  },
  typography: { ...typography },
  palette: { ...palette },
});

export default themes;
