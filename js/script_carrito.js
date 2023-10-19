const botonAgregar = document.querySelectorAll('button.Agregar');
const itemsContainer = document.getElementById('carrito');

botonAgregar.forEach(button => {
  button.addEventListener('click', agregarCarrito);
});

function agregarCarrito(event) {
  const producto = event.target.parentElement;
  const nombreProducto = producto.querySelector('p.nombrep').textContent;
  const precioProducto = producto.querySelector('p.precio').textContent;
  const descProducto = producto.querySelector('p.descrip').textContent;
  const item = { nombre: nombreProducto, desc:descProducto, precio: precioProducto, cantidad: 1 };
  addToLocalStorage(item);
}

function addToLocalStorage(item) {
  let items = JSON.parse(localStorage.getItem('items')) || [];
  const existingItem = items.find(i => i.nombre === item.nombre && i.desc === item.desc && i.precio === item.precio);
  if (existingItem) {
    existingItem.cantidad += 1;
  } else {
    items.push(item);
  }
  localStorage.setItem('items', JSON.stringify(items));
  displayItems();
}

function resetCarrito() {
  localStorage.removeItem("items");
  displayItems();
}

function displayItems() {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  itemsContainer.innerHTML = '';

  let total = 0;

  items.forEach(item => {
    const itemElement = document.createElement('div');
    const subtotal = parseFloat(item.precio) * item.cantidad;
    total += subtotal;

    itemElement.innerHTML = `
      <article class="art1">
        <h2>${item.nombre}:</h2>
        <p>${item.desc}</p>
      </article>
      <article class="art2">
        <p>${item.precio} x ${item.cantidad}</p>
        <p class="fl"> Subtotal: S/. ${subtotal.toFixed(2)}</p>
      </article>
    `;
    itemsContainer.appendChild(itemElement);
  });

  const totalElement = document.createElement('h3');
  totalElement.innerHTML = `Importe total: S/. ${total.toFixed(2)}`;
  itemsContainer.appendChild(totalElement);
}

function cambioboton(e) {
  e.style.backgroundColor = '#00bd9d';
  e.style.color = '#ffffff';
  e.style.transition = 'all 0.2s ease';
}

function volverboton(e) {
  e.style.backgroundColor = '#00ffd5';
  e.style.color = '#424242';
  e.style.transition = 'all 0.2s ease';
}

const resetButtons = document.getElementsByClassName('reset');
for (let i = 0; i < resetButtons.length; i++) {
  const button = resetButtons[i];
  button.addEventListener('mouseover', function () {
    cambioboton(this);
  });
  button.addEventListener('mouseout', function () {
    volverboton(this);
  });
}

// Display the items on page load
displayItems();