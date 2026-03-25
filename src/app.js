const fs = require('fs');
const cors= require('cors');
const productos = JSON.parse(fs.readFileSync('./data/productos.json', 'utf-8'));
const express = require('express');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.get('/productos', (req, res) => {
    res.json(productos);
});

app.get('/buscarporId/:id', (req, res) => {
    const productoId = parseInt(req.query.id);
    const producto = productos.find(p => p.id === productoId); 
    if (producto) {
        res.json(producto);
    } else {   
        res.status(404).json({ error: 'Producto no encontrado' });
    }
});

app.get('/filtrarXprecioMax', (req, res) => {
    const precio = parseFloat(req.query.precio);
    const filtrados = productos.filter(p => p.precio <= precio);
    res.json(filtrados);
});

app.get('/filtrarXprecioMin', (req, res) => {
    const precio = parseFloat(req.query.precio);
    const filtrados = productos.filter(p => p.precio >= precio);
    res.json(filtrados);
});

app.get('/orderbynombre', (req, res) => {
    const ordenados = productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    res.json(ordenados);
});

const fetch = require('node-fetch');
app.get('/externo', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener datos externos' });
    }   
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
