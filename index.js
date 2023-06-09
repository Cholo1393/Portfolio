window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
  var sections = document.querySelectorAll('section');

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionPosition = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (sectionPosition < windowHeight / 1.5) {
      section.classList.add('active');
    }
  }
}

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.isDeleting = false;
  this.tick();
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 100 - Math.random() * 6; // Temps de défilement plus rapide

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    // Vérifier si le texte est affiché en entier
    if (this.loopNum === this.toRotate.length - 1) {
      return; // Arrêter l'exécution de la fonction
    }
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.addEventListener('load', function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
});

var sidenav = document.getElementById("mySidenav");
var navbarItems = document.querySelectorAll("#mySidenav ul li a");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);

for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener('click', closeNav);
}

function openNav() {
  sidenav.style.width = "250px";
}

function closeNav() {
  sidenav.style.width = "0";
}
