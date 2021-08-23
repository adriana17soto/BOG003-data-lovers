//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";
import { ordenarPersonajes } from "./data.js";
import { filtroEspecies } from "./data.js";
import { filtroGenero } from "./data.js";
import { filtroStatus } from "./data.js";

//********Muestra la página de bienvenida y oculta la 2da vista */

document.getElementById("contenedor").style.display = "block";
document.getElementById("pagPrincipal").style.display = "block";
document.getElementById("botones").style.display = "block";
document.getElementById("btnRegresar").style.display = "none";
document.getElementById("ordenarAlfab").style.display = "none";
document.getElementById("ordenarAlfabZ").style.display = "none";
document.getElementById("filtrarEspecies").style.display = "none";
/*document.getElementById("busqueda").style.display = "none";
document.getElementById("buscar").style.display = "none";*/
document.getElementById("contenedorResultados").style.display = "none";
document.getElementById("generoPers").style.display = "none";
document.getElementById("statusPers").style.display = "none";

//********Muestra la 2da vista  y oculta la página de bienvenida  */

let btnPers = document.getElementById("btnPers");
const mostrarpantalla = () => {
  document.getElementById("contenedor").style.display = "block";
  document.getElementById("pagPrincipal").style.display = "none";
  document.getElementById("botones").style.display = "block";
  document.getElementById("btnPers").style.display = "none";
  document.getElementById("btnRegresar").style.display = "inline-flex";
  document.getElementById("ordenarAlfab").style.display = "inline-flex";
  document.getElementById("ordenarAlfabZ").style.display = "inline-flex";
  document.getElementById("filtrarEspecies").style.display = "inline-flex";
  /*document.getElementById("busqueda").style.display = "inline-flex";
  document.getElementById("buscar").style.display = "inline-flex";*/
  document.getElementById("ordenarAlfabZ").style.display = "inline-flex";
  document.getElementById("contenedorResultados").style.display = "flex";
  document.getElementById("generoPers").style.display = "inline-flex";
  document.getElementById("statusPers").style.display = "inline-flex";
};

btnPers.addEventListener("click", mostrarpantalla);

//******** Vuelve a cargar la página y Muestra la página de bienvenida */
document.getElementById("btnRegresar").addEventListener("click", () => {
  location.reload();
});

//***** Se Trae la data y se crean las tarjetas con los personajes *******
const personajes = data.results;
function verPersonajes(personajes) {
  /*console.log(personajes)*/
  const contenedorResultados = document.getElementById("contenedorResultados");
  contenedorResultados.innerHTML = "";
  for (let i = 0; i < personajes.length; i++) {
    /* let personaje = personajes[i]*/
    let nombre = personajes[i].name;
    let especie = personajes[i].species;
    let imag = personajes[i].image;
    let estatus = personajes[i].status;
    let genero = personajes[i].gender;

    let tarjeta = document.createElement("div");
    tarjeta.setAttribute("class", "tarjetaPersonajes");
    contenedorResultados.appendChild(tarjeta);

    /*let tex1 = document.createTextNode("Personaje:");
    tarjeta.appendChild(tex1)*/

    let titulo = document.createElement("h2");
    titulo.setAttribute("class", "estiloTitulo");
    titulo.innerText = nombre;
    tarjeta.appendChild(titulo);

    let foto = document.createElement("img");
    foto.setAttribute("class", "estiloImg");
    foto.src = imag;
    tarjeta.appendChild(foto);

    /*let tex2 = document.createTextNode("Especie:")
    tarjeta.appendChild(tex2)
    tarjeta.insertBefore(tex2,esp);*/

    let esp = document.createElement("h4");
    esp.setAttribute("class", "estiloEsp");
    esp.innerText = "Specie: " + especie;
    /*esp.innerHTML = especie*/
    tarjeta.appendChild(esp);

    let gen = document.createElement("h4");
    gen.setAttribute("class", "estiloGen");
    gen.innerText = "Gender: " + genero;
    /*esp.innerHTML = especie*/
    tarjeta.appendChild(gen);

    let est = document.createElement("h4");
    est.setAttribute("class", "estiloEst");
    est.innerText = "Status: " + estatus;
    /*esp.innerHTML = especie*/
    tarjeta.appendChild(est);

    /*let tex2 = document.createTextNode("Especie: ")
    /*tarjeta.appendChild(tex2)*/
    /*tarjeta.insertBefore(tex2,esp);*/
  }
}
//********Muestra la 2da vista al precionar el botón Personajes  */
const botonPersonajes = document.getElementById("btnPers");
botonPersonajes.addEventListener("click", () => {
  verPersonajes(personajes);
});

//******Ordena alfabeticamente de la A-Z  ******/
const ordenarPersAlf = document.getElementById("ordenarAlfab");
ordenarPersAlf.addEventListener("click", () => {
  const personajesOrdenados = ordenarPersonajes(personajes);
  verPersonajes(personajesOrdenados);
  /*console.log(personajesOrdenados);*/
});

//******Ordena alfabeticamente de la Z-A  ******/
const ordenarPersAlfz = document.getElementById("ordenarAlfabZ");
ordenarPersAlfz.addEventListener("click", () => {
  const personajesOrdenados = ordenarPersonajes(personajes);
  const reverse = personajesOrdenados.reverse();
  verPersonajes(reverse);
  /*console.log(reverse);*/
});
//********* Filtra por Especie  *********/
function organizarEspecie(e) {
  let opcEspecie = e.target.value;
  verPersonajes(filtroEspecies(opcEspecie, personajes));
  if (opcEspecie == "all") verPersonajes(personajes);
}
let botonEspecie = document.getElementById("filtrarEspecies");
botonEspecie.addEventListener("change", organizarEspecie);

//********* Filtra por Genero  *********/
function organizarGenero(e) {
  let opcGenero = e.target.value;
  verPersonajes(filtroGenero(opcGenero, personajes));
  if (opcGenero == "todosGeneros") verPersonajes(personajes);
}
let botonGenero = document.getElementById("generoPers");
botonGenero.addEventListener("change", organizarGenero);

//********* Filtra por Estatus  *********/
function status(e) {
  let opcEstatus = e.target.value;
  verPersonajes(filtroStatus(opcEstatus, personajes));
  if (opcEstatus == "todosEstatus") verPersonajes(personajes);
}
let btnStatus = document.getElementById("statusPers");
btnStatus.addEventListener("change", status);

