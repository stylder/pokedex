import React from 'react';
import LottieView from 'lottie-react-native';

const NotNetwork = () => {
  return (
    <LottieView
      autoPlay
      loop
      source={require('../../assets/animations/no-internet-connection.json')}
    />
  );
};

export default NotNetwork;
