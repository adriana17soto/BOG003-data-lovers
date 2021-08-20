
export function ordenarPersonajes(personajes) {
  personajes.sort((a, b) => {

    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  })
  return personajes;
}



/* export const filtrarPersonajes = (data, condition) => {
   let dataFiltrada = [];
   data.filter((item) => {
     if (condition == item.species) {
       dataFiltrada.push(item);
     }
   });
   return filtrarPersonajes;
 }*/

/*export function filtrarPersonajes(especie, personajes) {
  let filtroE = personajes.filter((item) => item.species === especie);
  console.log(especie)
 return filtroE

 }*/

/*export const filtrarPersonajes = (personajes, Specie) => {
 if (Specie === "Species") {
   return filtrarPersonajes;
 } else {
   personajes = personajes.filter((Character) => Character.species === Specie)
 return personajes;
 }
};*/



export function filtrarPersonajes(especie, personajes)  { 
  let filtroE = personajes.filter((item) => item.species === especie);
  // console.log(especie)
  return filtroE;
}




export function filtroGenero(genero, personajes) {
  let filtroG = personajes.filter((item) => item.gender === genero);
  /*console.log(filtroG)*/
  return filtroG
}


export function filtroStatus(status, data) {
  let filtroS = data.filter((item) => item.status === status);
  /*console.log(filtroS)*/
 return filtroS
}
