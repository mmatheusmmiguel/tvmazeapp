import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import React from 'react';
import {StatusBar} from 'react-native';
import constants from '../../constants';
import {RootStackParamList} from '../../routes/stack.routes';
import {LottieContainer, SplashContainer} from './styles';

type splashScreenProps = StackNavigationProp<RootStackParamList, 'Splash'>;

const Splash: React.FC = () => {
  const navigation = useNavigation<splashScreenProps>();

  const handleFinishAnimation = async () => {
    navigation.navigate('Details');
  };

  return (
    <SplashContainer>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={constants.COLORS.WHITE}
      />
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
