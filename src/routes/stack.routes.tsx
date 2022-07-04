import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import constants from '../constants';
import Details from '../pages/Details';
import Episodes from '../pages/Episodes';
import Splash from '../pages/Splash';

export type RootStackParamList = {
  Splash: undefined;
  Details: undefined;
  Episodes: undefined;
};

const stackRoutes = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      initialRouteName={'Splash'}
      screenOptions={{
        cardStyle: {
          backgroundColor: constants.COLORS.BLACK,
        },
        headerTransparent: true,
      }}>
      <stackRoutes.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <stackRoutes.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
      <stackRoutes.Screen
        name="Episodes"
        component={Episodes}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
        }}
      />
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
