window.onload = function () {
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');

    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if (nombre != '') {
        subtitulo.innerHTML += nombre;
    } else {
        subtitulo.innerHTML += 'INVITADO';
    }

    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if (confirmar) {
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for (let i = 0; i < destacado.length; i++) {
        if (i % 2 == 0) {
            destacado[i].classList.add('destacadoPar');
        } else {
            destacado[i].classList.add('destacadoImpar');
        }
    }


    container.style.display = 'block';

    let $ = (e) => document.querySelector(e)

    let logo = $('figure')
    let menu = $('#menu')

    logo.addEventListener('click', (e) => {
        console.log('hiciste click en mi logo')
        $('#menu').classList.toggle('mostrar')
    })

    menu.addEventListener('mouseleave', (e) => {
        console.log('vuelve, que sin ti la vida se me va')
        menu.classList.toggle('mostrar')
    })
}