window.addEventListener('load', () => {
    let $ = (e) => document.querySelector(e)

    let h1 = $('h1')
    let section = $('section')
    let article = $('article')

    h1.innerHTML += "AGREGAR PELÍCULAS"
    h1.classList.add('titulo')

    article.classList.add('fondoTransparente')
    section.classList.add('fondoCRUD')

    let inputTitulo = $('#titulo')

    let palabra = []
    inputTitulo.addEventListener('keypress', (e) => {
        let letras = e.key
        palabra.push(letras)
        if (palabra[6] === 'o' || palabra[6] === "O") {
            palabra = []
            alert('SECRETO MAGICO')
        } else if (palabra[5] === 't' || palabra[5] === 'T') {
            console.log(palabra)
        } else if (palabra[4] === 'e' || palabra[4] === 'E') {
            console.log(palabra)
        } else if (palabra[3] === 'r' || palabra[3] === 'R') {
            console.log(palabra)
        } else if (palabra[2] === 'c' || palabra[2] === 'C') {
            console.log(palabra)
        } else if (palabra[1] === 'e' || palabra[1] === 'E') {
            console.log(palabra)
        } else if (palabra[0] === 's' || palabra[0] === 'S') {
            console.log(palabra)
        } else {
            palabra = []
        }
        console.log(palabra)
    })
})
