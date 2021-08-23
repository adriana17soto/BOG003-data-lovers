//***** Ordena los personajes de A-Z *******
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
//***** Filtra los personajes por Especie *******
export function filtroEspecies(especie, personajes)  { 
  let filtrarEs = personajes.filter((pers) => pers.species === especie);
  // console.log(especie)
  return filtrarEs;
}
//***** Filtra los personajes por Genero *******
export function filtroGenero(genero, personajes) {
  let filtrarGe = personajes.filter((pers) => pers.gender === genero);
  /*console.log(filtroG)*/
  return filtrarGe
}
//***** Filtra los personajes por Estatus *******
export function filtroStatus(status, personajes) {
  let filtrarSt = personajes.filter((pers) => pers.status === status);
  /*console.log(filtroS)*/
 return filtrarSt
}
