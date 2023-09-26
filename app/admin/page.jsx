import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Switch, Typography } from "@mui/material";

function createData(permission, role, status) {
  return { permission, role, status };
}

const rows = [
  createData("Crear usuario", "Administrador", true),
  createData("Crear usuario", "Socio", false),
  createData("Crear usuario", "Cliente", false),
  createData("Auditoría", "Administrador", true),
  createData("Auditoría", "Socio", false),
  createData("Auditoría", "Cliente", false),
];

export default function Manage() {
  return (
    <Container style={{ marginTop: 10 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        marginBottom={5}
        textAlign="center"
      >
        Gestionar Permisos
      </Typography>
      <TableContainer
        component={Paper}
        style={{ maxWidth: "700px", margin: "auto" }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              style={{
                backgroundColor: "#111111",
              }}
            >
              <TableCell
                align="left"
                style={{
                  color: "white",
                }}
              >
                Permiso
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: "white",
                }}
              >
                Rol
              </TableCell>
              <TableCell
                align="left"
                style={{
                  color: "white",
                }}
              >
                Estatus
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.permission}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.permission}
                </TableCell>
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="left">
                  <Switch defaultChecked={row.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
