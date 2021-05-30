import React from 'react';
import {View} from 'react-native';
import {Dimensions, StyleSheet} from 'react-native';
import {SearchBar} from 'react-native-elements';
const {width, height} = Dimensions.get('window');
import i18n from '../../i18n';
const HeaderSearchBar = ({onChangeText, onClear, value}) => {
  return (
    <View style={styles.container}>
      <SearchBar
        round
        containerStyle={styles.search}
        inputContainerStyle={styles.input}
        lightTheme={true}
        searchIcon={{size: 24}}
        onChangeText={onChangeText}
        onClear={onClear}
        placeholder={i18n.search}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
  },
  search: {
    backgroundColor: 'white',
    height: height * 0.07,
  },
  input: {
    backgroundColor: '#e8e3e3',
    height: height * 0.04,
  },
});

export default HeaderSearchBar;
