import { createTheme } from "@mui/material/styles";

export function pxToRem(value) {
  return `${value / 16}rem`;
}
function responsiveFontSizes({ sm, md, lg }) {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:960px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1280px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: "medium",
        variant: "contained",
        disableTouchRipple: true,
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "2px",
          fontWeight: 600,
          borderWidth: 0,
          "&:hover": {
            boxShadow: "none",
          },
          ".MuiOutlinedInput-root": {
            border: '0px solid "#fff',
          },
        },
        sizeLarge: {
          height: 40,
          fontSize: pxToRem(14),
          lineHeight: "18px",
          //   padding: theme.spacing(1, 2),
        },
        sizeMedium: {
          height: 35,
          fontSize: pxToRem(14),
          lineHeight: "15px",
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    fontFamily: ["Inter, Helvetica"].join(" "),
    lineHeight: 1.5,

    h1: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      ...responsiveFontSizes({ sm: 56, md: 56, lg: 56 }),
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: "70px",
      ...responsiveFontSizes({ sm: 48, md: 48, lg: 48 }),
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: "70px",
      ...responsiveFontSizes({ sm: 28, md: 28, lg: 28 }),
    },
    body2: {
      fontWeight: 400,
      letterSpacing: "-0.03em",
      lineHeight: 1.5,

      ...responsiveFontSizes({ sm: 20, md: 20, lg: 20 }),
    },
  },
  palette: {
    primary: {
      main: "#4A5CD0",
      light: "rgba(74, 92, 208, 0.05)",
    },
    background: {
      default: "#F2F2F2",
    },
  },
  text: {
    secondary: "#666D80",
  },
});

export default theme;
