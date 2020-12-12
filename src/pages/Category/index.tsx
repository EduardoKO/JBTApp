import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Alert } from 'react-native';
import { Container, Content, CategoryArea, CategoryText, CategoryTotal } from './styles';


interface RouteParams {
  name: string;
}

const Category: React.FC<RouteParams> = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const routeParams = route.params as RouteParams;

  const handleNavigate = React.useCallback(() => {
    navigation.navigate('ProductsList', routeParams)
  }, []);

  return (
    <Container>
      <Content>
        <CategoryArea onPress={() => handleNavigate()}>
          <CategoryText>Piso</CategoryText>
          <CategoryTotal>Total de: 130 produtos</CategoryTotal>
        </CategoryArea>

        <CategoryArea onPress={() => handleNavigate()}>
          <CategoryText>Parede</CategoryText>
          <CategoryTotal>Total de: 130 produtos</CategoryTotal>
        </CategoryArea>
        
        <CategoryArea onPress={() => handleNavigate()}>
          <CategoryText>Porcelanato</CategoryText>
          <CategoryTotal>Total de: 130 produtos</CategoryTotal>
        </CategoryArea>
      </Content>
    </Container>
  )
}

export default Category;