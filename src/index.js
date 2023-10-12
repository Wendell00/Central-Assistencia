// var dataAtual = new Date();

// // Obtém o ano atual
// var anoAtual = dataAtual.getFullYear();

// var elementDate = document.querySelector('.year-date');
// elementDate.innerText = anoAtual;

const body = document.querySelector("body")

aside = document.querySelector('.aside-nav')
menuIcon = document.querySelector('.menu-icon')
closeIcon = document.querySelector('.aside-x')

menuIcon.addEventListener('click', () => {
    aside.classList.toggle('display-toggle');
    body.classList.toggle('overflow-toggle')
});

closeIcon.addEventListener('click', () => {
    aside.classList.toggle('display-toggle');
    body.classList.toggle('overflow-toggle')
});

// var dataAtual = new Date();

// // Obtém o ano atual
// var anoAtual = dataAtual.getFullYear();

// var elementDate = document.querySelector('.year-date');
// elementDate.innerText = anoAtual;

const elementosAClick = document.querySelectorAll('.a-click');

// Adicione um ouvinte de evento de clique a cada elemento
elementosAClick.forEach(function (elemento) {
  elemento.addEventListener('click', function () {
    // Obtém a posição da seção de contato em relação ao topo da página
    const contatoSection = document.getElementById('contato');
    const contatoSectionTop = contatoSection.offsetTop;

    // Rola a página para a posição da seção de contato
    window.scrollTo({
      top: contatoSectionTop,
      behavior: 'smooth' // Rola suavemente
    });
  });
});
