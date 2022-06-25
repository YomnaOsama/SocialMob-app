import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { FlatList } from 'react-native'
import colors from '../constants/colors'
import VerticalSpace from '../components/VerticalSpace'
import { onError, perfectFont, perfectWidth, screenHeight, screenWidth } from '../services/commonFunctions'
import axios from 'axios'
import PostCard from '../modules/home/components/PostCard'
import Spinner from 'react-native-spinkit'
import { Header } from '../components/Header'

type Post = {
  body: string
  id: number
  title: string
  user_id: number
}
const HomeScreen: React.FC = () => {
  const [postsData, setPostsData] = useState<Post[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const getPosts = () => {
    axios.get('https://gorest.co.in/public/v2/posts').then((res) => {
      setPostsData(res.data)
      setLoading(false)
    })
      .catch(() => onError('An error occurred! Please try again later'))
  }


  useEffect(() => {
    getPosts()
  }, [])

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <PostCard
          key={item.id}
          title={item.title}
          body={item.body}
          postId={item.id}
          userId={item.user_id}
        />
      )
    },
    [],
  )

  const keyExtractor = useCallback(item => item.id, [])


  return (
    <>
      <Header title={'Home'} />
      <Container>
        <VerticalSpace height={10} />
        {loading ? (
          <SpinnerView>
            <Spinner isVisible={loading} size={50} type={'Circle'} color={colors.darkBackground} />
          </SpinnerView>
        )
          : (
            <FlatList
              data={postsData}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              maxToRenderPerBatch={8}
              windowSize={10}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => <Title>No posts found</Title>}
              ItemSeparatorComponent={() => <VerticalSpace height={16} />}
              ListFooterComponent={<VerticalSpace height={100} />}
            />
          )}
      </Container>
    </>

  )
}

export default HomeScreen

const Container = styled.View`
  width: ${screenWidth}px;
  align-self: center;
  justify-content: center;
  height: ${screenHeight}px;
  background-color: ${colors.greyBackgroundColor};

`
const Title = styled.Text`
  color: ${colors.favProductTextColor};
  font-size: ${perfectFont(12)}px;
  margin-left: ${perfectWidth(1)}px;
`
const SpinnerView = styled.View`
  width: ${screenWidth}px;
  justify-content: center;
  align-items: center;
`