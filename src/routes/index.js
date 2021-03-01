import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import {useAuth} from '../hooks/Auth';

const Routes = () => {
  const {user, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
