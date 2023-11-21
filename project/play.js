let fade = document.querySelector('#fade')
let modal = document.querySelector('#modal')
const abrirModal = document.querySelector('ion-icon[name=menu-sharp]')
// ..................................................................
let fade2 = document.querySelector('#fade-2')
let modal2 = document.querySelector('#modal-2')
const abrirModal2 = document.querySelector('#btnCarrinhoCompras')


//MODAL1..............................................................


let eventos = [fade, abrirModal]

let toogleModal = () => {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

eventos.map((elemento)=>{
    elemento.addEventListener('click', toogleModal)
})


// MODAL2................................................................
let eventos2 = [fade2, abrirModal2]

let toggleModal2 = () => {
    fade2.classList.toggle('hide-2')
    modal2.classList.toggle('hide-2')
}

eventos2.map((elemento2) => {
    elemento2.addEventListener('click', toggleModal2)


})


const addBtn = document.querySelectorAll('.add')
addBtn.forEach((button, i)=>{
    button.addEventListener('click', (e)=>{
        e.preventDefault()
        const nomeProduto = document.querySelectorAll('.card-play-a h2')
        const valorProduto = document.querySelectorAll('.card-play-a p')
        const imgProduto = document.querySelectorAll('.card-play-a img')
        const nome = nomeProduto[i - 1].lastChild.nodeValue
        const valor = valorProduto[i - 1].lastChild.nodeValue
        const img = imgProduto[i - 1].src
        console.log(valorProduto[i].lastChild.nodeValue, nomeProduto[i].lastChild.nodeValue, imgProduto[i].src)
        const containerCarrinho = document.querySelector('#containerCarrinho')
        containerCarrinho.innerHTML += `
        <div style="border: 0.1px solid yellow;  box-shadow: 1px 1px 10px white; width: 100%;padding: 1rem 0rem;">
            <div class="img-car" style="color:white; width: 100%; text-align:center;"><img src="${img}" style="width: 50%;"></div>
            <p style="color:white; text-align:center; font-size: 2.5rem; padding: 1rem 0rem; text-shadow: 1px 1px 10px yellow ">${nome}</p>
            <p style="color:green; text-align:center;font-size: 1.5rem; text-shadow: 1px 1px 1px white; ">${valor}</p>
        </div>
        <a href="../project/index2.html"> <button style="height: 2rem; align-self:center; padding: 0rem 1rem; background: green; color: white; cursor:pointer; border-radius:1rem; border: none;"> COMPRAR </button> </a>
        `
    })
})





















// ..................................................................
// const JOGOS = document.querySelectorAll('.item h2')
// const precoJogo = document.querySelectorAll('#preco');
// const addCarrinho = document.querySelectorAll('.add');
// const qtdJogo = document.querySelectorAll('input#quantidade'); 
// const carrinho = document.querySelector('#carrinho');
// const precoTotal = document.querySelector('#preco-total');
// const imagens = document.querySelectorAll('.card-play-a img'); 
// ....................................................................

// let carrinhoCompras = [];

// function totalCarrinho() {
//     let total = 0;
//     for (let i = 0; i < carrinhoCompras.length; i++) {
//         total += carrinhoCompras[i].valor;
//     }
//     return total;
// }

// function removerDoCarrinho(posicao) {
//     carrinhoCompras.splice(posicao, 1);
//     atualizarCarrinho();
// }

// function adicionarAoCarrinho(jogo, quantidade, valor, imagem) {
//     carrinhoCompras.push({ jogo, quantidade, valor, imagem });
// }

// function atualizarCarrinho() {
//     carrinho.innerHTML = "";
//     precoTotal.innerHTML = `R$${totalCarrinho().toFixed(2)}`;

//     for (let i = 0; i < carrinhoCompras.length; i++) {
//         let jogo = carrinhoCompras[i];

//         let div = document.createElement('div');

//         div.innerHTML = `<p> <img width="150" src="${jogo.imagem}"> ${jogo.jogo} --- ${jogo.quantidade} -- R$${jogo.valor.toFixed(2)} -- <button onclick="removerDoCarrinho(${i})"> X </button> </p>`;

//         carrinho.appendChild(div);
//     }
// }

// addCarrinho.forEach((botao, i) => {
//     botao.addEventListener('click', () => {
//         let cardPlayA = botao.closest('.card-play-a');
//         let jogo = cardPlayA.querySelector('h2').textContent;
//         let imagem = cardPlayA.querySelector('img').src;
//         let qtdJogos = Number(cardPlayA.querySelector('input#quantidade').value);
//         let total = Number(cardPlayA.querySelector('#preco').textContent);
//         let preco = qtdJogos * total;

//         adicionarAoCarrinho(jogo, qtdJogos, preco, imagem);
//         atualizarCarrinho();
//     });
// });

    
