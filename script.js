let bebidas = [
    {id: 1, nombre: "Agua mineral Glaciar 2lt - Pack x 6", categoria: "aguas", stock: 500, precio: 1500},
    {id: 2, nombre: "Agua mineral Villavicencio 2lt - Pack x 6", categoria: "aguas", stock: 400, precio: 1700},
    {id: 3, nombre: "Agua mineral Eco 2lt - Pack x 6", categoria: "aguas", stock: 200, precio: 1600},
    {id: 4, nombre: "Coca Cola 2,25lt - Pack x 6", categoria: "gaseosas", stock: 600, precio: 2300},
    {id: 5, nombre: "Coca Cola Zero 2,25lt - Pack x 6", categoria: "gaseosas", stock: 300, precio: 2100},
    {id: 6, nombre: "Sprite 2,25lt - Pack x 6", categoria: "gaseosas", stock: 100, precio: 2300},
    {id: 7, nombre: "Fanta 2,25lt - Pack x 6", categoria: "gaseosas", stock: 200, precio: 2200},
    {id: 8, nombre: "Lata Cerveza Quilmes 473ml - Pack x 6", categoria: "cervezas", stock: 250, precio: 1800},
    {id: 9, nombre: "Lata Cerveza Stella Artois 473ml - Pack x 6", categoria: "cervezas", stock: 300, precio: 2350},
    {id: 10, nombre: "Lata Cerveza Heineken 473ml - Pack x 6", categoria: "cervezas", stock: 470, precio: 2600}
]

function listarBebidas() {
    bebidas.forEach ((bebida) => {
    let mensaje = "Lista de bebidas disponibles:\n" + bebida.id + " - " + bebida.nombre + " - $" + bebida.precio
      alert (mensaje)}
    )
  }

const carrito = [] 

function agregarAlCarrito() {
    let bebidaElegida = parseInt(prompt("Ingrese el nùmero de ID de la bebida que desea agregar al carrito:")) 
    let bebida = bebidas.find(item => item.id === bebidaElegida) 
    if (bebida) {
      carrito.push(bebida) 
      let mensaje2 = "Agregaste: " + bebida.nombre + " - $" + bebida.precio
      alert(mensaje2) 
    } else {
      alert('La bebida elegida no está disponible') 
    }
  }
 
  function mostrarCarrito() {
    if (carrito.length === 0) {
      alert("El carrito está vacío") 
    } else {
      carrito.forEach((bebida) => {
        let mensaje3 = "Lista de bebidas confirmadas:\n" + bebida.id + " - " + bebida.nombre + " - $" + bebida.precio
        alert(mensaje3) 
      })  
    }
  }
    
function calcularTotal() {
const total = carrito.reduce((suma, bebida) => suma + bebida.precio, 0) 
return total}
  
function finalizarCompra() {
    const total = calcularTotal() 
    alert ("El total de tu compra es de $" + total + "\n¡Gracias por elegirnos!")
  }

let menu = "¡Bienvenido a la Tienda de Bebidas! \nElegí una opción:\n1 - Ver listado completo de Bebidas\n2 - Agregar al carrito \n3 - Ver Bebidas elegidas\n4 - Finalizar compra \n0 - Salir"

  while (true) {
    let opcion = Number(prompt(menu)) 
    if (opcion === 1) {
    listarBebidas() 
    } else if (opcion === 2) {
    agregarAlCarrito()
    } else if (opcion === 3) {
    mostrarCarrito() 
    } else if (opcion === 4) {
      if (carrito.length === 0) {
        alert("¡Ups! El carrito está vacio. Por favor seleccionar las bebidas que más te gusten!") 
      } else {
        finalizarCompra() 
        break 
      }
    } else if (opcion === 0) {
    alert ("¡Gracias por visitarnos!")  
    break 
    } else {
      alert('Opción incorrecta. Intente nuevamente.')
    }
  }
