import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const Header = styled.View`
  height:60px;
  width:100%;
  background-color:#7159c1;
  margin:0px 10px 10px 0px;
  align-items:center;
  justify-content:center;
  flex-direction:row;
`;

export const HeaderText = styled.Text`
  font-size:20px;
  color:#FFF;
  font-weight:bold;
  font-style:italic;
`;

export const Content = styled.View`
  flex:1;
  padding:10px;
  align-items:center;
`;

export const ItemInfo = styled.View`
  border-width:1;
  border-color:#000;
  border-radius:10px;
  width:100%;
  height:80px;
  margin-top:10px;
  align-items:center;
  justify-content:center;
`;

export const ItemText = styled.Text`
  font-size:20px;
  font-weight:bold;
  font-style:italic;
`;

export const TextInfo = styled.Text`
  font-size:16px;
  color:#7159c1;
`;


export const LowButtonArea = styled.TouchableOpacity`
  width:95%;
  height:100px;
  background-color:#7159c1;
  align-items:center;
  justify-content:center;
  margin-bottom:10px;
  margin-left:10px;
  border-radius:50px;
`;

export const LowButtonText = styled.Text`
  color:#FFF;
  font-size:26px;
`;
