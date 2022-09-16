import React from "react";
import { BloodtypeOutlined, AddCircleOutline } from "@mui/icons-material";
import { Box, Button, CircularProgress, Fab, Typography } from "@mui/material";
import { styles } from "./MainInfoCss";

export interface MainInfoInterface {}

const MainInfo: React.FC<MainInfoInterface> = () => {
  const [watter, setWatter] = React.useState(0);
  const [loading, setLoading] = React.useState(0);
  const [watterLocal, setWatterLocal] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem("water")) {
      setWatterLocal(Number(localStorage.getItem("water")));
    }
  }, []);

  const handleWatter = () => {
    setWatter(watter + 1);

    setLoading(((watter + 1) * 100) / watterLocal);
    console.log(watterLocal);
  };
  return (
    <div style={styles.box}>
      <div>
        <Box sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress variant="determinate" value={loading} size={200} />
          <Box sx={styles.container}>
            <Typography variant="caption" component="div" sx={styles.h1}>
              {watter} LTS.
            </Typography>
          </Box>
        </Box>
      </div>
      <Button
        endIcon={<BloodtypeOutlined />}
        onClick={handleWatter}
        size="large"
      >
        AGREGAR
      </Button>
    </div>
  );
};

export default MainInfo;
