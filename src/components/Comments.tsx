import React, { useCallback } from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import colors from '../constants/colors'
import VerticalSpace from '../components/VerticalSpace'
import { perfectFont, perfectHeight, perfectWidth, screenHeight, screenWidth } from '../services/commonFunctions'
import { Row } from '../components/Row'

const defaultPic = require('../../assets/images/defaultPic.png')

type Comment = {
  id: number
  post_id: number
  name: string
  email: string
  body: string
}

type Props = {
  comments: Comment[]
}
export const Comments: React.FC<Props> = ({ comments }) => {
  const renderItem = useCallback(
    ({ item }) => {
      return (
        <CommentCard>
          <Row justifyContent={'flex-start'} width={screenWidth * 0.8}>
            <Image resizeMode='contain' source={defaultPic} />
            <UserName>{item?.name || '-'}</UserName>
          </Row>
          <VerticalSpace height={2} />
          <Body>
            {item.body}
          </Body>
        </CommentCard>
      )
    },
    [],
  )

  const keyExtractor = useCallback(item => item.id, [])


  return (
    <CommentsContainer>
      <Divider />
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <VerticalSpace height={10} />}
        ListFooterComponent={<VerticalSpace height={50} />}
        ListHeaderComponent={
          <>
            <VerticalSpace height={12} />
            <CommentsTitle>
              {'All Comments'}
            </CommentsTitle>
            <VerticalSpace height={8} />
          </>
        }
      />
    </CommentsContainer>
  )
}

const Box = styled.View`
  flex-direction: row;
  width: ${p => (p.width || screenWidth * 0.9)}px;
  height: ${perfectHeight(83)}px;
  align-self: center;
  background-color: ${colors.white};
  justify-content: ${p => (p.justifyContent || 'space-between')};
  align-items: center;
`
const CommentCard = styled.View`
  width: ${screenWidth * 0.8}px;
  background-color: ${colors.white};
  min-height: ${screenHeight * 0.05}px;
  align-self: center;
  border-left-width: 2px;
  border-left-color: ${colors.greyBackgroundColor};
  padding-left: 10px;
`

const CommentsContainer = styled.View`
  width: 100%;
`

const Divider = styled.View`
  width: 100%;
  height: ${screenHeight * 0.01}px;
  border-bottom-width: ${perfectWidth(1)}px;
  border-bottom-color: ${colors.greyBackgroundColor};
  align-self: center;
`

const CommentsTitle = styled.Text`
  color: ${colors.favProductTextColor};
  font-size: ${perfectFont(14)}px;
  margin-left: ${perfectWidth(1)}px;
  font-weight: bold;
`

const Image = styled.Image`
  width: ${perfectWidth(40)}px;
  aspect-ratio: 1;
  border-radius: 100px;
  `

const UserName = styled.Text`
  color: ${colors.black};
  font-size: ${perfectFont(14)}px;
  margin-left: ${perfectWidth(5)}px;
  font-weight: bold;
  `
const Body = styled.Text`
  color: ${colors.black};
  font-size: ${perfectFont(12)}px;
  margin-left: ${perfectWidth(1)}px;
`
