import React from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Dimensions,
  Text,
  StyleSheet,
} from 'react-native';

const {width} = Dimensions.get('window');
import {getPokemonImage} from '../../services/api';

const PokemonPreview = ({navigation, pokemon}) => {
  const onPress = () => {
    navigation.navigate('Details', {pokemon});
  };

  return (
    <View
      style={styles.container}
      shadowColor="rgba(0,0,0,0.25)"
      shadowOffset={styles.shadowOffset}
      shadowOpacity={0.5}
      shadowRadius={1}>
      <TouchableHighlight onPress={onPress} underlayColor="lightgray">
        <View style={styles.view}>
          <Image
            source={{uri: getPokemonImage(pokemon.name)}}
            style={styles.image}
          />
          <Text style={styles.text} numberOfLines={1}>
            {pokemon.name}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 9,
    height: width / 3 - 18,
    width: width / 3 - 18,
    backgroundColor: 'white',
  },
  shadowOffset: {
    width: 0,
    height: 2,
  },
  view: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  text: {},
});

export default PokemonPreview;
