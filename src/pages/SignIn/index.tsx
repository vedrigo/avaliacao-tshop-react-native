import React from 'react';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';

import Button from '../../components/Button';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>START</Button>
    </Container>
  );
};
export default SignIn;
