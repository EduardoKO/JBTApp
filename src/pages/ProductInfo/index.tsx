import { useRoute } from '@react-navigation/native';
import * as React from 'react';

import { Container, Header, HeaderText, Content, ItemInfo, ItemText, TextInfo, LowButtonArea, LowButtonText } from './styles';

interface ProductParams {
  family:string;
  name:string;
  size:string;
  box:number;
  lote:number;
  amount:number;
  joint:string;
}

const ProductInfo: React.FC = () => {
  const route = useRoute();

  const product = route.params as ProductParams

  return (
    <Container>
      <Header>
        <HeaderText>{product.name}</HeaderText>
      </Header>
      <Content>
        <ItemInfo>
          <ItemText>Fabricante</ItemText>
          <TextInfo>{product.family}</TextInfo>
        </ItemInfo>
        <ItemInfo>
          <ItemText>Tamanho</ItemText>
          <TextInfo>{product.size}</TextInfo>
        </ItemInfo>
        <ItemInfo>
          <ItemText>Rejunte</ItemText>
          <TextInfo>{product.joint}</TextInfo>
        </ItemInfo>
        <ItemInfo>
          <ItemText>Lote</ItemText>
          <TextInfo>{product.lote}</TextInfo>
        </ItemInfo>
        <ItemInfo>
          <ItemText>Quantidade</ItemText>
          <TextInfo>{product.amount} M²</TextInfo>
        </ItemInfo>
        <ItemInfo>
          <ItemText>Quantidade por caixa</ItemText>
          <TextInfo>{product.box} M²</TextInfo>
        </ItemInfo>
      </Content>

      <LowButtonArea onPress={() => {}}>
        <LowButtonText>Baixar</LowButtonText>
      </LowButtonArea>
    </Container>
  )
}

export default ProductInfo;