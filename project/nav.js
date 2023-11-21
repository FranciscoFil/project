let navs = document.querySelectorAll('.texte');

navs.forEach(nav => {
    nav.addEventListener('click', () => {
        alert('FAÇA LOGIN PARA TER ACESSO!');
    });
});