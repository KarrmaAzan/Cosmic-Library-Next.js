import { Grid, Stack, Typography } from "@mui/material";
import Section from "../../components/ui/Section";

const items = [
  {
    title: "Curated Resources",
    description:
      "Focused learning materials for developers who care about structure, clarity, and practical growth.",
  },
  {
    title: "Product-Quality Design",
    description:
      "Built to feel like a real platform with polished layout, strong typography, and modern visual identity.",
  },
  {
    title: "Scalable Foundation",
    description:
      "Structured for future growth so new features can be added without turning the codebase into a mess.",
  },
];

export default function IntroSection() {
  return (
    <Section>
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 700 }}>
          WHY IT EXISTS
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
          Built like a product, not a tutorial
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid key={item.title} size={{ xs: 12, md: 4 }}>
            <Stack
              spacing={1.5}
              sx={{
                p: 3,
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 4,
                background: "rgba(255,255,255,0.02)",
              }}
            >
              <Typography variant="h5">{item.title}</Typography>
              <Typography color="text.secondary">{item.description}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}