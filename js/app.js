/* selectores */
const carrito = document.querySelector('#carrito')
const carritoBody = document.querySelector('#lista-carrito tbody')
const limpiarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let productosCarrito = []


/* event listeners */
eventListeners()
function eventListeners()
{
    listaCursos.addEventListener('click', agregarCurso) // agregar curso
}


/* funciones */
function agregarCurso(e)
{
    e.preventDefault() // prevenir event submit
    if (e.target.classList.contains('agregar-carrito')) { // prevenir event boobling
        const curso = e.target.parentElement.parentElement // traversing dom
        leerDatosCurso(curso)
    }
}

function leerDatosCurso(curso)
{
    const datosCurso = { // objeto del curso seleccionado
        id: curso.querySelector('.info-card a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('.info-card h4').textContent,
        precio: curso.querySelector('.info-card .precio span').textContent,
        cantidad: 1
    }
    productosCarrito = [...productosCarrito, datosCurso] // spread operator para hacer referencia anterior del array
    console.log(productosCarrito)
    mostrarCursoCarrito(productosCarrito)
}

function mostrarCursoCarrito(cursos)
{
    limpiarCarrito()
    cursos.forEach(curso => { // agregar array productosCarrito a carritoBody
        carritoBody.innerHTML += // template literal para agregar html del carrito
        `
            <tr data-id=${curso.id}>
                <th>
                    <img src="${curso.imagen}" width="150">
                </th>
                <th>${curso.titulo}</th>
                <th>${curso.precio}</th>
                <th>${curso.cantidad}</th>
            </tr>
        ` 
    })   
}

function limpiarCarrito()
{
    while(carritoBody.firstChild) {
        carritoBody.removeChild(carritoBody.firstChild)
    }
}