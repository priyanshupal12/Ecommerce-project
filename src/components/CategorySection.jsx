import { Box, Typography, Button } from "@mui/material";

const categories = [
  {
    name: "Men",
    image: "https://overlaysnow.com/cdn/shop/files/1L9A2789.jpg?v=1729152566&width=700", // Replace with your image URL
  },
  {
    name: "Women",
    image: "https://overlaysnow.com/cdn/shop/products/DSC00750.jpg?v=1680083684&width=400", // Replace with your image URL
  },
  {
    name: "Accessories",
    image: "https://www.urbanmonkey.com/cdn/shop/files/grid-storm-ripstop-backpack-um24db006-blk-264312.jpg?v=1735447726&width=800", // Replace with your image URL
  },
];

function CategorySection() {
  return (
    <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: "#F5F5F5" }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", mb: 6, fontWeight: "bold", color: "#1C1C1C" }}
      >
        Shop by Category
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
          gap: 4,
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "#FFD700", fontWeight: "bold", mb: 2 }}
              >
                {category.name}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#FFD700",
                  color: "#1C1C1C",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#e6c300" },
                }}
              >
                Explore {category.name}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CategorySection;
