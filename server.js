const express = require('express')

const studentsRoutes = require('./src/routes/student.js')

const app = express(); 
app.use(express.json())

app.use('/api/students', studentsRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(PORT)