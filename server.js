// Importar Express
const express = require("express");

// Crear una aplicación de Express
const app = express();

// Definir el puerto donde va a escuchar el servidor
const PORT = 3000;

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
  // Obtener el parámetro de la consulta
  const pelicula = req.query.nombre;

  // Verificar si la película está en el array de favoritos
  if (pelicula && peliculasFavoritas.includes(pelicula)) {
    res.send("La película seleccionada ya está en favoritos.");
  } else if (pelicula) {
    res.status(404).send("404 – película no encontrada.");
  } else {
    res.status(400).send("Parámetro de película no proporcionado.");
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
