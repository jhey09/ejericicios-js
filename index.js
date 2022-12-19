
function encabezado(){
    let encabezado = document.createElement('h1')
    let texto = document.createTextNode('soy un encabezado')
    encabezado.appendChild(texto)
    encabezado.id ='encabezado'
    document.querySelector('body').appendChild(encabezado)
    console.log(document.getElementById('encabezado').classList)

}

function parrafo(){
    let parrafo = document.createElement('h1')
    let texto = document.createTextNode('soy un parrafo')
    parrafo.appendChild(texto)
    encabezado.id = 'parrafo'
    document.querySelector('body').appendChild(parrafo)
    console.log(document.getElementById('parrafo').classList)


}
