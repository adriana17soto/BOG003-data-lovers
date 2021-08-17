//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("contenedor").style.display = "block";
document.getElementById("pagPrincipal").style.display = "block";
document.getElementById("botones").style.display = "block";
document.getElementById("filtrarAlfab").style.display = "none";
document.getElementById("btnRegresar").style.display = "none";
document.getElementById("filtrarAlfab").style.display = "none";


let btnPers = document.getElementById("btnPers"); 
const mostrarpantalla = () => {
  document.getElementById("contenedor").style.display = "block";
  document.getElementById("pagPrincipal").style.display = "none";
  document.getElementById("botones").style.display = "none";
  document.getElementById("filtrarAlfab").style.display = "block";
  document.getElementById("btnRegresar").style.display = "block";
  document.getElementById("filtrarAlfab").style.display = "block";
  }

btnPers.addEventListener("click", mostrarpantalla);


let btnRegresar = document.getElementById("btnRegresar");
const mostrarpantalla1 = () =>{
document.getElementById("contenedor").style.display = "block";
document.getElementById("pagPrincipal").style.display = "block";
document.getElementById("botones").style.display = "block";
document.getElementById("filtrarAlfab").style.display = "none";
document.getElementById("btnRegresar").style.display = "none";
document.getElementById("filtrarAlfab").style.display = "none";
document.getElementById("contenedorResultados").style.display = "none";
}
btnRegresar.addEventListener("click", mostrarpantalla1);


/*location.reload();*/

/*const personajes = data.results*/
const botonPersonajes = document.getElementById("btnPers");
botonPersonajes.addEventListener("click", () =>{ 
  /*console.log("tocandoBotonPersonajes")*/
  verPersonajes(data.results)})


function verPersonajes(personajes) {
  /*console.log(personajes)*/
  const contenedorResultados = document.getElementById("contenedorResultados")
  /*document.getElementById("contenedorResultados").style.display = "block";*/
  contenedorResultados.innerHTML="";
  for (let i = 0; i < personajes.length; i++) {
    /*let personaje = personajes[i]*/
    let nombre = personajes[i].name
    let especie = personajes[i].species
    let imag = personajes[i].image
    /*console.log(nombre)
    console.log(especie)
    console.log(imag)*/

    let tarjeta = document.createElement("div")
    tarjeta.setAttribute("class", "tarjetaPersonajes")

    let tex1 = document.createTextNode("Personaje:");
    tarjeta.appendChild(tex1)

    let titulo = document.createElement("p")
    titulo.innerText = nombre
    tarjeta.appendChild(titulo)


    /*let tex2 = document.createTextNode("Especie:")
    tarjeta.appendChild(tex2)
    tarjeta.insertBefore(tex2,esp);*/

    let esp = document.createElement("p")
    esp.innerHTML = especie
    tarjeta.appendChild(esp)

    let tex2 = document.createTextNode("Especie: ")
    /*tarjeta.appendChild(tex2)*/
   tarjeta.insertBefore(tex2,esp);

    let foto = document.createElement("img")
    foto.setAttribute("class", "estiloImg")
    foto.src = imag
    tarjeta.appendChild(foto)

    contenedorResultados.appendChild(tarjeta)
    /*console.log(tarjeta)*/
    /*console.log(contenedorResultados)*/

  }}

const filtrarPersAlf = document.getElementById("filtrarAlfab");
filtrarPersAlf.addEventListener("click", () => filtrarPersonajes())
const personajes0 = data.results
function filtrarPersonajes() {
  /*const contenedorResultados1 = document.getElementById("contenedorResultados1")*/

  /*for (let i = 0; i < personajes0.length; i++) {*/
  /*  let personaje0 = personajes0[i]*/


    personajes0.sort((a, b) => {

      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })

   /*console.log(personajes0)*/
   verPersonajes(personajes0)
  /* document.getElementById('contenedorResultados').removeChild(tarjeta);*/

}