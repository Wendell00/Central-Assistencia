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

const elementosAClick = document.querySelectorAll('.link-contato');

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

const elementosBClick = document.querySelectorAll('.link-saiba');

// Adicione um ouvinte de evento de clique a cada elemento
elementosBClick.forEach(function (elemento) {
  elemento.addEventListener('click', function () {
    // Obtém a posição da seção de contato em relação ao topo da página
    const contatoSection = document.getElementById('sobre');
    const contatoSectionTop = contatoSection.offsetTop;

    // Rola a página para a posição da seção de contato
    window.scrollTo({
      top: contatoSectionTop,
      behavior: 'smooth' // Rola suavemente
    });
  });
});


var botao = document.querySelector('.mapa-btn');

// Adiciona um ouvinte de evento de clique ao botão
botao.addEventListener("click", function() {
    window.open("https://www.google.com/maps/place/R.+Padre+Agostinho+de+Matos,+234+-+Parada+Inglesa,+São+Paulo+-+SP,+02247-140/@-23.4868465,-46.6019267,17z/data=!4m6!3m5!1s0x94cef60e34df7ddb:0xae97c13d7de2573!8m2!3d-23.4868465!4d-46.6019267!16s%2Fg%2F11c23q907w", "_blank");
});
