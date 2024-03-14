const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1', 
  user: 'root', 
  password: 'root',
  database: 'CRUD',
  connectionLimit: 5
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
connection.connect();

// Ruta para obtener todos los elementos
app.get('/items', (req, res) => {
  connection.query('SELECT * FROM items', (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

// Ruta para obtener un elemento por su id
app.get('/items/:id', (req, res) => {
  connection.query('SELECT * FROM items WHERE id = ?', [req.params.id], (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

// Ruta para crear un nuevo elemento
app.post('/items', (req, res) => {
  const newItem = req.body;
  connection.query('INSERT INTO items SET ?', newItem, (error, results) => {
    if (error) throw error;
    res.status(201).send('Item created successfully');
  });
});

// Ruta para actualizar un elemento por su id
app.put('/items/:id', (req, res) => {
  const updatedItem = req.body;
  connection.query('UPDATE items SET ? WHERE id = ?', [updatedItem, req.params.id], (error, results) => {
    if (error) throw error;
    res.status(200).send('Item updated successfully');
  });
});

// Ruta para eliminar un elemento por su id
app.delete('/items/:id', (req, res) => {
  connection.query('DELETE FROM items WHERE id = ?', [req.params.id], (error, results) => {
    if (error) throw error;
    res.status(200).send('Item deleted successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
