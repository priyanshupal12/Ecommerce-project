import React from "react";
import { Box, Typography, Button } from "@mui/material";

function BrandStory() {
  return (
    <Box
      sx={{
        py: 10,
        backgroundColor: "#1C1C1C",
        color: "#F5F5F5",
        px: { xs: 2, md: 8 },
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
        Our Story
      </Typography>
      <Typography
        variant="body1"
        sx={{ mb: 4, maxWidth: 800, mx: "auto", lineHeight: 1.6 }}
      >
        Founded on the belief that style is a form of self-expression, our brand
        has been creating innovative and high-quality fashion for those who dare to
        stand out. We blend traditional craftsmanship with modern design, ensuring that
        each piece is both timeless and trendsetting. Join us on our journey as we continue
        to redefine what it means to be stylish.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFD700",
          color: "#1C1C1C",
          fontWeight: "bold",
          textTransform: "none",
          px: 4,
          py: 1,
          "&:hover": { backgroundColor: "#e6c300" },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
}

export default BrandStory;
