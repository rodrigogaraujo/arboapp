import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignInWithEmail from '../pages/SignInWithEmail';
import SignUp from '../pages/SignUp';
import {colors} from '../styles';

const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: colors.black},
    }}
    // initialRouteName='Home'
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignInWithEmail" component={SignInWithEmail} />
    <Auth.Screen name="SignUp" component={SignUp} />
  </Auth.Navigator>
);

export default AuthRoutes;
