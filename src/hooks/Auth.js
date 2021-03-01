import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext({});

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used whitin an AuthProvider');
  }

  return context;
}

export const AuthProvider = ({children}) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const [user] = await AsyncStorage.multiGet(['@WaySchool:user']);

      if (user[1]) {
        setData({user: JSON.parse(user[1])});
      }

      setLoading(false);
    }
    loadStoragedData();
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@uead:token', '@uead:user']);
    setData({});
  }, []);

  const signIn = useCallback(async ({email, password}) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(async function (user) {
        await AsyncStorage.multiSet([
          ['@WaySchool:user', JSON.stringify(user.user)],
        ]);

        setData({user: user.user});
      })
      .catch((error) => {
        Alert.alert('Erro!', 'Email ou senha inválidos. Tente novamente.');
      });
  }, []);
  return (
    <AuthContext.Provider value={{user: data.user, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};
