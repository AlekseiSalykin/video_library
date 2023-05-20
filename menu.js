function list_genere(){
    document.getElementById("dropListGen").classList.toggle("show");
}

function list_producer(){
    document.getElementById("dropListProd").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.list')) {
    let dropdowns = document.getElementsByClassName("dropList");
    let i;
    for (let i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const films = document.getElementsByClassName("film");
const filmDescriptions = document.getElementsByClassName("film-description");
const filmButtons = document.getElementsByClassName("btnFilm");
const buttonFilmsContainer = document.querySelector(".listFilms");
const displayContent = document.querySelector("#content");
const description = document.querySelector("#description");

buttonFilmsContainer.addEventListener("click", (e) => {
  for (let i = 0; i < filmButtons.length; i++) {
    if (e.target === filmButtons[i]) {
      showFilm(i);
    }
  }
});

function showFilm(index) {
  displayContent.innerHTML = films[index].innerHTML;
  description.innerHTML = filmDescriptions[index].innerHTML;
}

const producerBio = document.getElementsByClassName("contentBio");
const producerButtons = document.getElementsByClassName("btnProd");
const buttonProdContainer = document.querySelector(".dropList");
const biographyContent = document.querySelector("#contentBiograph");

buttonProdContainer.addEventListener("click", (event) => {
  for (let i = 0; i < producerButtons.length; i++) {
    if (event.target === producerButtons[i]) {
      showProducer(i);
    }
  }
});

function showProducer(index) {
  biographyContent.innerHTML = producerBio[index].innerHTML;
}