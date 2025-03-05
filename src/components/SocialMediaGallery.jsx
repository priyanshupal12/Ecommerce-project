import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const instagramPosts = [
  { 
    id: 1, 
    image: "https://img.freepik.com/free-photo/portrait-young-japanese-woman-with-jacket_23-2148870732.jpg?t=st=1740907543~exp=1740911143~hmac=801a194f921e411b1ba640677d5f59cba4b8b4025c32634aec27ecb011e59fa1&w=996", 
    title: "Effortless Style", 
    description: "Casual and chic", 
    price: "$59.99",
    favorites: 150,
    link: "https://instagram.com" 
  },
  { 
    id: 2, 
    image: "https://img.freepik.com/premium-photo/young-pretty-woman-long-skirt-hat-white-blouse-white_408798-2855.jpg?uid=R189555310&ga=GA1.1.1712148699.1739442203&semt=ais_hybrid", 
    title: "Timeless Elegance", 
    description: "Elegant and graceful", 
    price: "$89.99",
    favorites: 200,
    link: "https://instagram.com" 
  },
  { 
    id: 3, 
    image: "https://img.freepik.com/premium-photo/beautiful-young-woman-posing_93675-57952.jpg?w=740", 
    title: "Bold & Beautiful", 
    description: "Stand out in the crowd", 
    price: "$75.99",
    favorites: 175,
    link: "https://instagram.com" 
  },
  { 
    id: 4, 
    image: "https://img.freepik.com/free-photo/young-handsome-hipster-man-standing_285396-1515.jpg?uid=R189555310&ga=GA1.1.1712148699.1739442203&semt=ais_hybrid", 
    title: "Urban Vibes", 
    description: "Modern street style", 
    price: "$65.99",
    favorites: 120,
    link: "https://instagram.com" 
  },
  { 
    id: 5, 
    image: "https://img.freepik.com/premium-photo/casually-handsome-young-man-adjusting-his-shirt_425904-21141.jpg?uid=R189555310&ga=GA1.1.1712148699.1739442203&semt=ais_hybrid", 
    title: "Modern Edge", 
    description: "Sharp and trendy", 
    price: "$49.99",
    favorites: 180,
    link: "https://instagram.com" 
  },
  // https://img.freepik.com/premium-photo/confident-young-man-stylish-darkhaired-man-staring-camera_386167-2361.jpg?w=740
  { 
    id: 6, 
    image: "https://img.freepik.com/premium-photo/confident-young-man-stylish-darkhaired-man-staring-camera_386167-2361.jpg?w=740", 
    title: "Chic Moments", 
    description: "Sleek and stylish", 
    price: "$79.99",
    favorites: 190,
    link: "https://instagram.com" 
  },
  { 
    id: 7, 
    image: "https://img.freepik.com/free-photo/serious-young-man-standing-isolated-grey_171337-10571.jpg", 
    title: "Bold Attitude", 
    description: "Confident and daring", 
    price: "$39.99",
    favorites: 110,
    link: "https://instagram.com" 
  },
  { 
    id: 8, 
    image: "https://img.freepik.com/premium-photo/portrait-clothes-man-studio-fashion-serious-with-minimalism-confidence-proud-outfit-dark-background_590464-339362.jpg?w=740", 
    title: "Sophisticated Look", 
    description: "Refined and elegant", 
    price: "$99.99",
    favorites: 220,
    link: "https://instagram.com" 
  },
];

function InstagramMasonryGallery() {
  // Dummy functions to simulate actions.
  const handleBuyNow = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    alert(`Buy Now clicked for: ${item.title}`);
    // Insert buy now logic here.
  };

  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    e.preventDefault();
    alert(`Added to cart: ${item.title}`);
    // Insert add to cart logic here.
  };

  return (
    <Box sx={{ py: 10, backgroundColor: "#F5F5F5", px: { xs: 2, md: 8 } }}>
      <Typography 
        variant="h4" 
        align="center" 
        gutterBottom 
        sx={{ fontWeight: "bold", color: "#1C1C1C", mb: 2 }}
      >
        Follow Us on Instagram
      </Typography>
      <Typography 
        variant="subtitle1" 
        align="center" 
        sx={{ mb: 4, color: "#424242" }}
      >
        Discover our latest fashion trends and behind-the-scenes moments.
      </Typography>
      <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={2}>
        {instagramPosts.map((item) => (
          <Box
            key={item.id}
            component="a"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              display: "block",
              textDecoration: "none",
              "&:hover img": {
                transform: "scale(1.05)",
              },
              "&:hover .overlay": {
                opacity: 1,
              },
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                display: "block",
                transition: "transform 0.3s ease-in-out",
              }}
            />
            {/* Add-to-Cart Icon on Top Right */}
            <Box sx={{ position: "absolute", top: 8, right: 8, zIndex: 2 }}>
              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleAddToCart(e, item);
                }}
                sx={{
                  backgroundColor: "rgba(255,255,255,0.8)",
                  p: 0.5,
                }}
              >
                <ShoppingCartIcon sx={{ color: "#FFD700", fontSize: "1.2rem" }} />
              </IconButton>
            </Box>
            <Box
              className="overlay"
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: "rgba(0, 0, 0, 0.85)",
                color: "#fff",
                p: 1,
                textAlign: "center",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 0.5 }}>
                {item.title}
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "0.7rem", mb: 0.5, display: "block" }}>
                {item.description}
              </Typography>
              <Typography variant="caption" sx={{ fontWeight: "bold", mb: 0.5, display: "block" }}>
                {item.price}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 1, mb: 1 }}>
                <FavoriteIcon sx={{ fontSize: "1rem", color: "#FFD700" }} />
                <Typography variant="caption">{item.favorites}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                <Button 
                  variant="contained" 
                  size="small"
                  onClick={(e) => handleBuyNow(e, item)}
                  sx={{
                    backgroundColor: "#FFD700",
                    color: "#1C1C1C",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#e6c300" },
                    px: 1,
                  }}
                >
                  Buy Now
                </Button>
                <Button 
                  variant="outlined" 
                  size="small"
                  onClick={(e) => handleAddToCart(e, item)}
                  sx={{
                    borderColor: "#FFD700",
                    color: "#FFD700",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#FFD700", color: "#1C1C1C" },
                    px: 1,
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Masonry>
      <Box sx={{ textAlign: "center", mt: 6 }}>
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
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Our Instagram
        </Button>
      </Box>
    </Box>
  );
}

export default InstagramMasonryGallery;
