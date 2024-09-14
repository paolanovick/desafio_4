// Importar Express
const express = require("express");

// Crear una aplicación de Express
const app = express();

// Definir el puerto donde va a escuchar el servidor
const PORT = 3000;

// Array de productos (vinos en este caso)
const productos = [
  { id: 1, nombre: "Malbec", precio: 120 },
  { id: 2, nombre: "Cabernet Sauvignon", precio: 150 },
  { id: 3, nombre: "Merlot", precio: 130 },
  { id: 4, nombre: "Chardonnay", precio: 140 },
  { id: 5, nombre: "Sauvignon Blanc", precio: 110 },
  { id: 6, nombre: "Pinot Noir", precio: 160 },
  { id: 7, nombre: "Syrah", precio: 170 },
  { id: 8, nombre: "Tempranillo", precio: 180 },
  { id: 9, nombre: "Zinfandel", precio: 200 },
  { id: 10, nombre: "Riesling", precio: 125 },
];

// Array de películas favoritas
const peliculasFavoritas = [
  "Inception",
  "The Matrix",
  "Interstellar",
  "The Shawshank Redemption",
  "The Godfather",
];

// Ruta principal "/" que muestra nombre y apellido
app.get("/", (req, res) => {
  res.send("Nombre: Paola, Apellido: Novick");
});

// Ruta "/materia" que muestra información de la materia
app.get("/materia", (req, res) => {
  res.send("Materia: Aplicaciones Hibridas");
});

// Ruta "/profesor" que muestra información del profesor
app.get("/profesor", (req, res) => {
  res.send("Profesor: Camila Belén Marcos Galban ");
});

// Ruta para manejar películas
app.get("/peliculas", (req, res) => {
  const pelicula = req.query.nombre;

  if (peliculasFavoritas.includes(pelicula)) {
    res.send("La película seleccionada ya está en favoritos.");
  } else {
    res.status(404).send("404 – película no encontrada.");
  }
});

// Ruta para manejar productos
app.get("/productos", (req, res) => {
  // Obtener parámetros
  const id = parseInt(req.query.id, 10);
  const min = parseFloat(req.query.min);
  const max = parseFloat(req.query.max);

  let resultado = productos;

  // Filtrar por ID
  if (!isNaN(id)) {
    resultado = resultado.filter((p) => p.id === id);
  }

  // Filtrar por rango de precios
  if (!isNaN(min)) {
    resultado = resultado.filter((p) => p.precio >= min);
  }
  if (!isNaN(max)) {
    resultado = resultado.filter((p) => p.precio <= max);
  }

  // Generar respuesta
  if (resultado.length > 0) {
    res.json(resultado);
  } else {
    res.status(404).send("404 – producto no encontrado.");
  }
});

// Ruta para cualquier otro recurso no encontrado
app.get("*", (req, res) => {
  res.status(404).send("Página no encontrada");
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
