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
    <Box style={{
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
      elevation: 20,
    }}>
      <SafeArea />
      {withIcon ? (
        <RowBox>
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
        </RowBox>
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
  height: ${perfectHeight(73)}px;
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
  color: ${colors.primary};
  font-size: ${perfectFont(20)}px;
  margin-left: ${perfectWidth(5)}px;
  font-weight: bold;
`

const RowBox = styled.View`
  flex-direction: row;
  width: ${p => (p.width || screenWidth * 0.9)}px;
  align-self: center;
  align-items: center;
`