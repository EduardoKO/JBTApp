import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';

const Preload: React.FC = () => {
  const navigation = useNavigation();
  
  React.useEffect(() => {
    setTimeout(() => { navigation.navigate('Dashboard') }, 1500)
  }, [])


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#7159c1"/>
      <Text style={styles.font}>Jaboti</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#EEE"
  },
  font: {
    fontSize:36,
    color:'#7159c1',
    fontStyle:'italic'
  }
});

export default Preload;