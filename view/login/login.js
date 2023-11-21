let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')
let formLogin = document.querySelector('.form-login')


formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();

    let loginRecuperado = localStorage.getItem('email'); // Use 'email' em vez de 'login'
    let senhaRecuperado = localStorage.getItem('senha');

    if (usuario.value == loginRecuperado && senha.value == senhaRecuperado) {
        alert('Login efetuado com sucesso');
        location.href = '../../project/index2.html';
    } else {
        alert('Usuario ou senha invalidos');
        usuario.style.border = '2px solid red';
        senha.style.border = '2px solid red';
    }
});

let fade = document.querySelector('#fade')
let modal = document.querySelector('#modal')
const abrirModal = document.querySelector('ion-icon[name=menu-sharp]')

let eventos = [fade, abrirModal]

let toggleModal = () => {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

eventos.map((elemento) => {
    elemento.addEventListener('click', toggleModal)
})
