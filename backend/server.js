const express = require("express");
const app = express();
const PORT = 3001;

// Ruta 1: Nombre de tu sistema
app.get("/", (req, res) => {
  res.send("Bienvenido al Sistema Web de Venta de Motos, Repuestos y Accesorios");
});

// Ruta 2: /info (Descripción de tu sistema)
app.get("/info", (req, res) => {
  res.send("Sistema especializado en la comercialización de motocicletas de diversas cilindradas, repuestos originales y accesorios de seguridad.");
});

// Ruta 3: /contacto (Información de contacto ficticia)
app.get("/contacto", (req, res) => {
  res.send("Correo: contacto@ventademotosweb.com | Teléfono: +591 4-4000000");
});

// Ruta relacionada con una funcionalidad principal del proyecto
app.get("/motos", (req, res) => {
  res.send("Módulo de gestión y catálogo de motocicletas, repuestos y accesorios.");
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});