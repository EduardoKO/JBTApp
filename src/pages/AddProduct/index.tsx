import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Text } from 'react-native';
import api from '../../config/database';
import { Container, Input, InputArea, ConfirmButton, ConfirmButtonText } from './styles';

const AddProduct: React.FC = () => {
  const [family, setFamily] = React.useState('');
  const [name, setName] = React.useState('');
  const [size, setSize] = React.useState('');
  const [box, setBox] = React.useState('');
  const [lote, setLote] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [joint, setJoint] = React.useState('');

  const navigation = useNavigation();

  const handleConfirm = React.useCallback(async () => {
    try {
      await api.post('products', {
        family,
        name,
        size,
        box,
        lote,
        amount,
        joint
      });

      navigation.goBack();

    } catch (error) {
      Alert.alert(error)
    }
  }, [])

  return (
    <Container>
      <InputArea>
        <Input value={family} onChangeText={(t) => setFamily(t.toString())} placeholder="Digite o fabricante"/>
      </InputArea>
      <InputArea>
        <Input value={name} onChangeText={(t) => setName(t.toString())} placeholder="Digite o nome"/>
      </InputArea>
      <InputArea>
        <Input value={size} onChangeText={(t) => setSize(t.toString())} placeholder="Digite o tamanho"/>
      </InputArea>
      <InputArea>
        <Input value={box} keyboardType="numeric" onChangeText={(t) => setBox(t.toString())} placeholder="Digite a quantidade por caixa"/>
      </InputArea>
      <InputArea>
        <Input value={lote} keyboardType="numeric" onChangeText={(t) => setLote(t.toString())} placeholder="Digite o número do lote"/>
      </InputArea>
      <InputArea>
        <Input value={amount} keyboardType="numeric" onChangeText={(t) => setAmount(t.toString())} placeholder="Digite a quantidade inicial"/>
      </InputArea>
      <InputArea>
        <Input value={joint} onChangeText={(t) => setJoint(t.toString())} placeholder="Digite o rejunte aproximado"/>
      </InputArea>
      <ConfirmButton onPress={handleConfirm}>
        <ConfirmButtonText>Confirmar</ConfirmButtonText>
      </ConfirmButton>
    </Container>
  )
}

export default AddProduct;