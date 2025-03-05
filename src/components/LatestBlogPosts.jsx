import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid } from "@mui/material";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Fashion",
    image: "https://img.freepik.com/free-photo/brown-eyed-curly-brunette-short-haired-woman-floral-trendy-dress-smiles-looks-camera-hoods-pencil-designs-new-clothes_197531-24076.jpg?uid=R189555310&ga=GA1.1.1712148699.1739442203&semt=ais_hybrid",
    description: "Explore how trends are evolving in the fashion world and what to expect next.",
    link: "#",
  },
  {
    id: 2,
    title: "Sustainable Style",
    image: "https://img.freepik.com/free-vector/flat-design-sustainable-fashion-concept_52683-55452.jpg?uid=R189555310&ga=GA1.1.1712148699.1739442203&semt=ais_hybrid",
    description: "Learn about sustainable fashion practices and how our brand is contributing.",
    link: "#",
  },
  {
    id: 3,
    title: "Accessorize Your Look",
    image: "https://img.freepik.com/free-photo/young-stylish-beautiful-woman-summer-fashion-trend-blue-blouse-red-bag-glasses-tropical-villa-resort-vacation-flirty_285396-3904.jpg?uid=R189555310&ga=GA1.1.1712148699.1739442203&semt=ais_hybrid",
    description: "Tips on choosing the right accessories to elevate your outfit.",
    link: "#",
  },
];

function LatestBlogPosts() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#F5F5F5", px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", color: "#1C1C1C", mb: 4 }}
      >
        Latest from Our Blog
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
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LatestBlogPosts;
