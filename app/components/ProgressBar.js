import React, {useEffect} from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const anim = new Animated.Value(0);
import colors from './colors';

const ProgressBar = ({progress}) => {
  useEffect(() => {
    Animated.timing(anim, {
      toValue: 100,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.inner, {width: progress + '%'}]} />
      <Animated.View
        style={[styles.panel, {left: progress - width * 0.03 + '%'}]}>
        <Animated.Text style={styles.text}>{progress}</Animated.Text>
      </Animated.View>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.02,
    backgroundColor: colors.hardGrey,
    borderColor: colors.transparent,
    borderWidth: 3,
    borderRadius: 5,
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    height: height * 0.01,
    borderRadius: 5,
    backgroundColor: colors.blue,
  },
  panel: {
    backgroundColor: colors.white,
    position: 'absolute',
    height: height * 0.03,
    width: height * 0.055,
    zIndex: 1,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  text: {
    fontSize: height * 0.02,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
