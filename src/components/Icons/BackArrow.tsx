import * as React from 'react'
import Svg, { Path, G } from 'react-native-svg'
import colors from '../../constants/colors'

const BackArrow = ({
  width,
  height,
  onPress,
  color,
  transform,
}: React.SVGProps<SVGSVGElement> & {
  onPress?: () => void
  transform?: string
}): React.ReactElement => {
  return (
    <Svg
      width={width ?? '16px'}
      height={height ?? '17px'}
      viewBox='0 0 16 16.828'
      onPress={onPress}
    >
      <G
        fill='none'
        stroke={colors.favProductTextColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        transform={transform}
      >
        <Path data-name='Line 1' d='M15 8.414H1' />
        <Path data-name='Path 11743' d='M8 1.414l-7 7 7 7' />
      </G>
    </Svg>
  )
}

export default BackArrow
