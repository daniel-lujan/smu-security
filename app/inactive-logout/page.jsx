"use client";

import { Grid, Link, Typography } from "@mui/material";
import TimerOffIcon from "@mui/icons-material/TimerOff";

export default function InactiveLogout() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      marginTop={5}
      maxWidth="100%"
    >
      <Grid
        container
        direction="column"
        display="flex"
        gap={7}
        width="500px"
        maxWidth="100%"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          marginBottom={3}
          textAlign="center"
        >
          Parece que llevas mucho tiempo inactivo
        </Typography>
        <TimerOffIcon
          style={{
            alignSelf: "center",
            fontSize: "120px",
          }}
        />
        <Link href="/login" textAlign="center">
          Iniciar sesión
        </Link>
      </Grid>
    </Grid>
  );
}
