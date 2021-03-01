import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {ScrollView} from 'react-native';
import {colors} from '../../../styles';

import {
  Container,
  Title,
  RowEdit,
  ImageTree,
  ImageUser,
  ViewDetailUser,
  ViewTextUser,
  NameUser,
  LevelUser,
  Description,
  Row,
  ViewAddress,
  AdressText,
  CityText,
  MonthText,
  ViewSpace,
  TitleSmall,
  ViewMonths,
  ContainerButtons,
  IconSimple,
} from './styles';

import Button from '../../../components/Button';

const ModalView = () => {
  return (
    <Container>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <RowEdit>
          <Title>Árvore de Maçã</Title>
          <IconSimple name="pencil" size={20} color={colors.primary} />
        </RowEdit>
        <ImageTree />
        <ViewDetailUser>
          <ImageUser />
          <ViewTextUser onPress={() => {}}>
            <NameUser>Jóbia Damone</NameUser>
            <LevelUser>Nível 14</LevelUser>
          </ViewTextUser>
        </ViewDetailUser>
        <RowEdit>
          <Title>Descrição</Title>
          <IconSimple name="pencil" size={20} color={colors.primary} />
        </RowEdit>
        <Description>
          s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has
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
        <ContainerButtons>
          <Button
            width="45"
            backgroundColor={colors.osloGray}
            color={colors.black}>
            REPROVAR
          </Button>
          <Button width="45">APROVAR</Button>
        </ContainerButtons>
      </ScrollView>
    </Container>
  );
};

export default ModalView;
