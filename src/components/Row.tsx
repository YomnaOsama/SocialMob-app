import React from 'react'
import styled from 'styled-components/native'
import colors from '../constants/colors'
import { perfectHeight, screenWidth } from '../services/commonFunctions'

export const Row: React.FC = ({ children, ...props }) => {
  return (
    <Box {...props}>
      {children}
    </Box>
  )
}

const Box = styled.View`
  flex-direction: row;
  width: ${p => (p.width || screenWidth * 0.9)}px;
  height: ${perfectHeight(83)}px;
  align-self: center;
  background-color: ${p => (p.backgroundColor || colors.white)};
  justify-content: ${p => (p.justifyContent || 'space-between')};
  align-items: center;
`