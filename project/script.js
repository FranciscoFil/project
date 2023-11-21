let fade = document.querySelector('#fade')
let modal = document.querySelector('#modal')
const abrirModal = document.querySelector('ion-icon[name=menu-sharp]')


// carrossel automatico ....................................
document.addEventListener('DOMContentLoaded', function () {
    const imgs = document.querySelector('.carrossel-1');
    const img = document.querySelectorAll('.carrossel-1 img');
    
    let slideAtual = 0;

    function carrossel() {
        slideAtual++;

        if (slideAtual > img.length - 1) {
            slideAtual = 0;
        }

        imgs.style.transform = `translateX(${-slideAtual * img[0].offsetWidth}px)`;
    }

    setInterval(carrossel, 5000);
});

// Temporizador Black Friday ..............................................................
document.addEventListener('DOMContentLoaded', function () {
    const dataBlackFriday = new Date('2023-12-01T00:00:00'); // Data da Black Friday
    const temporizadorElement = document.getElementById('contagem-regressiva');

    function atualizarContagemRegressiva() {
        const agora = new Date();
        const diferenca = dataBlackFriday - agora;

        if (diferenca > 0) {
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            temporizadorElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        } else {
            temporizadorElement.innerHTML = 'Black Friday está aqui!';
        }
    }

    setInterval(atualizarContagemRegressiva, 1000);
});


// carrossel manual

const carrossel2 = document.querySelector('div#carrossel-2')
const slides = document.querySelectorAll('.slide')
const btnDireita = document.querySelector('.direita-2')
const btnEsquerda = document.querySelector('.esquerda-2')

let slideAtual2 = 0

btnDireita.addEventListener('click', ()=>{
    slideAtual2++

    if(slideAtual2 > slides.length - 1){
        slideAtual2 = 0
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

btnEsquerda.addEventListener('click', ()=>{
    slideAtual2--

    if(slideAtual2 < 0){
        slideAtual2 = slides.length - 1
    }

    carrossel2.style.transform = `translateX(${-slideAtual2 * slides[0].offsetWidth}px)`
})

// sanduiche com modal 



let eventos = [fade, abrirModal]

let toogleModal = () => {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

eventos.map((elemento)=>{
    elemento.addEventListener('click', toogleModal)
})
// 

