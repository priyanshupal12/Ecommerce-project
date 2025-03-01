import React, { useState } from "react";
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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  const menuItems = ["Shirt", "Pants", "Shoes", "Cap"];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1C1C1C", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", px: 2 }}>
        {/* Left Section: Menu Icon (Medium and Smaller) and Logo */}
        <Box sx={{ display: "flex", alignItems: "center", gap: isMediumScreen ? "5px" : "15px" }}>
          {/* Hamburger Menu (Only for Medium Screens and Smaller) */}
          {isMediumScreen && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{ padding: "5px" }}>
              <MenuIcon sx={{ fontSize: "25px" }} />
            </IconButton>
          )}

          {/* Logo Image - Resizes for Smaller Screens */}
          <img
            src="https://www.manyavar.com/on/demandware.static/-/Library-Sites-ManyavarSharedLibrary/en_IN/dw9cd4a967/images/Manvayar-Crest-Mohey_Horizontal_3D_logo_Desktop.png"
            alt="Company Logo"
            style={{ height: isMediumScreen ? "25px" : "40px", width: "auto" }}
          />
        </Box>

        {/* Center Section: Menu Items (Visible on Large Screens) */}
        {!isMediumScreen && (
          <Box sx={{ display: "flex", gap: "25px" }}>
            {menuItems.map((item) => (
              <Button key={item} sx={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "1rem" }}>
                {item}
              </Button>
            ))}
          </Box>
        )}

        {/* Right Section: Search, Cart, and Login */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {/* Search Bar - Visible on Large Screens */}
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

          {/* Cart Icon - Always Visible */}
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error" overlap="circular">
              <ShoppingCartIcon sx={{ fontSize: "25px", color: "#FFD700" }} />
            </Badge>
          </IconButton>

          {/* Login Button/Icon - Adjusts Based on Screen Size */}
          {isMediumScreen ? (
            <IconButton color="inherit">
              <AccountCircleIcon sx={{ fontSize: "25px", color: "#FFD700" }} />
            </IconButton>
          ) : (
            <Button
              variant="outlined"
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

      {/* Sidebar Drawer for Medium Screens and Smaller */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, backgroundColor: "#1C1C1C", height: "100vh" }} role="presentation">
          <List>
            {menuItems.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} sx={{ color: "#FFD700" }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
