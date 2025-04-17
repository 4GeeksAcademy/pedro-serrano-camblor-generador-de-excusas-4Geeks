import "bootstrap";
import "./style.css";


//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
    let quien = ['Un hacker', 'Un poltergeist', 'Un malvado dictador', 'Mi vecino con síndrome de Diógenes', 'Un Ent'];
    let hizo = ['tergiversó', 'hizo desaparecer', 'ensució', 'lanzó al espacio', 'aplastó', 'saboteó', 'defenestró', 'se comió', 'le dió un beso a'];
    let que = ['mi discurso', 'mis calzoncillos', 'mi cuenta de 4Geeks', 'todas mis cervezas', 'mis gafas'];
    let cuando = ['cuando estaba trabajando en este proyecto', 'a la hora de merendar', 'mientras estaba en el altar a punto de casarme', 'mientras ponía esta excusa', 'mientras este caminaba por el bosque', 'mientras este me insultaba'];

    let randomQuien = quien[Math.floor(Math.random() * quien.length)];
    let randomHizo = hizo[Math.floor(Math.random() * hizo.length)];
    let randomQue = que[Math.floor(Math.random() * que.length)];
    let randomCuando = cuando[Math.floor(Math.random() * cuando.length)];

    let excusa = randomQuien + ' ' + randomHizo + ' ' + randomQue + ' ' + randomCuando + '.';
  
    document.getElementById('excusa').innerText = excusa;
  //console.log("Hello Rigo from the console!");
};
