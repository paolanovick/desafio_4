// Importar Express
const express = require("express");

// Crear una aplicación de Express
const app = express();

// Definir el puerto donde va a escuchar el servidor
const PORT = 3000;
// Ruta principal "/" que muestra nombre y apellido
app.get('/', (req, res) => {
    res.send('Nombre: Paola, Apellido: Novick');
});

// Ruta "/materia" que muestra información de la materia
app.get('/materia', (req, res) => {
    res.send('Materia: Aplicaciones Hibridas');
});

// Ruta "/profesor" que muestra información del profesor
app.get('/profesor', (req, res) => {
    res.send("Profesor: Camila Belén Marcos Galban ");
});

// Ruta para cualquier otro recurso no encontrado
app.get('*', (req, res) => {
    res.status(404).send('Página no encontrada');
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

