import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import colors from '../constants/colors'
import ScreensContainer from '../components/ScreensContainer'
import VerticalSpace from '../components/VerticalSpace'
import { onError, perfectFont, perfectWidth, screenHeight, screenWidth } from '../services/commonFunctions'
import axios from 'axios'
import Spinner from 'react-native-spinkit'
import { Header } from '../components/Header'
import { backend } from '../constants/urls'
import { Row } from '../components/Row'
import { useRoute } from '@react-navigation/native'
import { Comments } from '../components/Comments'
import { Post, User } from '../modules/common/type'

const defaultPic = require('../../assets/images/defaultPic.png')


const PostDetails: React.FC = () => {
  const route = useRoute()

  const { post, user } = route?.params as {
    post: Post
    user: User
  }

  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const getComments = () => {
    axios.get(`${backend}/posts/${post.id}/comments`).then((res) => {
      setComments(res.data)
      setLoading(false)
    })
      .catch(() => onError('An error occurred! Please try again later'))
  }


  useEffect(() => {
    getComments()
  }, [post])

  return (
    <ScreensContainer fullWidth>
      <Header title={'Post Details'} />
      <Container>
        <VerticalSpace height={10} />
        {loading ? (
          <SpinnerView>
            <Spinner isVisible={loading} size={50} type={'Circle'} color={colors.primary} />
          </SpinnerView>
        ) : (
          <>
            <Row justifyContent={'flex-start'} width={screenWidth * 0.9} backgroundColor={colors.btnTransparent}>
              <Image resizeMode='contain' source={defaultPic} />
              <UserName>{user?.name || '-'}</UserName>
            </Row>
            <VerticalSpace height={10} />
            <CardContainer>
              <Title>
                {post.title}
              </Title>
              <VerticalSpace height={5} />
              <Body>
                {post.body}
              </Body>
              <VerticalSpace height={10} />
              {comments.length > 0 && (
                <Comments comments={comments} />
              )}
            </CardContainer>
          </>
        )}
      </Container>
      <VerticalSpace height={100} />
    </ScreensContainer>

  )
}

export default PostDetails

const Container = styled.View`
  width: ${screenWidth}px;
  align-self: center;
  height: ${screenHeight}px;
`

const SpinnerView = styled.View`
  width: ${screenWidth}px;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  color: ${colors.favProductTextColor};
  font-size: ${perfectFont(15)}px;
  margin-left: ${perfectWidth(1)}px;
  font-weight: bold;
`

const Body = styled.Text`
  color: ${colors.black};
  font-size: ${perfectFont(12)}px;
  margin-left: ${perfectWidth(1)}px;
`

const CardContainer = styled.View`
  width: ${screenWidth * 0.9}px;
  background-color: ${colors.greyBackgroundColor};
  min-height: ${screenHeight * 0.05}px;
  border-radius: 7px;
  padding: 10px;
  align-self: center;
`

const Image = styled.Image`
  width: ${perfectWidth(40)}px;
  aspect-ratio: 1;
  border-radius: 100px;
  `

const UserName = styled.Text`
  color: ${colors.secondaryText};
  font-size: ${perfectFont(16)}px;
  margin-left: ${perfectWidth(5)}px;
  font-weight: bold;
  `


