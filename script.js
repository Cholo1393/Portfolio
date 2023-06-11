// Fonction pour afficher les sections lors du défilement
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

// Fonction pour l'effet de texte qui se tape à la machine à écrire
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

// Fonction pour ouvrir la barre de navigation latérale
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

// Fonction pour fermer la barre de navigation latérale
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Événements d'écoute pour le défilement et les boutons de navigation
window.addEventListener('scroll', revealOnScroll);

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};

document.getElementById("openBtn").addEventListener("click", openNav);
document.getElementById("closeBtn").addEventListener("click", closeNav);

var navbarItems = document.getElementsByClassName("navbar-item");
for (var i = 0; i < navbarItems.length; i++) {
  navbarItems[i].addEventListener('click', closeNav);
}
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  var video = document.getElementById('loader-video');
  var loaderProgress = document.getElementById('loader-progress');

  // Durée du chargement en millisecondes
  var loadingDuration = 5000;

  // Valeur actuelle du chargement (de 0 à 100)
  var currentProgress = 0;

  // Fonction pour mettre à jour la barre de progression
  function updateProgress() {
    loaderProgress.style.width = currentProgress + '%';
  }

  // Fonction pour incrémenter la valeur du chargement
  function incrementProgress() {
    currentProgress++;
    updateProgress();

    // Si le chargement n'est pas terminé, appeler la fonction à nouveau
    if (currentProgress < 100) {
      setTimeout(incrementProgress, loadingDuration / 100);
    } else {
      // Le chargement est terminé, masquer l'écran de chargement et arrêter la vidéo
      loader.style.display = 'none';
      video.pause();
    }
  }

  // Démarrer le chargement
  setTimeout(incrementProgress, loadingDuration / 100);
});
// // Sélectionne tous les éléments avec la classe "button"
// const buttons = document.querySelectorAll('.button');

// // Parcourt chaque bouton et ajoute un gestionnaire d'événements au clic
// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     button.classList.add('clicked');
//     setTimeout(() => {
//       button.classList.remove('clicked');
//     }, 300);
//   });
// });
// Après avoir traité la soumission réussie du formulaire

// Redirigez l'utilisateur vers la page de confirmation personnalisée
window.location.href = 'confirmation.html';
