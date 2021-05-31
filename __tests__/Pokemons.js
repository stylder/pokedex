import {
  getPokemonsList,
  getPokemonByName,
  getPokemonImage,
  getPokemonSpeciesByName,
} from '../services/api';

test('Get the pokemon list', async done => {
  const {results} = await getPokemonsList({limit: 50, offset: 0});
  expect(results.length).toBe(50);
  done();
});

test('Get bulbasaur ', async done => {
  const {name} = await getPokemonByName(1);
  expect(name).toBe('bulbasaur');
  done();
});

test('Get bulbasaur image', async done => {
  const image = await getPokemonImage('bulbasaur');
  const isUrl = image.includes('https');
  expect(isUrl).toBe(true);
  done();
});

test('Get bulbasaur species', async done => {
  const response = await getPokemonSpeciesByName('bulbasaur');
  expect(response).toHaveProperty('flavor_text_entries');
  expect(response).toHaveProperty('names');
  done();
}, 10000);
