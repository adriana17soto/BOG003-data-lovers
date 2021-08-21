//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';
import { ordenarPersonajes } from "./data.js";
import { filtrarPersonajes } from "./data.js";
import { filtroGenero } from "./data.js";
import { filtroStatus } from "./data.js";



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
}

btnPers.addEventListener("click", mostrarpantalla);


document.getElementById("btnRegresar").addEventListener("click", () => {
  location.reload();

});
/*let btnRegresar = document.getElementById("btnRegresar");
const mostrarpantalla1 = () =>{
document.getElementById("contenedor").style.display = "block";
document.getElementById("pagPrincipal").style.display = "block";
document.getElementById("botones").style.display = "block";
document.getElementById("btnRegresar").style.display = "none";
document.getElementById("ordenarAlfab").style.display = "none";
document.getElementById("ordenarAlfabZ").style.display = "none";
document.getElementById("contenedorResultados").style.display = "none";
/*document.getElementById("buscar").style.display = "none";*/
/*document.getElementById("filtrarEspecies").style.display = "none";
}
btnRegresar.addEventListener("click", mostrarpantalla1);*/


/*location.reload();*/


const personajes = data.results
const botonPersonajes = document.getElementById("btnPers");
botonPersonajes.addEventListener("click", () => {
  /*console.log("tocandoBotonPersonajes")*/
  verPersonajes(data.results)
})


function verPersonajes(personajes) {
  /*console.log(personajes)*/
  const contenedorResultados = document.getElementById("contenedorResultados");
  /*document.getElementById("contenedorResultados").style.display = "block";*/
  contenedorResultados.innerHTML = "";
  for (let i = 0; i < personajes.length; i++) {
    /* let personaje = personajes[i]*/
    /*let nombre = personajes[i].name;*/
    let especie = personajes[i].species;
    let imag = personajes[i].image;
    let estatus = personajes[i].status;
    let genero = personajes[i].gender;

    /*console.log(nombre)
    console.log(especie)
    console.log(imag)*/

    let tarjeta = document.createElement("div")
    tarjeta.setAttribute("class", "tarjetaPersonajes")
    contenedorResultados.appendChild(tarjeta);

    /*let tex1 = document.createTextNode("Personaje:");
    tarjeta.appendChild(tex1)*/

    let titulo = document.createElement("h2")
    titulo.setAttribute("class", "estiloTitulo")
    /*titulo.innerText = nombre*/
    tarjeta.appendChild(titulo)


    let foto = document.createElement("img")
    foto.setAttribute("class", "estiloImg")
    foto.src = imag
    tarjeta.appendChild(foto)


    /*let tex2 = document.createTextNode("Especie:")
    tarjeta.appendChild(tex2)
    tarjeta.insertBefore(tex2,esp);*/

    let esp = document.createElement("h4");
    esp.setAttribute("class", "estiloEsp")
    esp.innerText = "Specie: " + especie;
    /*esp.innerHTML = especie*/
    tarjeta.appendChild(esp)

    let gen = document.createElement("h4");
    gen.setAttribute("class", "estiloGen")
    gen.innerText = "Gender: " + genero;
    /*esp.innerHTML = especie*/
    tarjeta.appendChild(gen)

    let est = document.createElement("h4");
    est.setAttribute("class", "estiloEst")
    est.innerText = "Status: " + estatus;
    /*esp.innerHTML = especie*/
    tarjeta.appendChild(est)

    /*let tex2 = document.createTextNode("Especie: ")
    /*tarjeta.appendChild(tex2)*/
    /*tarjeta.insertBefore(tex2,esp);*/


    contenedorResultados.appendChild(tarjeta)
    /*console.log(tarjeta)*/
    /*console.log(contenedorResultados)*/

  }
}

/*-----Ordenar alfabeticamente ----*/

const pers = data.results
const ordenarPersAlf = document.getElementById("ordenarAlfab");
ordenarPersAlf.addEventListener("click", () => {
  const personajesOrdenados = ordenarPersonajes(pers)
  verPersonajes(personajesOrdenados)
  /*console.log(personajesOrdenados);*/
})
const ordenarPersAlfz = document.getElementById("ordenarAlfabZ");
ordenarPersAlfz.addEventListener("click", () => {
  const personajesOrdenados = ordenarPersonajes(pers)
  const reverse = personajesOrdenados.reverse()
  verPersonajes(reverse)
  /*console.log(reverse);*/
})

/*-----Filtrar por Especies ----*/

/*verPersonajes(data.results);

const filtrar = document.getElementById("filtrarEspecies");
filtrar.addEventListener("change", (event) => {
  const filtrarPorEsp = filtrarPersonajes(data.results, event.target.value);
  if (event.target.value == "all") {
    verPersonajes(data.results);
  } else {
    verPersonajes(filtrarPorEsp);
  }
});*/

function organizarEspecie(e) {
  let opcion = e.target.value;
  verPersonajes(filtrarPersonajes(opcion, personajes))
  if (e.target.value == 'all')
    verPersonajes(data.results);
}

let botonEspecie = document.getElementById("filtrarEspecies");
botonEspecie.addEventListener("change", organizarEspecie);

/*-----Filtrar por Genero ----*/

function organizarGenero(e) {
  let opcion = e.target.value;
  verPersonajes(filtroGenero(opcion, personajes))
  if (e.target.value == 'todosGeneros')
    verPersonajes(data.results);
}

let botonGenero = document.getElementById("generoPers");
botonGenero.addEventListener("change", organizarGenero);

/*-----Filtrar por status ----*/

function status(e) {
  let statusopc = e.target.value;
  verPersonajes(filtroStatus(statusopc, data.results))
  if (e.target.value == 'todosEstatus')
    verPersonajes(data.results);
}

let btnStatus = document.getElementById("statusPers");
btnStatus.addEventListener("change", status);






















/*const botonPersonajes1 = document.getElementById("btnEpis");
botonPersonajes1.addEventListener("click", () => recorrePersonajes1())

const personajes1 = data.results
function recorrePersonajes1() {
  const contenedorResultados1 = document.getElementById("contenedorResultados1")
  for (let i = 0; i < personajes.length; i++) {
    let personaje1 = personajes1[i]
    let episodios = personajes1[i].episode


    console.log(episodios)
    let tarjeta1 = document.createElement("div")
    tarjeta1.setAttribute("class", "tarjetaPersonajes")


    let titulo1 = document.createElement("img")
    titulo1.src = episodios


    titulo1.innerText = episodios
    tarjeta1.appendChild(titulo1)
    contenedorResultados.appendChild(tarjeta1)
  }*/
