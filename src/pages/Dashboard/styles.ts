import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding:0px 10px;
`;

export const Header = styled.View`
  height:80px;
  background-color:#7159c1;
  align-items:center;
  justify-content:center;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  margin-bottom:10px;
`;

export const HeaderText = styled.Text`
  font-size:16px;
  color:#FFF;
  font-style:italic;
  font-weight:bold;
`;

export const Content = styled.View`
  height:90%;
  background-color:#DDD;
  border-radius:20px;
  flex-direction:row;
  flex-wrap:wrap;
  padding:20px;
`;

export const ItemContainer = styled.TouchableOpacity`
  height:150px;
  width:150px;
  flex-wrap:wrap;
  background-color:#EEE;
  margin:10px;
  justify-content:center;
  flex-direction:row;
  border-radius:20px;
`;

export const ItemText = styled.Text`
  text-align:center;
`;

