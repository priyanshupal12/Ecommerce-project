import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid } from "@mui/material";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Fashion",
    image: "https://img.freepik.com/free-photo/mock-up-packaging-cosmetic-amenities-mood-tone-board_105762-2573.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    description: "",
    link: "#",
  },
  {
    id: 2,
    title: "Sustainable Style",
    image: "https://img.freepik.com/free-photo/mock-up-packaging-cosmetic-amenities_105762-2330.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    description: "",
    link: "#",
  },
  {
    id: 3,
    title: "Accessorize Your Look",
    image: "https://img.freepik.com/premium-photo/gold-aesthetic-wallpaper-with-makeup_1174497-69888.jpg?ga=GA1.1.2013911909.1740885931&semt=ais_hybrid",
    description: "",
    link: "#",
  },
];

function ShopBeauti() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#F5F5F5", px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#1C1C1C", mb: 4 }}
      >
        Shop Beauty
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.02)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={post.image}
                alt={post.title}
              />
              <CardContent sx={{ backgroundColor: "#1C1C1C", color: "#F5F5F5" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {post.description}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFD700",
                    color: "#1C1C1C",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#e6c300" },
                  }}
                  href={post.link}
                >
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ShopBeauti;
