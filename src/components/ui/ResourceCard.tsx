import Link from "next/link";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import type { Resource } from "../../data/resources";

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card
  sx={{
    height: "100%",
    transition: "all 0.25s ease",
    border: "1px solid rgba(255,255,255,0.05)",
    background: "rgba(255,255,255,0.02)",
    backdropFilter: "blur(10px)",
    "&:hover": {
      transform: "translateY(-6px)",
      borderColor: "rgba(255,255,255,0.12)",
    },
  }}

  
>
  <Box
  sx={{
    height: 140,
    borderRadius: 2,
    mb: 2,
    backgroundImage: `url(${resource.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2.5} sx={{ height: "100%" }}>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            <Chip label={resource.category} size="small" />
            <Chip label={resource.type} size="small" variant="outlined" />
          </Stack>

          <Box>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {resource.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {resource.description}
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Link href={`/resources/${resource.slug}`}>
            <Button variant="contained" fullWidth>
              View Resource
            </Button>
          </Link>
        </Stack>
      </CardContent>
    </Card>
  );
}