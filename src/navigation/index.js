import React from 'react';
import {avigationContainer}from '@react-navigation/native';
import {reateNativeStackNavigator}from '@react-navigation/native-stack';
import Categories from '../screens/categories/index';
import ProductDetail from '../screens/product-detail/index';
import Products from '../screens/products/index';
import {latform}from 'react-native';
import {OLORS}from '../utils/constants/colors';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
  <NavigationContainer>
    tack.Navigator
   iniialRouteName="Categories"
        tions={{""
  headerStyle: {
          ndColor: Platform.OS === 'android' ? COLORS.primary : '',
        },
         hColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
        heeStyle: {
          ht: 'bold',
          },,
        }},
        crck.Screen
  name="Products"
  component={Products
options={({route}) => ({
       titoute.params.name,
      headyle: {
         bacColor: route.params.color,
        },
       })},

Stack.Scren
      naProductDetail"
        ent={ProductDtail}
       opt{route}) => ({
        tioute.params.name,
     })}
     />
    </Stactor>
 </NavigContainer>

};
;
e;xport default AppNavigation;

