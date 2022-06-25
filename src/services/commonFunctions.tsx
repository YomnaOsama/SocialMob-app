import { Appearance, Dimensions, Platform } from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { showMessage } from 'react-native-flash-message'
import colors from '../constants/colors'

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

const viewPortSize = { width: 375, height: 812 }

export const perfectWidth = (value: number): number =>
  widthPercentageToDP((value / viewPortSize.width) * 100)

export const perfectHeight = (value: number): number =>
  heightPercentageToDP((parseFloat(String(value)) / viewPortSize.height) * 100)

export const perfectFont = (value: number): number =>
  RFPercentage((value / viewPortSize.height) * 100)

export const isSmallDevice = (): boolean => screenHeight <= 480
export const isIos = (): boolean => Platform.OS === 'ios'

export const getDeviceTheme = (): 'darkMode' | 'defaultMode' => {
  if (Appearance.getColorScheme() === 'dark') {
    return 'darkMode'
  }
  return 'defaultMode'
}

export const capitalize = (s: string): string => {
  return s?.charAt(0).toUpperCase() + s?.slice(1)
}

export const onError = (error: Error): void => {
  showMessage({
    message: capitalize(error?.message),
    type: 'danger',
    duration: 4000,
  })
}

export const onSuccess = (message: string, description: string | undefined = ''): void => {
  showMessage({
    message: capitalize(message),
    description,
    style: { backgroundColor: colors.btnSuccess },
    type: 'success',
    duration: 2000,
  })
}
