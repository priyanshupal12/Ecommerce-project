import React from 'react';
import { Box, Typography, Avatar, Paper, Button } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Slider from "react-slick";
import { useTheme, useMediaQuery } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback: "I love the quality and style! These clothes make me feel confident and unique.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Michael Smith",
    feedback: "Amazing shopping experience with a great collection. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 3,
    name: "Samantha Lee",
    feedback: "The service and products are top-notch. I always find something I love!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

function Testimonials() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    arrows: !isSmallScreen, // Hide arrows on small screens
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box
      sx={{
        py: 12,
        background: "linear-gradient(135deg, #1C1C1C, #424242)",
        px: { xs: 2, md: 8 },
        color: "#FFD700",
      }}
    >
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
      >
        What Our Customers Say
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", mb: 6, maxWidth: 600, mx: "auto" }}
      >
        Hear directly from our valued customers and learn why they choose our collection.
      </Typography>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                mx: "auto",
                maxWidth: 600,
                borderRadius: 3,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(5px)",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <FormatQuoteIcon sx={{ fontSize: 40, color: "#FFD700" }} />
              </Box>
              <Typography
                variant="body1"
                sx={{ fontStyle: "italic", textAlign: "center", mb: 3 }}
              >
                {testimonial.feedback}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{ width: 56, height: 56, mr: 2 }}
                />
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
              </Box>
            </Paper>
          </div>
        ))}
      </Slider>
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: "#FFD700",
            color: "#FFD700",
            fontWeight: "bold",
            textTransform: "none",
            px: 4,
            py: 1,
            "&:hover": { backgroundColor: "#FFD700", color: "#1C1C1C" },
          }}
        >
          View More Reviews
        </Button>
      </Box>
    </Box>
  );
}

export default Testimonials;
