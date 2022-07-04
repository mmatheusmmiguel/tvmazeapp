import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, View, Text, StatusBar} from 'react-native';
import {RootStackParamList} from '../../routes/stack.routes';
import {LottieContainer, SplashContainer} from './styles';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import constants from '../../constants';

type splashScreenProps = StackNavigationProp<RootStackParamList, 'Splash'>;

const Splash: React.FC = () => {
  const navigation = useNavigation<splashScreenProps>();

  const handleFinishAnimation = async () => {
    navigation.navigate('Details');
  };

  return (
    <SplashContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={constants.COLORS.BLACK} /> 
      <LottieContainer>
        <LottieView
          testID={'splash_lottie'}
          source={require('../../assets/lottie/splash_movie.json')}
          autoPlay
          loop={false}
          onAnimationFinish={handleFinishAnimation}
        />
      </LottieContainer>
    </SplashContainer>
  );
};

export default Splash;
