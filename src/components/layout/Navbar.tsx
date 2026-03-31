"use client";

import Link from "next/link";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(7, 11, 20, 0.72)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 80 }}>
          <Typography
            component={Link}
            href="/"
            variant="h6"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Cosmic Library
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button component={Link} href="/" color="inherit">
              Home
            </Button>
            <Button component={Link} href="/library" color="inherit">
              Library
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}