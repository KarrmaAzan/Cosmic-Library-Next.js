import { Grid, Stack, Typography } from "@mui/material";
import Section from "../../components/ui/Section";
import ResourceCard from "../../components/ui/ResourceCard";
import { resources } from "../../data/resources";

export default function LibraryPage() {
  return (
    <main>
      <Section>
        <Stack spacing={2} sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "secondary.main",
              letterSpacing: "0.16em",
              fontWeight: 700,
            }}
          >
            RESOURCE LIBRARY
          </Typography>

          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2.25rem", md: "3.5rem" } }}
          >
            Curated developer resources
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 760 }}>
            Explore a growing collection of guides, notes, and learning assets
            designed to feel useful, organized, and product-quality.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {resources.map((resource) => (
            <Grid key={resource.slug} size={{ xs: 12, md: 6, lg: 4 }}>
              <ResourceCard resource={resource} />
            </Grid>
          ))}
        </Grid>
      </Section>
    </main>
  );
}