function cargarProductos() {
  fetch('/api/productos')
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
  fetch('/api/externo')
    .then(res => res.json())
    .then(data => {
      document.getElementById('imagenPerro').src = data.message;
    });
}

function buscarPorId() {
    const id = document.querySelector('input[name="id"]').value;
    if (!id || isNaN(id)) {
        alert('Por favor ingrese un ID de producto válido');
        return;
    }
    fetch(`/api/buscarporId/${id}`)
        .then(res => res.json())
        .then(data => {
            const resultado = document.getElementById('resultado');
            if (data.error) {
                mostrarResultado(data.error);
            }
            else {
                mostrarResultado(data.nombre + ' - $' + data.precio);
            }
        });
}
function filtrarXprecioMax() {
    const precio = document.querySelector('input[name="precioMax"]').value;
    if (!precio || isNaN(precio)) {
        alert('Por favor ingrese un precio máximo válido');
        return;
    }
    fetch(`/api/filtrarXprecioMax?precio=${precio}`)
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
    if (!precio || isNaN(precio)) {
        alert('Por favor ingrese un precio mínimo válido');
        return;
    }
    fetch(`/api/filtrarXprecioMin?precio=${precio}`)
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
    fetch('/api/orderbynombre')
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

function mostrarResultado(texto) {
  const resultado = document.getElementById("resultado");
  const btn = document.getElementById("btnLimpiar");

  resultado.textContent = texto;
  btn.style.display = "inline-block";
}

function limpiarResultado() {
  const resultado = document.getElementById("resultado");
  const btn = document.getElementById("btnLimpiar");

  resultado.textContent = "";
  btn.style.display = "none";
}

cargarProductos();