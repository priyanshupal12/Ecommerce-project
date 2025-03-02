import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  // Define menu items with labels and their corresponding paths.
  const menuItems = [
    { label: "Men", path: "/men" },
    { label: "Women", path: "/women" },
    { label: "Kids", path: "/kids" },
    { label: "Accessories", path: "/accessories" },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "#1C1C1C", padding: "10px 0" }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}
      >
        {/* Left Section: Menu Icon (for smaller screens) and Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: isMediumScreen ? "5px" : "15px" }}>
          {isMediumScreen && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ padding: "5px" }}
            >
              <MenuIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          )}
          <Link to="/">
            <img
              src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
              alt="Company Logo"
              style={{ height: isMediumScreen ? "25px" : "40px", width: "auto" }}
            />
          </Link>
        </Box>

        {/* Center Section: Menu Items (visible on large screens) */}
        {!isMediumScreen && (
          <Box sx={{ display: "flex", gap: "25px" }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}

        {/* Right Section: Search, Cart, and Login */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {!isMediumScreen && (
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{
                backgroundColor: "#F5F5F5",
                borderRadius: "5px",
                width: { md: "200px", lg: "280px" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { border: "none" },
                  "&:hover fieldset": { border: "none" },
                  "&.Mui-focused fieldset": { border: "none" },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
              }}
            />
          )}
          <IconButton color="inherit" component={Link} to="/cart">
            <Badge badgeContent={2} color="error" overlap="circular">
              <ShoppingCartIcon sx={{ fontSize: "25px", color: "#FFD700" }} />
            </Badge>
          </IconButton>
          {isMediumScreen ? (
            <IconButton color="inherit" component={Link} to="/login">
              <AccountCircleIcon sx={{ fontSize: "25px", color: "#FFD700" }} />
            </IconButton>
          ) : (
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              sx={{
                borderColor: "#FFD700",
                color: "#FFD700",
                fontWeight: "bold",
                borderRadius: "8px",
                padding: "5px 15px",
                fontSize: "0.85rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#FFD700",
                  color: "#1C1C1C",
                },
              }}
              startIcon={<AccountCircleIcon sx={{ fontSize: "20px" }} />}
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>

      {/* Sidebar Drawer for Medium and Smaller Screens */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "60%",
            backgroundColor: "#1C1C1C",
            color: "#FFD700",
          },
        }}
      >
        <Box sx={{ p: 2, height: "100vh" }} role="presentation">
          {/* Company Icon & Title */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
            <img
              src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
              alt="Company Logo"
              style={{ height: "40px", width: "auto" }}
            />
            <Typography variant="h6" sx={{ ml: 2, fontWeight: "bold" }}>
              Manyavar
            </Typography>
          </Box>
          {/* Additional Themed Welcome Message */}
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography variant="body1">
              Welcome to our exclusive collection!
            </Typography>
          </Box>
          {/* Menu Items */}
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.path}>
                <ListItemText primary={item.label} sx={{ color: "#FFD700" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
