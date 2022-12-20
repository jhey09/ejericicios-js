
/*function encabezado(){
    let encabezado = document.createElement('h1')
    let texto = document.createTextNode('soy un encabezado')
    encabezado.appendChild(texto)
    encabezado.id ='encabezado'
    document.querySelector('body').appendChild(encabezado)
    console.log(document.getElementById('encabezado').classList)

    contenedor.innerHTML += `<h1 id="encabezado">Soy un encabezado 2.0</h1>`

}

function parrafo(){
    let parrafo = document.createElement('h1')
    let texto = document.createTextNode('soy un parrafo')
    parrafo.appendChild(texto)
    encabezado.id = 'parrafo'
    document.querySelector('body').appendChild(parrafo)
    console.log(document.getElementById('parrafo').classList)


}*/


function color() {
    let container = document.getElementById('container')
    container.style.backgroundColor = 'red'
  }
  
  function tam() {
    let container = document.getElementById('container')
    container.style.width = '500px'
    container.style.height = '500px'
  }
  
  function borde() {
    let container = document.getElementById('container')
    container.style.border = '5px solid black'
  }
