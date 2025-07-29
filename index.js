const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para leer datos de formularios y JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  const { nombre, email } = req.body;
  console.log(`Nombre: ${nombre}, Email: ${email}`);

  res.send(`<h1>Gracias, ${nombre}!</h1><p>Hemos recibido tu correo: ${email}</p>`);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});



