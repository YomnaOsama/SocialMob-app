import React, { FC, useEffect } from 'react'
import { StatusBar, Platform } from 'react-native'
import MainNavigator from './src/navigators/MainNavigator'
import SplashScreen from 'react-native-splash-screen'
import colors from './src/constants/colors'

const App: FC = () => {

  // Hide the splash screen
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <StatusBar
        backgroundColor={Platform.select({
          ios: undefined,
          android: colors.primary,
        })}
        barStyle={'dark-content'}
      />
      <MainNavigator />
    </>
  )
}

export default App
