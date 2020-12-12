import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from './pages/Preload';
import Dashboard from './pages/Dashboard';
import Category from './pages/Category';
import ProductsList from './pages/ProductsList';
import ProductInfo from './pages/ProductInfo';
import AddProduct from './pages/AddProduct';

const Stack = createStackNavigator();

const Navigator:React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="ProductsList" component={ProductsList} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator;