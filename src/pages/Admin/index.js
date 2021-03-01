import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';

import {
  Container,
  HomeButton,
  ViewDetailMapper,
  TitleContainer,
  FlatListStyled,
  Content,
} from './styles';

import Item from './Item';

import Loading from '../../components/Loading';
import Menu from '../../components/Menu';
import Input from '../../components/InputSearch';

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <HomeButton>
        <Menu show={true} active="admin" navigation={navigation} />
      </HomeButton>
      <ScrollView>
        <ViewDetailMapper>
          <TitleContainer>ADMIN</TitleContainer>
        </ViewDetailMapper>
        <Content>
          <Formik
            initialValues={{email: '', password: ''}}
            // onSubmit={handleSignIn}
          >
            {({handleChange, handleBlur, handleSubmit, values, errors}) => (
              <Input
                name="email"
                placeholder="Pesquisar por cidade"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email}
              />
            )}
          </Formik>
        </Content>
        <FlatListStyled
          data={[{id: 123123}, {id: 1231234}, {id: 1231236}]}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </Container>
  );
};

export default Admin;
