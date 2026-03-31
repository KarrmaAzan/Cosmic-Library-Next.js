import { notFound } from "next/navigation";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { resources } from "../../../data/resources";

type ResourcePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return resources.map((resource) => ({
    slug: resource.slug,
  }));
}

export default async function ResourceDetailPage({
  params,
}: ResourcePageProps) {
  const { slug } = await params;

  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <main>
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 10 } }}>
        <Stack spacing={3}>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            <Chip label={resource.category} size="small" />
            <Chip label={resource.type} size="small" variant="outlined" />
          </Stack>

          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2.2rem", md: "3.5rem" } }}
          >
            {resource.title}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 720 }}
          >
            {resource.description}
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Box>
              <Button
                variant="contained"
                size="large"
                component="a"
                href={resource.filePath}
                target="_blank"
                rel="noreferrer"
              >
                View PDF
              </Button>
            </Box>

            <Box>
              <Button
                variant="outlined"
                size="large"
                component="a"
                href={resource.filePath}
                download
              >
                Download Resource
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </main>
  );
}