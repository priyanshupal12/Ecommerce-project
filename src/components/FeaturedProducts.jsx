import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, Rating, IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const products = [
  {
    id: 1,
    name: 'Classic Shades',
    price: '$49.99',
    image: 'https://www.urbanmonkey.com/cdn/shop/files/young-thug-004-s31454-purple-296664.jpg?v=1734936306&width=800',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Elegant Belts',
    price: '$59.99',
    image: 'https://www.urbanmonkey.com/cdn/shop/files/concept-belt-003-left-fold-306434.jpg?v=1733829606&width=600',
    rating: 4.0,
  },
  {
    id: 3,
    name: 'Stylish Shoes',
    price: '$89.99',
    image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/399028/09/sv01/fnd/IND/fmt/png/Easy-Rider-Vintage-Unisex-Sneakers',
    rating: 5.0,
  },
  {
    id: 4,
    name: 'Fashionable Cap',
    price: '$29.99',
    image: 'https://www.urbanmonkey.com/cdn/shop/files/love-over-fear-24bck217-owh-472317.jpg?v=1740828154&width=1000',
    rating: 3.5,
  },
];

function FeaturedProducts() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#F5F5F5", px: { xs: 2, md: 8 } }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#1C1C1C" }}
      >
        Featured Products
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
          gap: 4,
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <IconButton
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C1C",
                  "&:hover": { backgroundColor: "#e6e6e6" },
                }}
                aria-label="add to cart"
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Box>
            <CardContent sx={{ textAlign: "left", px: 2, pb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {product.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="body1" sx={{ color: "#1C1C1C" }}>
                  {product.price}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Rating
                    name={`rating-${product.id}`}
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                  />
                  <Typography variant="body2" sx={{ color: "#1C1C1C" }}>
                    {product.rating.toFixed(1)}
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#1C1C1C",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#e6c300" },
                }}
              >
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default FeaturedProducts;
