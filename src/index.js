import React from 'react';
import 'react-native-gesture-handler';

import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';

import AppProvider from './hooks';
import Routes from './routes';

// import { Container } from './styles';
const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <AppProvider>
      <Provider>
        <View style={{flex: 1, backgroundColor: '#0A2C45'}}>
          <Routes />
        </View>
      </Provider>
    </AppProvider>
  </NavigationContainer>
);

export default App;
