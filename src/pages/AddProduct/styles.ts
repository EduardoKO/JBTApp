import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding:10px;
  justify-content:space-between;
`;

export const Input = styled.TextInput``

export const InputArea = styled.View`
  height:80px;
  border-width:1;
  border-color:#000;
  border-radius:30px;
  margin-top:10px;
  justify-content:center;
  padding-left:20px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  height:80px;
  background-color:#00FF00;
  margin-top:10px;
  border-radius:40px;
  align-items:center;
  justify-content:center;
`;

export const ConfirmButtonText = styled.Text`
  font-size:26px;
  color:#FFF;
  font-weight:bold;
`;