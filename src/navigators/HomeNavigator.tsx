import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import PostDetails from '../screens/PostDetails'

const HomeNavigator: FC = () => {
  const HomeStack = createNativeStackNavigator()
  
  return (
    <HomeStack.Navigator initialRouteName='home' defaultScreenOptions={{ headerShown: false }}>
      <HomeStack.Screen
        name='home'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name='postDetails'
        component={PostDetails}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
