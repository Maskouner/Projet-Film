import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MovieScrenn from '../screnns/MovieScrenn'
import DetailsScrenn from '../screnns/DetailsScrenn'

const Stack = createStackNavigator()

const StackNavigation = () => {
  return (
<Stack.Navigator>
    <Stack.Screen name="Movie2" options={{ headerTitleAlign: 'center', headerShown: false }} component={MovieScrenn} />
    <Stack.Screen name="Details" options={{ headerTitleAlign: 'center', headerShown: false }} component={DetailsScrenn} />
</Stack.Navigator>
  )
}

export default StackNavigation