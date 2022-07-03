import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Details from '../pages/Details';
import Splash from '../pages/Splash';
import constants from '../constants';
import Episodes from '../pages/Episodes';

export type RootStackParamList = {
  Splash: undefined;
  Details: undefined;
  Episodes: undefined;
};

const stackRoutes = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {

  return (
    <stackRoutes.Navigator
      initialRouteName={"Splash"}
      screenOptions={{
        cardStyle: {
          backgroundColor: constants.COLORS.BLACK
        },
        headerTransparent: true,
      }}>
      <stackRoutes.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <stackRoutes.Screen name="Details" component={Details} options={{ headerShown: false }} />
      <stackRoutes.Screen name="Episodes" component={Episodes} options={{ headerTitle: "", headerBackTitleVisible: false, headerTintColor: "#fff" }} />
    </stackRoutes.Navigator>
  )
};

export default AppRoutes;