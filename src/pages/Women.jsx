import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Rating,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Womenproducts from "../Components/womenProducts";
import ComingSoon from "../Components/ComingSoon";
import ShopBeauti from "../Components/ShopBeauti";
import ShopBeauty from "../Components/ShopBeauty";


const categories = [
  "New Arrivals",
  "Top Brands",
  "All Western Wear",
  "Dresses",
  "Shirts, Tops & Tees",
  "Salwar Suits",
  "Jeans & Jeggings",
  "All Ethnic Wear",
  "Sarees",
];

const priceRanges = ["Under $50", "$50 - $100", "Above $100"];

function Women() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(Womenproducts);
  const [showFilters, setShowFilters] = useState(true);

  // On mobile, hide filters by default.
  useEffect(() => {
    if (isMobile) {
      setShowFilters(false);
    } else {
      setShowFilters(true);
    }
  }, [isMobile]);

  const handleCategoryChange = (event) => {
    const value = event.target.name;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (event) => {
    const value = event.target.name;
    setSelectedPrice((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    const filtered = Womenproducts.filter((product) => {
      if (selectedCategories.length && !selectedCategories.includes(product.category))
        return false;
      if (selectedPrice.length) {
        if (
          (selectedPrice.includes("Under $50") && product.price > 50) ||
          (selectedPrice.includes("$50 - $100") &&
            (product.price < 50 || product.price > 100)) ||
          (selectedPrice.includes("Above $100") && product.price <= 100)
        ) {
          return false;
        }
      }
      return true;
    });
    setFilteredProducts(filtered);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedPrice([]);
    setFilteredProducts(Womenproducts);
  };

  return (
    <>
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#F5F5F5", position: "relative" }}>
      {/* Hamburger Toggle when filters are closed on mobile */}
      {isMobile && !showFilters && (
        <Box sx={{ position: "fixed", top: 16, left: 16, }}>
          <IconButton
            onClick={() => setShowFilters(true)}
            sx={{ bgcolor: "#FFD700", color: "#1C1C1C" }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      )}

      {/* Filter Sidebar */}
      {(!isMobile || (isMobile && showFilters)) && (
        <Box
          sx={{
            width: "280px",
            p: 3,
            bgcolor: "#FFFFFF",
            boxShadow: 3,
            mr: 2,
            ...(isMobile && {
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 500,
            }),
          }}
        >
          {isMobile && showFilters && (
            <Box sx={{ display: "flex", justifyContent: "flex-start", mb: 1 }}>
              <IconButton
                onClick={() => setShowFilters(false)}
                sx={{ bgcolor: "#FFD700", color: "#1C1C1C" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, color: "#1C1C1C" }}>
            Filters
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2, color: "#1C1C1C" }}>
            Categories
          </Typography>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={handleCategoryChange}
                  name={category}
                />
              }
              label={category}
            />
          ))}
          <Typography variant="subtitle1" sx={{ fontWeight: "bold", mt: 2, color: "#1C1C1C" }}>
            Price
          </Typography>
          {priceRanges.map((price) => (
            <FormControlLabel
              key={price}
              control={
                <Checkbox
                  checked={selectedPrice.includes(price)}
                  onChange={handlePriceChange}
                  name={price}
                />
              }
              label={price}
            />
          ))}
          <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              onClick={applyFilters}
              sx={{ bgcolor: "#FFD700", color: "#1C1C1C", fontWeight: "bold" }}
            >
              Apply
            </Button>
            <Button
              variant="outlined"
              onClick={resetFilters}
              sx={{ color: "#1C1C1C", borderColor: "#1C1C1C" }}
            >
              Reset
            </Button>
          </Box>
        </Box>
      )}

      {/* Product Grid */}
      <Box sx={{ flex: 1, p: 4 }}>
        {/* On mobile, when filters are closed, show the toggle just before the heading */}
        {isMobile && !showFilters && (
          <Box sx={{ mb: 2 }}>
            <IconButton
              onClick={() => setShowFilters(true)}
              sx={{ bgcolor: "#FFD700", color: "#1C1C1C" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        )}
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#1C1C1C" }}>
          Women's Collection
        </Typography>
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.02)" },
                  borderRadius: 2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                    // mt: 2,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      // width: 210,
                      height: 280,
                      objectFit: "cover",
                    }}
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
                <CardContent sx={{ textAlign: "left", p: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#1C1C1C" }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#1C1C1C", mb: 1 }}>
                    ${product.price}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                    <Rating value={product.rating} precision={0.5} readOnly />
                    <Typography variant="body2" sx={{ color: "#1C1C1C" }}>
                      {product.rating.toFixed(1)}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        bgcolor: "#FFD700",
                        color: "#1C1C1C",
                        fontWeight: "bold",
                        "&:hover": { bgcolor: "#e6c300" },
                      }}
                    >
                      Buy Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
    <ShopBeauti/>
    <ShopBeauty/>
    <ComingSoon/>
    </>
  );
}

export default Women;
