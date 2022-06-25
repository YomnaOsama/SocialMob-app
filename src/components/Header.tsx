import React, { FC } from 'react'
import styled from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { I18nManager } from 'react-native'
import { perfectFont, perfectHeight, perfectWidth, screenWidth } from '../services/commonFunctions'
import colors from '../constants/colors'
import { Row } from './Row'
import BackArrow from './Icons/BackArrow'

type Props = {
  title?: string
  withIcon?: boolean
  textColor?: string
  backAction?: () => void
}

export const Header: FC<Props> = ({ title, withIcon = true, textColor, backAction, ...props }) => {
  const navigation = useNavigation()

  const goBack = () => navigation.goBack()
  return (
    <Box>
      <SafeArea />
      {withIcon ? (
        <Row justifyContent={'flex-start'}>
          <TuchableContainer
            style={{
              transform: [{ rotate: I18nManager.isRTL ? '180deg' : '360deg' }],
            }}
            onPress={backAction ?? goBack}
          >
            <BackArrow />
          </TuchableContainer>
          {!!title && (
              <Text
                onPress={backAction ?? goBack}
              >
                {title}
              </Text>
          )}
        </Row>
      ) : (
        <Text>
          {title}
        </Text>
      )}
    </Box>
  )
}

const Box = styled.View`
  width: ${screenWidth}px;
  height: ${perfectHeight(63)}px;
  align-self: center;
  background-color: ${colors.white};
  justify-content: center;
  padding-horizontal: ${screenWidth * 0.05}px;
`
const SafeArea = styled.SafeAreaView`
  width: ${screenWidth}px;
  padding-top: ${perfectHeight(15)}px;
`

const TuchableContainer = styled.TouchableOpacity``

const Text = styled.Text`
  color: ${colors.favProductTextColor};
  font-size: ${perfectFont(16)}px;
  margin-left: ${perfectWidth(5)}px;
  font-weight: bold;
`
