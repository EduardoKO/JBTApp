import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const Header = styled.View`
  height:60px;
  width:100%;
  background-color:#7159c1;
  margin:0px 10px 10px 0px;
  padding-left:15px;
  padding-right:15px;
  align-items:center;
  justify-content:space-between;
  flex-direction:row;
`;

export const HeaderText = styled.Text`
  font-size:20px;
  color:#FFF;
  font-weight:bold;
  font-style:italic;
`;

export const SearchBox = styled.View`
  height:60px;
  width:100%;
  align-items:center;
  justify-content:center;
`;

export const Input = styled.TextInput`
  height:40px;
  width:100%;
  margin:10px;
  border-width:1;
  border-color:#000;
  border-radius:20px;
`;

export const Content = styled.ScrollView`
  flex:1;
  width:100%;
`;

export const ItemArea = styled.View`
  height:80px;
  margin:10px;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:5px;
  border-width:1;
  border-color:#000;
  border-radius:30px;
`;

export const ItemName = styled.Text`
  font-size:22px;
`;

export const ItemAmount = styled.Text`
  font-size:22px;
  color:#7159c1;
`;

export const ItemButton = styled.TouchableOpacity`

`;

export const AddButton = styled.TouchableOpacity`
  height:60px;
  width:60px;
  align-items:center;
  justify-content:center;
`;

export const AddButtonText = styled.Text`
  font-size:26px;
  color:#00FF00;
`;

