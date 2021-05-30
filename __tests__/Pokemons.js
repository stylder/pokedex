import {
  getPokemonsList,
  getPokemonByName,
  getPokemonImage,
  getPokemonSpeciesByName,
} from '../services/api';

test('Get the pokemon list', async () => {
  const {results} = await getPokemonsList({limit: 50, offset: 0});
  expect(results.length).toBe(50);
});

test('Get bulbasaur ', async () => {
  const {name} = await getPokemonByName(1);
  expect(name).toBe('bulbasaur');
});

test('Get bulbasaur image', async () => {
  const image = await getPokemonImage('bulbasaur');
  const isUrl = image.includes('https');
  expect(isUrl).toBe(true);
});

test('Get bulbasaur species', async () => {
  const response = await getPokemonSpeciesByName('bulbasaur');
  expect(response).toHaveProperty('flavor_text_entries');
  expect(response).toHaveProperty('names');
});
