import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const offers = [
  "🔥 50% Off on New Arrivals!",
  "🚚 Free Shipping on Orders Above $99!",
  "🎉 Buy 1 Get 1 Free – Limited Time Offer!",
];

function OfferBar() {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#FFD700",
        color: "#1C1C1C",
        textAlign: "center",
        padding: "8px 0",
        fontWeight: "bold",
        fontSize: "0.9rem",
      }}
    >
      <Typography>{offers[currentOffer]}</Typography>
    </Box>
  );
};

export default OfferBar;
