let campoNome = document.querySelector('#nome');
let campoEmail = document.querySelector('#email');
let campoIdade = document.querySelector('#idade');
let campoSenha = document.querySelector('#senha');
let campoSenha2 = document.querySelector('#senha-2');
let formulario = document.querySelector('#form');
let btnCadastrar = document.querySelector('input[type=submit]');



formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    if (campoEmail.value == '' || campoNome.value == '') {
        alert('Campo não preenchido');
    } else {
        if (campoIdade.value == '' || campoIdade.value < 18) {
            alert('O cadastro só pode ser feito por pessoas maiores de 18 anos');
        } else {
            if (campoSenha.value === campoSenha2.value) {
                localStorage.setItem('nome', campoNome.value);
                localStorage.setItem('senha', campoSenha.value);
                localStorage.setItem('idade', campoIdade.value);
                localStorage.setItem('senha-2', campoSenha2.value);
                localStorage.setItem('email', campoEmail.value);

                alert('Usuário cadastrado com sucesso!');

                location.href = '../login/login.html';
            } else {
                alert('Informe uma senha igual à anterior!');
            }
        }
    }
});

const campoCep = document.querySelector('#cep')
const campoLogradouro = document.querySelector('#logradouro')
const campoLocalidade = document.querySelector('#localidade')
const campoBairro = document.querySelector('#bairro')
const campoUf = document.querySelector('#uf')
const spanCepInvalido = document.querySelector('#cepInvalido')

campoCep.addEventListener('focusout', async()=>{
    let resposta = await fetch(`https://viacep.com.br/ws/${campoCep.value}/json/`)

    let dados = await resposta.json()
    console.log(dados)

    if(dados.erro){
        spanCepInvalido.textContent = "CEP INVALIDO!"
        campoLogradouro.value = ''
        campoLocalidade.value = ''
        campoBairro.value = ''
        campoUf.value = ''
    } else{

    spanCepInvalido.textContent = ''
    campoLogradouro.value =  dados.logradouro
    campoLocalidade.value =  dados.localidade
    campoBairro.value =  dados.bairro
    campoUf.value =  dados.uf

    }

})


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
