/* import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Button, Link } from "@mui/material";
import { createCanvas } from "p5";

const ClockComponent = () => {
  useEffect(() => {
    let p5Container = document.querySelector("#clock-container");
    if (!p5Container) return;

    const sketch = (p) => {
      let w = p5Container.clientWidth;
      let h = p5Container.clientHeight;

      const lettersArrays = [
        ["T", "I", "M", "E", "I", "S", "Y", "O", "U", "R", "S", "."],
        ["T", "O", "N", "E", "M", "A", "K", "I", "T", "I", "M", "E"],
      ];

      let letters = lettersArrays[0];

      p.setup = () => {
        let cnv = p.createCanvas(w, h);
        cnv.parent("clock-container");
        p.textAlign(p.CENTER, p.CENTER);
        p.angleMode(p.DEGREES);
      };

      p.draw = () => {
        p.background("#141414");
        p.translate(p.width / 2, p.height / 2);
        let radius = Math.min(p.width, p.height) * 0.375;

        p.fill("#FFFCDD");
        for (let i = 0; i < letters.length; i++) {
          let angle = -90 + (i * 360) / letters.length;
          let x = radius * p.cos(angle);
          let y = radius * p.sin(angle);
          p.push();
          p.translate(x, y);
          p.textSize(Math.min(p.width, p.height) * 0.08);
          p.text(letters[i], 0, 0);
          p.pop();
        }
      };

      p.windowResized = () => {
        w = p5Container.clientWidth;
        h = p5Container.clientHeight;
        p.resizeCanvas(w, h);
      };
    };

    new p5(sketch);

    return () => {
      document.querySelector("canvas")?.remove();
    };
  }, []);

  return <Box id="clock-container" sx={{ position: "relative", width: "100%", height: "300px" }} />;
};

const MaterialUIClockPage = () => {
  const [country, setCountry] = useState("your location");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        if (data.country_name) {
          setCountry(data.country_name);
        }
      })
      .catch((error) => console.error("Error fetching country:", error));
  }, []);

  return (
    <Box sx={{ textAlign: "center", maxWidth: "600px", margin: "auto", p: 2 }}>
      <ClockComponent />
      <Typography variant="body2" sx={{ mt: 2 }}>
        Are you in <strong>{country}</strong>? Enjoy your time. <br />
        We’re ahead of the clock, on <strong>Lisbon Time (WET)</strong>.
      </Typography>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
        <Grid item>
          <Button variant="contained" color="primary" href="mailto:hello@tonemaki.com?subject=Let’s Talk Design">
            Talk with Us
          </Button>
        </Grid>
        <Grid item>
          <Link href="https://cal.com/tonemaki/5-10-15" target="_blank">
            <Button variant="outlined" color="secondary">
              or Book a Call
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MaterialUIClockPage;
 */