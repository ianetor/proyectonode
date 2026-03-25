function cargarProductos() {
  fetch('http://localhost:3000/api/productos')
    .then(res => res.json())
    .then(data => {
      const lista = document.getElementById('lista');
      lista.innerHTML = '';

      data.forEach(p => {
        const li = document.createElement('li');
        li.textContent = p.nombre + ' - $' + p.precio;
        lista.appendChild(li);
      });
    });
}


function cargarPerro() {
  fetch('http://localhost:3000/api/externo')
    .then(res => res.json())
    .then(data => {
      document.getElementById('imagenPerro').src = data.message;
    });
}

function buscarPorId() {
    const id = document.querySelector('input[name="id"]').value;
    if (!id) {
        alert('Por favor ingrese un ID de producto');
        return;
    }
    fetch(`http://localhost:3000/api/buscarporId/${id}`)
        .then(res => res.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            if (data.error) {
                resultado.textContent = data.error;
            }
            else {
                resultado.textContent = data.nombre + ' - $' + data.precio;
            }
        });
}
function filtrarXprecioMax() {
    const precio = document.querySelector('input[name="precioMax"]').value;
    if (!precio) {
        alert('Por favor ingrese un precio máximo');
        return;
    }
    fetch(`http://localhost:3000/api/filtrarXprecioMax?precio=${precio}`)
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById('lista');
            lista.innerHTML = '';
            data.forEach(p => {
                const li = document.createElement('li');
                li.textContent = p.nombre + ' - $' + p.precio;
                lista.appendChild(li);
            });
        });
}
function filtrarXprecioMin() {
    const precio = document.querySelector('input[name="precioMin"]').value;
    if (!precio) {
        alert('Por favor ingrese un precio mínimo');
        return;
    }
    fetch(`http://localhost:3000/api/filtrarXprecioMin?precio=${precio}`)
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById('lista');
            lista.innerHTML = '';
            data.forEach(p => {
                const li = document.createElement('li');
                li.textContent = p.nombre + ' - $' + p.precio;
                lista.appendChild(li);
            });
        });
}

function ordenarPorNombre() {
    fetch('http://localhost:3000/api/orderbynombre')
        .then(res => res.json())
        .then(data => {
            const lista = document.getElementById('lista');
            lista.innerHTML = '';
            data.forEach(p => {
                const li = document.createElement('li');
                li.textContent = p.nombre + ' - $' + p.precio;
                lista.appendChild(li);
            });
        });
}

cargarProductos();