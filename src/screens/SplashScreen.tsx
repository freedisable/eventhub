import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {appInfo} from '../constants/appInfos';
import {SpaceComponent} from '../components';
import {appColors} from '../constants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}
      imageStyle={{
        flex: 1,
      }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfo.sizes.WIDTH * 0.7,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <SpaceComponent height={15} />
      <ActivityIndicator color={appColors.gray} size={25} />
    </ImageBackground>
  );
};

export default SplashScreen;
