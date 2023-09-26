import { Button, Grid, Link, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Login() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      maxWidth="100%"
    >
      <Grid
        container
        direction="column"
        display="flex"
        gap={2}
        width="300px"
        maxWidth="100%"
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          marginBottom={3}
          textAlign="center"
        >
          Iniciar Sesión
        </Typography>
        <TextField
          id="outlined-basic"
          label="Correo electrónico"
          variant="outlined"
          required
        />
        <TextField
          id="outlined-password-input"
          label="Contraseña"
          type="password"
          autoComplete="current-password"
          required
        />
        <Link href="/register" textAlign="center">
          ¿No tienes cuenta?
        </Link>
        <Button variant="contained">Entrar</Button>
      </Grid>
    </Grid>
  );
}
