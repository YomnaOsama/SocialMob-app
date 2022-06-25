import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { screenHeight, screenWidth } from '../services/commonFunctions'

type ViewProps = {

}
const ScreensContainer: React.FC<ViewProps> = ({ children, ...props }) => {
  return <Container showsVerticalScrollIndicator={false} {...props}>{children}</Container>
}

export default ScreensContainer

const Container = styled(ScrollView)`
  width: ${p => (p.fullWidth ? screenWidth : screenWidth * 0.9)}px;
  height: ${screenHeight}px;
  align-self: center;
  background-color: ${({ bgColor }) => bgColor};
`
