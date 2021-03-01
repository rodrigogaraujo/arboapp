import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Mapper from '../pages/Map';
import Donate from '../pages/Donate';
import Learning from '../pages/Learning';
import Config from '../pages/Config';
import ProfileUser from '../pages/ProfileUser';
import Admin from '../pages/Admin';
import CardsCity from '../pages/CardsCity';

const App = createStackNavigator();
const StackRoutes = () => {
  return (
    <App.Navigator
      screenOptions={{
        cardStyle: {backgroundColor: '#ffffff'},
        headerBackground: () => {
          '#0A2C45';
        },
        headerShown: false,
      }}
      // initialRouteName="WebView"
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Profile" component={Profile} />
      <App.Screen name="Map" component={Mapper} />
      <App.Screen name="Donate" component={Donate} />
      <App.Screen name="Learning" component={Learning} />
      <App.Screen name="Config" component={Config} />
      <App.Screen name="ProfileUser" component={ProfileUser} />
      <App.Screen name="Admin" component={Admin} />
      <App.Screen name="CardsCity" component={CardsCity} />
    </App.Navigator>
  );
};
export default StackRoutes;
