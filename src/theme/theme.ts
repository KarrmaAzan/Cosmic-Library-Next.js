import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#8b5cf6" },
    secondary: { main: "#22d3ee" },
    background: {
      default: "#070b14",
      paper: "rgba(15, 23, 36, 0.72)",
    },
    text: {
      primary: "#f8fafc",
      secondary: "#94a3b8",
    },
    divider: "rgba(255,255,255,0.08)",
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: [
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(","),
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
      lineHeight: 1.05,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: {
          background:
            "radial-gradient(circle at top, rgba(139, 92, 246, 0.12) 0%, rgba(7, 11, 20, 1) 35%), #070b14",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1.1rem",
          paddingBlock: "0.7rem",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "rgba(15, 23, 36, 0.72)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        },
      },
    },
  },
});

export default theme;