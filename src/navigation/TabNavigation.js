import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FavoriScrenn from '../screnns/FavoriScrenn';
import RechercherScrenn from '../screnns/RechercherScrenn';
import StackNavigation from './StackNavigation';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
                 tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Movie') {
                    iconName = focused ? 'movie-open' : 'movie-open-outline';
                  }
                  if (route.name === 'Favori') {
                    iconName = focused ? 'movie-open-star' : 'movie-open-star-outline';
                  }
                  if (route.name === 'Search') {
                    iconName = focused ? 'movie-search' : 'movie-search-outline';
                  }
        
                  return <Icon name={iconName} size={size} color={focused ? '#9F8236' : '#adabab'}  />
        
        
                }
    })}>
        <Tab.Screen name="Movie" options={{ headerShown: false }}  component={StackNavigation} />
        <Tab.Screen name="Favori"  component={FavoriScrenn} />
        <Tab.Screen name="Search" options={{ headerShown: false }}  component={RechercherScrenn} />
    </Tab.Navigator>
</NavigationContainer>
  )
}

export default TabNavigation