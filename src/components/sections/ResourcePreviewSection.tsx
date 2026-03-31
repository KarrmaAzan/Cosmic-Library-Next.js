import { Grid, Stack, Typography } from "@mui/material";
import Section from "../../components/ui/Section";
import ResourceCard from "../../components/ui/ResourceCard";
import { resources } from "../../data/resources";

export default function ResourcePreviewSection() {
  const featuredResources = resources.filter((resource) => resource.featured).slice(0, 3);

  return (
    <Section sx={{ scrollMarginTop: "110px" }}>
      <div id="featured-resources" />
      <Stack spacing={2} sx={{ mb: 5 }}>
        <Typography variant="overline" sx={{ color: "secondary.main", fontWeight: 700 }}>
          FEATURED RESOURCES
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
          Start with the essentials
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          A preview of curated resources designed to make the platform feel organized,
          useful, and ready to grow.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        {featuredResources.map((resource) => (
          <Grid key={resource.slug} size={{ xs: 12, md: 6, lg: 4 }}>
            <ResourceCard resource={resource} />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}