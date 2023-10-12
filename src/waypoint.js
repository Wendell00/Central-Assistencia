var mainText = document.querySelector('.main-content')
window.addEventListener('load', function() {
    mainText.classList.add('animate')
});

var conhecaImg = new Waypoint({
  element: document.querySelector('.conheca-img'),
  handler: function(direction) {
    this.element.classList.add('animate')
  },
  offset: '75%'
})

var conhecaContent = new Waypoint({
  element: document.querySelector('.conheca-content'),
  handler: function(direction) {
    this.element.classList.add('animate')
  },
  offset: '75%'
})

var especializacaoLi1 = new Waypoint({
  element: document.querySelector('.especializacao-li-1'),
  handler: function(direction) {
    this.element.classList.add('animate')
  },
  offset: '75%'
})

var especializacaoLi2 = new Waypoint({
  element: document.querySelector('.especializacao-li-2'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 300);
  },
  offset: '75%'
})

var especializacaoLi3 = new Waypoint({
  element: document.querySelector('.especializacao-li-3'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 600);
  },
  offset: '75%'
})

var especializacaoLi4 = new Waypoint({
  element: document.querySelector('.especializacao-li-4'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 900);
  },
  offset: '75%'
})

var cardsCard1 = new Waypoint({
  element: document.querySelector('.cards-card-1'),
  handler: function(direction) {
    this.element.classList.add('animate')
  },
  offset: '75%'
})

var cardsCard2 = new Waypoint({
  element: document.querySelector('.cards-card-2'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 300);
  },
  offset: '75%'
})

var cardsCard3 = new Waypoint({
  element: document.querySelector('.cards-card-3'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 600);
  },
  offset: '75%'
})

var cardsCard4 = new Waypoint({
  element: document.querySelector('.cards-card-4'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 900);
  },
  offset: '75%'
})

var cardsCard5 = new Waypoint({
  element: document.querySelector('.cards-card-5'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 1200);
  },
  offset: '75%'
})

var cardsCard6 = new Waypoint({
  element: document.querySelector('.cards-card-6'),
  handler: function(direction) {
    let elemento = this.element
    setTimeout(function() {
      elemento.classList.add('animate')
    }, 1500);
  },
  offset: '75%'
})


var mapa = new Waypoint({
  element: document.querySelector('.mapa'),
  handler: function(direction) {
    this.element.classList.add('animate')
  },
  offset: '75%'
})

var mapaContent = new Waypoint({
  element: document.querySelector('.maps-content'),
  handler: function(direction) {
    this.element.classList.add('animate')
  },
  offset: '75%'
})
