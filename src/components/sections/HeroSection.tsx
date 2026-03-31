import Link from "next/link";
import { Box, Button, Stack, Typography } from "@mui/material";
import Section from "../../components/ui/Section";

export default function HeroSection() {
  return (
    <Section
      sx={{
        minHeight: "calc(100vh - 80px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack spacing={4} maxWidth={760}>
        <Typography
          variant="overline"
          sx={{
            color: "secondary.main",
            letterSpacing: "0.18em",
            fontWeight: 700,
          }}
        >
          CURATED DEVELOPER KNOWLEDGE
        </Typography>

        <Typography
          variant="h1"
          sx={{ fontSize: { xs: "3rem", sm: "4rem", md: "5.5rem" } }}
        >
          Cosmic Library v2
        </Typography>

        <Typography
          variant="h5"
          color="text.secondary"
          sx={{
            maxWidth: 640,
            fontSize: { xs: "1rem", md: "1.2rem" },
            lineHeight: 1.8,
          }}
        >
          A clean, modern digital library for curated software development
          resources, guides, and learning assets built like a real product.
        </Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Box
            sx={{
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                width: 225,
                height: 300,
                background:
                  "radial-gradient(circle, rgba(144,202,249,0.15), transparent)",
                filter: "blur(80px)",
                top: -100,
                left: -100,
                zIndex: -1,
              },
            }}
          >
            <Link href="/library">
              <Button variant="contained" size="large">
                Explore Library
              </Button>
            </Link>
          </Box>

          <Box>
            <Button
              variant="outlined"
              size="large"
              component="a"
              href="#featured-resources"
            >
              Featured Resources
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Section>
  );
}
