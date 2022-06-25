import React, { FC, useEffect } from 'react'
import MainNavigator from './src/navigators/MainNavigator'
import SplashScreen from 'react-native-splash-screen'

const App: FC = () => {

  // Hide the splash screen
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <MainNavigator />
    </>
  )
}

export default App
