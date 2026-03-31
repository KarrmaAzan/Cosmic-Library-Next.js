import { Box, Container } from "@mui/material";
import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  sx?: object;
};

export default function Section({ children, sx = {} }: SectionProps) {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, ...sx }}>
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
}