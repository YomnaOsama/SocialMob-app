import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components/native'
import { pathOr } from 'ramda'
import VerticalSpace from '../../../components/VerticalSpace'
import colors from '../../../constants/colors'
import { backend } from '../../../constants/urls'
import { onError, perfectFont, perfectWidth, screenHeight, screenWidth } from '../../../services/commonFunctions'
import { useNavigation } from '@react-navigation/native'
import { User } from '../../common/type'
import CommentIcon from '../../../components/Icons/CommentIcon'

const defaultPic = require('../../../../assets/images/defaultPic.png')

type Props = {
  title: string
  body: string
  postId: number
  userId: number
}

const PostCard: React.FC<Props> = ({ title, body, postId, userId }) => {
  const navigation = useNavigation()
  const [userData, setUserData] = useState<User>()
  const [loading, setLoading] = useState<boolean>()
  const [commentsCount, setCommentsCount] = useState<number>()

  const getCommentsCount = () => {
    axios.get(`${backend}/posts/${postId}/comments`).then((res) => {
      setCommentsCount(res.data.length)
      setLoading(false)
    })
      .catch(() => onError('An error occurred! Please try again later'))
  }
  const getUserData = () => {
    axios.get(`${backend}/users/${userId}`).then((res) => {
      setUserData(res.data)
      getCommentsCount()
    })
      .catch(() => onError('An error occurred! Please try again later'))
  }


  useEffect(() => {
    getUserData()
  }, [userId])

  return (
    <CardContainer onPress={() => {
      navigation.navigate({
        name: 'postDetails',
        params: {
          post: {
            body: body,
            id: postId,
            title: title,
            user_id: userId,
          },
          user: userData,
        },
      } as never)
    }}>
      {
        !loading && (
          <>
            <Row>
              <Image resizeMode='contain' source={defaultPic} />
              <UserName>{pathOr('-', ['name'], userData)}</UserName>
            </Row>
            <VerticalSpace height={5} />
            <Title>
              {title}
            </Title>
            <VerticalSpace height={5} />
            <Row justifyContent={'flex-end'} >
              <CommentIcon />
              <UserName>{commentsCount}</UserName>
            </Row>
            <VerticalSpace height={4} />
          </>
        )
      }
    </CardContainer>
  )
}

export default PostCard

const CardContainer = styled.TouchableOpacity`
  width: ${screenWidth * 0.9}px;
  background-color: ${colors.greyBackgroundColor};
  min-height: ${screenHeight * 0.05}px;
  border-radius: 7px;
  padding: 15px;
  align-self: center;
`
const UserName = styled.Text`
  color: ${colors.secondaryText};
  font-size: ${perfectFont(14)}px;
  margin-left: ${perfectWidth(5)}px;
  font-weight: bold;
`

const Title = styled.Text`
  color: ${colors.favProductTextColor};
  font-size: ${perfectFont(12)}px;
  margin-left: ${perfectWidth(1)}px;
  font-weight: bold;
`

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

const Image = styled.Image`
  width: ${perfectWidth(40)}px;
  aspect-ratio: 1;
  border-radius: 100px;
`
