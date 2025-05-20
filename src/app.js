import "bootstrap";
import "./style.css";

window.onload = function () {
  let quien = ['Un hacker', 'Un poltergeist', 'Un malvado dictador', 'Mi vecino con síndrome de Diógenes', 'Un Ent'];
  let hizo = ['tergiversó', 'hizo desaparecer', 'ensució', 'lanzó al espacio', 'aplastó', 'saboteó', 'defenestró', 'se comió', 'le dió un beso a'];
  let que = ['mi discurso', 'mis calzoncillos', 'mi cuenta de 4Geeks', 'todas mis cervezas', 'mis gafas'];
  let cuando = ['cuando estaba trabajando en este proyecto', 'a la hora de merendar', 'mientras estaba en el altar a punto de casarme', 'mientras ponía esta excusa', 'mientras este caminaba por el bosque', 'mientras este me insultaba'];

  let currentQuien = '';
  let currentHizo = '';
  let currentQue = '';
  let currentCuando = '';

  function generarExcusa() {
    // Genera una excusa nueva completa
    currentQuien = quien[Math.floor(Math.random() * quien.length)];
    currentHizo = hizo[Math.floor(Math.random() * hizo.length)];
    currentQue = que[Math.floor(Math.random() * que.length)];
    currentCuando = cuando[Math.floor(Math.random() * cuando.length)];
    actualizarExcusa();
  }

  // Esta función actualiza el texto mostrado con los valores actuales
  function actualizarExcusa() {
    document.getElementById('quien').innerText = currentQuien;
    document.getElementById('hizo').innerText = currentHizo;
    document.getElementById('que').innerText = currentQue;
    document.getElementById('cuando').innerText = currentCuando + '.';
  }

  generarExcusa();

  // Evento para botón "Prueba otra vez"
  document.getElementById("tryAgainButton").addEventListener("click", function () {
    generarExcusa();
    this.blur();
  });

  // Botón "Nuevo: Quien"
  document.getElementById("nuevoQuien").addEventListener("click", function () {
    currentQuien = quien[Math.floor(Math.random() * quien.length)];
    actualizarExcusa();
    this.blur();
  });

  // Botón "Nuevo: Hizo"
  document.getElementById("nuevoHizo").addEventListener("click", function () {
    currentHizo = hizo[Math.floor(Math.random() * hizo.length)];
    actualizarExcusa();
    this.blur();
  });

  // Botón "Nuevo: Qué"
  document.getElementById("nuevoQue").addEventListener("click", function () {
    currentQue = que[Math.floor(Math.random() * que.length)];
    actualizarExcusa();
    this.blur();
  });

  // Botón "Nuevo: Cuando"
  document.getElementById("nuevoCuando").addEventListener("click", function () {
    currentCuando = cuando[Math.floor(Math.random() * cuando.length)];
    actualizarExcusa();
    this.blur();
  });
};
