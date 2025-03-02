import React, { useState } from "react";
import { Box, Typography, TextField, Button, InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

function NewsletterSubscriptionModern() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        console.log("Subscribed with email:", email);
        // Add your subscription logic here
    };

    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                py: { xs: 4, md: 8 },
                background: "linear-gradient(135deg, #F5F5F5, #E0E0E0)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            {/* Decorative pattern overlay */}
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.1,
                    background: "url('https://www.transparenttextures.com/patterns/diagmonds.png') repeat",
                }}
            />

            <Box
                sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    maxWidth: 1000,
                    width: "90%",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 6,
                    backgroundColor: "rgba(255,255,255,0.95)",
                }}
            >
                {/* Left Column: Background Image (hidden on small screens) */}
                <Box
                    sx={{
                        flex: 1,
                        background: "url('https://plus.unsplash.com/premium_photo-1723812786298-f2c54c7d5ee9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3c2xldHRlciUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D') center/cover no-repeat",
                        display: { xs: "none", md: "block" },
                    }}
                />
                {/* Right Column: Subscription Form */}
                <Box
                    sx={{
                        flex: 1,
                        p: { xs: 3, md: 6 },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(245,245,245,0.9)",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#1C1C1C" }}>
                        Join Our Insider Club
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, textAlign: "center", color: "#424242" }}>
                        Subscribe to receive exclusive offers, style tips, and the latest trends straight to your inbox.
                    </Typography>
                    <TextField
                        variant="filled"
                        placeholder="Your Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment
                                    position="start"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        marginTop: "0 !important", // override the default margin
                                    }}
                                >
                                    <MailOutlineIcon sx={{ color: "#FFD700", marginTop: "0 !important", verticalAlign: "middle" }} />
                                </InputAdornment>


                            ),
                        }}
                        sx={{
                            width: "100%",
                            maxWidth: 400,
                            mb: 3,
                            backgroundColor: "#fff",
                            borderRadius: 1,
                            boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                            "& .MuiFilledInput-input": { color: "#000", p: 1 },
                        }}
                    />

                    <Button
                        variant="contained"
                        onClick={handleSubscribe}
                        sx={{
                            backgroundColor: "#FFD700",
                            color: "#1C1C1C",
                            fontWeight: "bold",
                            px: 4,
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: "none",
                            "&:hover": { backgroundColor: "#e6c300" },
                        }}
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default NewsletterSubscriptionModern;
