import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StatusBar, FlatList, Alert } from 'react-native';

import { Container, Header, HeaderText, Content, ItemContainer, ItemText } from './styles';

const Dashboard: React.FC = () => {
  const [names, setNames] = React.useState([{name:'Cedasa'},{name:'Delta'},{name:'Formigres'},{name:'Embramaco'},{name:'Outros'},{name:'Ponta'}])
  const navigation = useNavigation();

  const handleNavigate = React.useCallback((item) => {
    navigation.navigate('Category', item)
  }, [])

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
      <Header>
        <HeaderText>Jaboti interno 1.0</HeaderText>
      </Header>
      <Content>
        {names.map(item => {
          return (
            <ItemContainer key={item.name} onPress={() => handleNavigate(item)} >
              <ItemText>{item.name}</ItemText>
            </ItemContainer>
          )
        })}
      </Content>
    </Container>
  )
}

export default Dashboard;