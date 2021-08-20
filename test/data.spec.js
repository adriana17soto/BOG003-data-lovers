/*import { example, anotherExample } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/





const personajesPrueba =[{ "name": "Rick Sanchez" }, {"name": "Summer Smith"}, {"name": "Beth Smith"}, {"name": "Evil Morty"}]; 
const personajesPrueba2 =[{ "name": "Rick Sanchez" }, { "name": "Rick Sanchez" }, {"name": "Summer Smith"}, {"name": "Beth Smith"}, {"name": "Evil Morty"}]; 
const personajesAZ =[{"name": "Beth Smith"}, {"name": "Evil Morty"}, {"name": "Rick Sanchez"}, {"name": "Summer Smith"}];  
const personajesAZ2 =[{"name": "Beth Smith"}, {"name": "Evil Morty"}, {"name": "Rick Sanchez"},{"name": "Rick Sanchez"}, {"name": "Summer Smith"}];  

import { filtrarPersonajes, ordenarPersonajes, filtroGenero, filtroStatus } from '../src/data.js';
import data from '../src/data/rickandmorty/rickandmorty.js';


describe('ordenarPersonajes es una función', () => {
  it('is a function', () => {
    expect(typeof ordenarPersonajes).toBe('function');
  });

  it('cuando seleccionemos az nos organice los personajes alfabeticamente', () => {
    expect(ordenarPersonajes(personajesPrueba)).toStrictEqual(personajesAZ);
  });
  it('cuando seleccionemos az nos organice los personajes alfabeticamente', () => {
    expect(ordenarPersonajes(personajesPrueba2)).toStrictEqual(personajesAZ2);
  })
});

describe('filtrarPersonajes es una función', () => {
  it('is a function', () => {
    expect(typeof filtrarPersonajes).toBe('function');
  });

  it('cuando busquemos Parasite nos retorne 1 personajes', () => {
    expect(filtrarPersonajes("Parasite", data.results)).toHaveLength(1);
  });
});

describe('filtroGenero es una función', () => {
  it('is a function', () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('cuando seleccionemos filtroGenero nos organice los personajes por genero', () => {
    expect(filtroGenero("Male", data.results)).toHaveLength(372);
  });
  
});

describe('filtroStatus es una función', () => {
  it('is a function', () => {
    expect(typeof filtroStatus).toBe('function');
  });

  it('cuando seleccionemos filtroStatus nos organice los personajes por estatus', () => {
    expect(filtroStatus("Alive", data.results)).toHaveLength(281);
  });
  
});

