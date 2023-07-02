import { pxToRem } from "@/helpers/formatFont";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiPaper-root": {
      boxShadow: "inset 0px -1px 0px #E5E5EA;",
      background: "#fff",
    },
    "& .sidenav": {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      background: "#FFFFFF",
      color: "red",
      justifyContent: "space-between",
      "& .border": {
        backgroundColor: "#0050C8",
        borderRadius: "8px",
        "&:hover": {
          background: "#0050C8",
        },
      },
      "& img": {
        marginRight: pxToRem(10),
      },
      "& a": {
        display: "flex",
        textDecoration: "none",
        color: "#A7A9BC",
        marginBottom: "1em",
        paddingLeft: pxToRem(20),
        width: "90%",
        margin: "auto",
        "& .MuiTypography-body1": {
          padding: "10px 10px",
        },
        "&:hover": {
          background: "#F0F5FF",
          borderRadius: "8px",
        },
      },
    },
    "& .main": {
      height: "100vh",
      padding: "0px 3em 2em 2em",
    },
    "& .MuiTypography-subtitle2": {
      color: "#9DA0A7",
      textTransform: "uppercase",
    },
    "& .MuiTypography-body1": {
      padding: "1em 0px",
    },
    "& .setting": {
      "& a": {
        width: "90%",
        margin: "auto",
      },
      "& :nth-child(4)": {
        "& > *": {
          color: "#B3261E",
        },
      },
      "& .MuiTypography-body1": {
        padding: " 0px",
      },
    },
    "& .active": {
      color: "#0050C8 !important",
      background: "rgba(248, 247, 250, 0.32)",
      "& svg": {
        fill: "#FFF",
      },
    },
    "& .MuiAvatar-root": {
      background: "#0047BD",
    },
    "& .gear": {
      "& a": {
        color: "#9A9AAF",
      },
    },
  },
});

export default useStyles;
