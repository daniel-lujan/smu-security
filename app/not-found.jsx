"use client";

import { Grid, Link, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";

export default function NotFoundPage() {
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
          Parece que estás perdido ☹️
        </Typography>
        <LockIcon
          style={{
            alignSelf: "center",
            fontSize: "120px",
          }}
        />
        <Link href="/" textAlign="center">
          Regresar al inicio
        </Link>
      </Grid>
    </Grid>
  );
}
