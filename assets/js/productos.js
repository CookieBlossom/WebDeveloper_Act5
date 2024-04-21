productos = [
    {
        id: 1,
        name: "AIR JORDAN LEGO VERSION",
        stock: 10,
        marca: "Nike",
        modelo: "AIR JORDAN1 COLOR CHICAGO",
        descripcion: "AIR JORDAN LEGO VERSION",
        precio: 10000,
        fotos: {
            foto1: "./assets/img/producto1.jpg"
        }
    },
    {
        id: 2,
        name: "AIR JORDAN LEGO VERSION",
        stock: 10,
        marca: "Nike",
        modelo: "AIR JORDAN1 COLOR CHICAGO",
        descripcion: "AIR JORDAN LEGO VERSION",
        precio: 10000,
        fotos: {
            foto1: "./assets/img/producto2.jpg"
        }
    },
    {
        id: 3,
        name: "AIR JORDAN LEGO VERSION",
        stock: 10,
        marca: "Nike",
        modelo: "AIR JORDAN1 COLOR CHICAGO",
        descripcion: "AIR JORDAN LEGO VERSION",
        precio: 10000,
        fotos: {
            foto1: "./assets/img/producto1.jpg"
        }
    },
    {
        id: 4,
        name: "AIR JORDAN LEGO VERSION",
        stock: 10,
        marca: "Nike",
        modelo: "AIR JORDAN1 COLOR CHICAGO",
        descripcion: "AIR JORDAN LEGO VERSION",
        precio: 10000,
        fotos: {
            foto1: "./assets/img/producto1.jpg"
        }
    },
    {
        id: 5,
        name: "AIR JORDAN LEGO VERSION",
        stock: 10,
        marca: "Nike",
        modelo: "AIR JORDAN1 COLOR CHICAGO",
        descripcion: "AIR JORDAN LEGO VERSION",
        precio: 10000,
        fotos: {
            foto1: "./assets/img/producto1.jpg"
        }
    },
    {
        id: 6,
        name: "AIR JORDAN LEGO VERSION",
        stock: 10,
        marca: "Nike",
        modelo: "AIR JORDAN1 COLOR CHICAGO",
        descripcion: "AIR JORDAN LEGO VERSION",
        precio: 10000,
        fotos: {
            foto1: "./assets/img/producto1.jpg"
        }
    }
]

const contenedorProducto = document.getElementById("section-productos");

function rellenoProductos(){
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("row");
        div.innerHTML = `
            <div class="card">
                <img class="card-img-top" src="${producto.fotos.foto1}">
                <div class="card-body">
                    <h5 class="card-title">${producto.name}</h5>
                    <p class="card-text">${producto.marca}</p>
                    <p class="card-text">$${producto.precio}</p>
                </div>
            </div>
        `
        contenedorProducto.append(div)
    });        
}

