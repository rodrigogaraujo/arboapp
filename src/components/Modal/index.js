import React from 'react';
import Modal from 'react-native-modal';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native';
import {colors} from '../../styles';

import {
  Container,
  Title,
  CloseButton,
  ViewButtons,
  ImageTree,
  ImageUser,
  ViewDetailUser,
  ViewTextUser,
  NameUser,
  LevelUser,
  ButtonUserLike,
  TextButton,
  Description,
  Row,
  ViewAddress,
  AdressText,
  CityText,
  MonthText,
  ViewSpace,
  StarButton,
  TitleSmall,
  ViewMonths,
} from './styles';

const ModalView = ({isModalVisible, toggleModal, navigation}) => {
  return (
    <Modal isVisible={isModalVisible}>
      <Container>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <ViewButtons>
            <CloseButton onPress={toggleModal}>
              <IconFontAwesome name="close" size={30} color={colors.primary} />
            </CloseButton>
            <StarButton>
              <IconFontAwesome name="star" size={30} color={colors.black} />
            </StarButton>
            <CloseButton>
              <IconFontAwesome name="share" size={30} color={colors.black} />
            </CloseButton>
          </ViewButtons>
          <Title>Árvore de Maçã</Title>
          <ImageTree />
          <ViewDetailUser>
            <ImageUser />
            <ViewTextUser
              onPress={() => {
                navigation.navigate('ProfileUser');
                toggleModal();
              }}>
              <NameUser>Jóbia Damone</NameUser>
              <LevelUser>Nível 14</LevelUser>
            </ViewTextUser>
            <ButtonUserLike>
              <IconFontAwesome name="heart" size={20} color={colors.black} />
              <TextButton>AGRADECER</TextButton>
            </ButtonUserLike>
          </ViewDetailUser>
          <Title>Descrição</Title>
          <Description>
            s simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has
          </Description>
          <Title>Essa árvore já produz fruto?</Title>
          <Description>Sim</Description>
          <Row>
            <IconFontAwesome name="map-pin" size={30} color={colors.primary} />
            <ViewAddress>
              <AdressText>Av. Petronio Portela</AdressText>
              <CityText>Caruaru, PE</CityText>
            </ViewAddress>
          </Row>
          <TitleSmall>Meses de produção de frutos</TitleSmall>
          <ViewMonths>
            <MonthText>JANEIRO</MonthText>
            <ViewSpace />
            <MonthText>MARÇO</MonthText>
          </ViewMonths>
        </ScrollView>
      </Container>
    </Modal>
  );
};

export default ModalView;
