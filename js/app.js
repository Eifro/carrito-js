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
    limpiarCarrito() // limpiar carrito html
    cursos.forEach(curso => { // agregar array productosCarrito a carritoBody
        const {id, imagen, titulo, precio, cantidad} = curso // destructuring object
        carritoBody.innerHTML += // template literal para agregar html del carrito
        `
            <tr>
                <td>
                    <img src="${imagen}" width="100">
                </td>
                <td>${titulo}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>
                    <a href="#" class="borrar-curso" data-id=="${id}">X</a>
                </td>
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