# Proyecto Libre - API de Productos + Frontend

Este proyecto implementa una API REST con Node.js y Express para consultar productos cargados desde un archivo JSON. Tambien incluye un frontend simple que consume la API para listar, buscar, filtrar, ordenar productos y consultar una API externa publica.

## Funcionalidades

- Lectura de datos desde `data/productos.json`
- Listado completo de productos
- Busqueda de producto por ID
- Filtrado por precio maximo y minimo
- Ordenamiento alfabetico por nombre
- Consumo de API externa (`dog.ceo`)
- Frontend conectado al backend

## Tecnologias

- Node.js
- Express
- CORS
- JavaScript
- HTML, CSS y JavaScript (frontend)

## Requisitos previos

- Node.js 18 o superior
- npm

## Instalacion y ejecucion

1. Clonar el repositorio:

```bash
git clone https://github.com/ianetor/proyectonode.git
cd proyectonode
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar el servidor:

```bash
node src/app.js
```

4. Abrir en el navegador:

- Frontend: `http://localhost:3000`
- API base: `http://localhost:3000/api`

## Endpoints

GET /api/productos  
→ Devuelve todos los productos

GET /api/buscarporId/:id  
→ Devuelve un producto por ID

GET /api/filtrarXprecioMax?precio=  
→ Filtra productos por precio máximo

GET /api/filtrarXprecioMin?precio=  
→ Filtra productos por precio mínimo

GET /api/orderbynombre  
→ Ordena productos por nombre

GET /api/externo  
→ Devuelve datos desde una API externa (imagen de perro)

## Estructura del proyecto

```text
ProyectoLibre/
|-- data/
|   `-- productos.json
|-- frontend/
|   |-- index.html
|   |-- script.js
|   `-- styles.css
|-- src/
|   `-- app.js
|-- package.json
`-- README.md
```

## Autor

Ianela Torchia