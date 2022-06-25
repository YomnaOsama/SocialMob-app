import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { backend } from '../constants/urls'

const httpLink = createHttpLink({
  uri: backend,
})

const cache = new InMemoryCache()
const authLink = setContext(async (_, { headers }) => {
  // the token will be taken from the auth store once it's created
  const token = '' 
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
})

export default client
