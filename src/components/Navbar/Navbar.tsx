import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styles } from "./NavBarCss";
import SettingsIcon from "@mui/icons-material/Settings";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const dateNow = new Date();
  const month = dateNow.toLocaleString("default", { month: "long" });
  const day = dateNow.getDate();
  return (
    <AppBar position="absolute" sx={styles.appBar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {month}, {day}.
        </Typography>
        <Button variant="text" href="/settings">
          <SettingsIcon />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
