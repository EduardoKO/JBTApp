import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import api from '../../config/database';
import { Container, SearchBox, Content, AddButton, AddButtonText, Header, HeaderText, Input, ItemArea, ItemName, ItemAmount, ItemButton } from './styles';

interface RouteParams {
  name: string;
}

interface ProductsParams {
    family:string;
    name:string;
    size:string;
    box:number;
    lote:number;
    amount:number;
    joint:string;
}

const ProductsList: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const family = route.params as RouteParams;

  const [products, setProducts] = React.useState<ProductsParams[]>([])

  React.useEffect(() => {
    api.get(`/products/update/${family.name}`).then(response => {
      setProducts(response.data);
    })
  }, [products]);

  const handleNavigation = React.useCallback((product) => {
    navigation.navigate('ProductInfo', product);
  }, []);

  const handleAddProduct = React.useCallback(() => {
    navigation.navigate('AddProduct');
  }, [])

  return (
    <Container>
      <Header>
        <HeaderText>{family.name}</HeaderText>
        <AddButton onPress={() => handleAddProduct()}>
          <AddButtonText>+</AddButtonText>
        </AddButton>
      </Header>
      <SearchBox>
        <Input placeholder="Pesquise aqui" placeholderTextColor="#000"/>
      </SearchBox>
      <Content>
        {products.map(product => {
          return (
            <ItemButton onPress={() => handleNavigation(product)}>
              <ItemArea>
                <ItemName>{product.name}</ItemName>
                <ItemAmount>{product.amount}</ItemAmount>
              </ItemArea>
            </ItemButton>
          )
        })}
      </Content>
    </Container>
  )
}

export default ProductsList;