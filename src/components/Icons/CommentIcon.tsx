/* eslint-disable max-len */
import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import colors from '../../constants/colors'

const CommentIcon = ({}: React.SVGProps<SVGSVGElement>): React.ReactElement => {
  return (
    <Svg width={20} height={20} viewBox='0 0 15.826 16.109'>
      <G fill={colors.secondaryText}>
        <Path
          data-name='Path 29498'
          d='M5.277 6.206h2.071a.592.592 0 1 0 0-1.183H5.277a.592.592 0 0 0 0 1.183Z'
        />
        <Path
          data-name='Path 29499'
          d='M10.562 7.462H5.277a.592.592 0 0 0 0 1.183h5.285a.592.592 0 1 0 0-1.183Z'
        />
        <Path
          data-name='Path 29500'
          d='M10.562 9.902H5.277a.592.592 0 0 0 0 1.183h5.285a.592.592 0 1 0 0-1.183Z'
        />
        <Path
          data-name='Path 29501'
          d='M7.919 0a7.9 7.9 0 0 0-6.255 12.747L.583 15.285a.592.592 0 0 0 .647.814l4.1-.716A7.91 7.91 0 1 0 7.919 0Zm0 14.641a6.7 6.7 0 0 1-2.335-.422.592.592 0 0 0-.308-.028l-3.179.556.789-1.864a.592.592 0 0 0-.095-.615 6.725 6.725 0 1 1 5.127 2.366Z'
        />
      </G>
    </Svg>
  )
}
export default CommentIcon
