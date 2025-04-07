const express = require('express');
const studentsRoutes = require('./src/routes/student.js');

const app = express();
app.use(express.json());

// Redirección automática desde la raíz
app.get('/', (req, res) => {
  res.redirect('/api/students/getStudentsWithStatus');
});

// Tus rutas API existentes
app.use('/api/students', studentsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Accede a la ruta principal y serás redirigido automáticamente`);
});