import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import colors from '../constants/colors'
import HomeNavigator from './HomeNavigator'

const appTheme = DefaultTheme
appTheme.colors.background = colors.white

const MainNavigator: FC = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator headerMode={'none'} defaultScreenOptions={{ headerShown: false }}>
        <Stack.Screen name={'homeNavigator'} component={HomeNavigator} options={{
          headerShown: false,
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
