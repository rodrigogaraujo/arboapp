import React, {useState, useEffect} from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import SvgUri from 'react-native-svg-uri';

import {
  Container,
  HomeButtonView,
  HomeButton,
  TextButton,
  MenuView,
} from './styles';

import {colors} from '../../styles';
import Hide from '../../components/Hide';

const Menu = ({active, navigation, show}) => {
  const [menuShow, setMenuShow] = useState(false);
  useEffect(() => {
    if (show) {
      setMenuShow(true);
    }
  }, [show]);
  return (
    <Container menuShow={menuShow}>
      <Hide hide={menuShow}>
        <HomeButtonView onPress={() => setMenuShow(true)}>
          <HomeButton active={active === 'home'}>
            <IconFontAwesome name="home" size={25} color={colors.white} />
          </HomeButton>
          <TextButton active={active === 'home'}>Menu</TextButton>
        </HomeButtonView>
      </Hide>
      <Hide hide={!menuShow}>
        <MenuView horizontal showsHorizontalScrollIndicator={false}>
          <HomeButtonView
            onPress={() => {
              setMenuShow(false);
              if (active !== 'home') {
                navigation.navigate('Home');
              }
            }}>
            <HomeButton active={active === 'home'} menuShow={menuShow}>
              <IconFontAwesome name="home" size={25} color={colors.white} />
            </HomeButton>
            <TextButton active={active === 'home'}>Menu</TextButton>
          </HomeButtonView>
          <HomeButtonView
            onPress={() => {
              if (active !== 'profile') {
                navigation.navigate('Profile');
              }
            }}>
            <HomeButton active={active === 'profile'}>
              <IconFontAwesome name="user" size={25} color={colors.white} />
            </HomeButton>
            <TextButton active={active === 'profile'}>Perfil</TextButton>
          </HomeButtonView>
          <HomeButtonView
            onPress={() => {
              if (active !== 'map') {
                navigation.navigate('Map');
              }
            }}>
            <HomeButton
              active={active === 'map'}
              onPress={() => setMenuShow(!menuShow)}>
              <IconFontAwesome name="map" size={25} color={colors.white} />
            </HomeButton>
            <TextButton active={active === 'map'}>Mapear</TextButton>
          </HomeButtonView>
          <HomeButtonView
            onPress={() => {
              if (active !== 'learning') {
                navigation.navigate('Learning');
              }
            }}>
            <HomeButton
              active={active === 'learning'}
              onPress={() => setMenuShow(!menuShow)}>
              <IconFontAwesome name="home" size={25} color={colors.white} />
            </HomeButton>
            <TextButton active={active === 'learning'}>Aprenda</TextButton>
          </HomeButtonView>
          <HomeButtonView
            onPress={() => {
              if (active !== 'donate') {
                navigation.navigate('Donate');
              }
            }}>
            <HomeButton
              active={active === 'donate'}
              onPress={() => setMenuShow(!menuShow)}>
              <SvgUri
                width="30"
                height="30"
                style={{color: 'white'}}
                source={require('../../assets/donate.svg')}
              />
            </HomeButton>
            <TextButton active={active === 'donate'}>Doar</TextButton>
          </HomeButtonView>
          <HomeButtonView
            onPress={() => {
              if (active !== 'admin') {
                navigation.navigate('Admin');
              }
            }}>
            <HomeButton
              active={active === 'admin'}
              onPress={() => setMenuShow(!menuShow)}>
              <IconFontAwesome name="edit" size={25} color={colors.white} />
            </HomeButton>
            <TextButton active={active === 'admin'}>Admin</TextButton>
          </HomeButtonView>
          <HomeButtonView
            onPress={() => {
              if (active !== 'settings') {
                navigation.navigate('Config');
              }
            }}>
            <HomeButton
              active={active === 'settings'}
              onPress={() => setMenuShow(!menuShow)}>
              <IconFontAwesome name="cog" size={25} color={colors.white} />
            </HomeButton>
            <TextButton active={active === 'settings'}>
              Configurações
            </TextButton>
          </HomeButtonView>
        </MenuView>
      </Hide>
    </Container>
  );
};

export default Menu;
