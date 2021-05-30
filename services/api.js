import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex({
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 60 * 1000 * 60 * 24, // 1 day
  timeout: 5 * 1000, // 5s
});

export const getPokemonByName = pokemon => P.getPokemonByName(pokemon);

export const getPokemonsList = params => P.getPokemonsList(params);

export const getAbilityByName = pokemon => P.getAbilityByName(pokemon);

export const getPokemonSpeciesByName = pokemon =>
  P.getPokemonSpeciesByName(pokemon);

export const getPokemonImage = pokemon =>
  `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemon}.png`;
