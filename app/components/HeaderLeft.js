import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import i18n from '../../i18n';

const HeaderLeft = ({navigation}) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View style={styles.container}>
        <Icon name="angle-left" color="white" size={30} />
        <Text style={styles.text}>{i18n.back}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  text: {
    color: 'white',
    fontSize: 15,
    paddingLeft: 6,
  },
});
