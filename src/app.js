const fs = require('fs');
const cors= require('cors');
const productos = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));
const express = require('express');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api', (req, res) => {
  res.json({
    message: "API de productos",
    endpoints: [
      "/api/productos",
      "/api/productos/:id",
      "/api/buscarporId/:id",
      "/api/filtrarXprecioMax?precio=VALOR",
      "/api/filtrarXprecioMin?precio=VALOR",
      "/api/orderbynombre",
      "/api/externo"
    ]
  });
});

app.get('/api/productos', (req, res) => {
    res.json(productos);
});

app.get('/api/buscarporId/:id', (req, res) => {
    const productoId = parseInt(req.params.id);
    const producto = productos.find(p => p.id === productoId); 
    if (producto) {
        res.json(producto);
    } else {   
        res.status(404).json({ error: `Producto con id ${productoId} no existe` });
    }
});

app.get('/api/filtrarXprecioMax', (req, res) => {
    const precio = parseFloat(req.query.precio);
    const filtrados = productos.filter(p => p.precio <= precio);
    res.json(filtrados);
});

app.get('/api/filtrarXprecioMin', (req, res) => {
    const precio = parseFloat(req.query.precio);
    const filtrados = productos.filter(p => p.precio >= precio);
    res.json(filtrados);
});

app.get('/api/orderbynombre', (req, res) => {
    const ordenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    res.json(ordenados);
});

app.get('/api/externo', async (req, res) => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random',{
            method: 'GET',
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos externos' });
    }   
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

module.exports = app;
