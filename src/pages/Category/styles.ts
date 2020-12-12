import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  padding:10px;
  background-color:#DDD;
`;

export const Content = styled.View`
  height:100%;
  border-radius:10px;
  align-items:center;
  justify-content:center;
`;

export const CategoryArea = styled.TouchableOpacity`
  height:160px;
  background-color:#FFF;
  margin:10px 10px 10px 0px;
  width:100%;
  border-radius:10px;
  align-items:center;
  padding:20px;
  margin-left:10px;
  justify-content:space-between;
  flex-direction:row;
`;

export const CategoryText = styled.Text`
  font-size:32px;
  color:#000000;
  font-style:italic;
`;

export const CategoryTotal = styled.Text`
  font-size:12px;
  font-style:italic;
  color:#CCC;
`;