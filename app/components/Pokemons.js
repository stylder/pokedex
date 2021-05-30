/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import PokemonPreview from './PokemonPreview';
import SearchBar from './SearchBar';
import {getPokemonsList} from '../../services/api';
import colors from './colors';

const Pokemons = ({navigation}) => {
  const [loanding, setLoanding] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(50);
  const [offset] = useState(0);

  const updateList = () => {
    setLoanding(true);
    getPokemonsList({limit, offset})
      .then(({results}) => setPokemons(results))
      .finally(() => setLoanding(false));
  };

  useEffect(() => {
    updateList();
  }, []);

  useEffect(() => {
    updateList();
  }, [limit]);

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchCont}>
        <SearchBar
          onChangeText={value => setSearch(value)}
          onClear={() => {
            setSearch('');
          }}
          value={search}
        />
      </View>

      <ScrollView
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            setLimit(limit + 50);
          }
        }}>
        <View style={styles.pokemons}>
          {pokemons
            .filter(
              pokemon =>
                pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
                pokemon.url === `https://pokeapi.co/api/v2/pokemon/${search}/`,
            )
            .map((pokemon, index) => (
              <PokemonPreview
                key={index}
                pokemon={pokemon}
                navigation={navigation}
              />
            ))}
        </View>
      </ScrollView>
      {loanding && (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" color={colors.red} />
        </View>
      )}
    </View>
  );
};

export default Pokemons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pokemons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    flex: 3,
  },
  searchCont: {
    alignSelf: 'center',
  },
});
