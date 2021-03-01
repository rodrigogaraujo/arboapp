import React, {useState, useEffect, useCallback} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {Dimensions} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  ShowDetailsTree,
  CityText,
  HeaderDetailsTree,
  ContentDetailsTree,
  ImageTree,
  BackgroundImage,
  TitleTree,
  FooterDetailsTree,
  ImageUser,
  NameUser,
  ButtonSeeMore,
  ButtonSeeMoreText,
  HomeButton,
} from './styles';

import {colors} from '../../styles';
import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';

const Home = () => {
  const {width, height} = Dimensions.get('window');
  const LATITUDE_DELTA = 0.0422;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);
  const navigation = useNavigation();
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toogleModal = useCallback(() => {
    setIsModalVisible(!isModalVisible);
  }, [isModalVisible]);

  useEffect(() => {
    setLoading(true);
    try {
      Geolocation.getCurrentPosition((info) => {
        setLong(info.coords.longitude);
        setLat(info.coords.latitude);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  return loading && lat === 0 && long === 0 ? (
    <Loading />
  ) : (
    <Container>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1, position: 'relative'}}
        region={{
          latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker
          key={lat}
          coordinate={{latitude: lat, longitude: long}}
          title="Árvore de Maçã"
          onPress={() => setOpen(!open)}
        />
      </MapView>
      <HomeButton>
        <Menu navigation={navigation} active="home" />
      </HomeButton>
      <ShowDetailsTree show={open}>
        <HeaderDetailsTree>
          <Icon name="location-pin" size={40} color={colors.primary} />
          <CityText>Caruaru, PE</CityText>
        </HeaderDetailsTree>
        <ContentDetailsTree>
          <ImageTree />
          <BackgroundImage />
          <TitleTree>Árvore de maçã</TitleTree>
        </ContentDetailsTree>
        <FooterDetailsTree>
          <ImageUser />
          <NameUser>Jobia Damone</NameUser>
          <ButtonSeeMore onPress={() => toogleModal()}>
            <ButtonSeeMoreText>Ver mais</ButtonSeeMoreText>
          </ButtonSeeMore>
        </FooterDetailsTree>
        <Modal
          isModalVisible={isModalVisible}
          toggleModal={toogleModal}
          navigation={navigation}
        />
      </ShowDetailsTree>
    </Container>
  );
};

export default Home;
