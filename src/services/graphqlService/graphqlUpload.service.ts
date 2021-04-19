import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'
import {env} from '../../contants/api.constant';
import { setContext } from '@apollo/client/link/context';

const httpLink:any = createUploadLink({
  uri: 'https://aos-staging.ayenda.co/api/v1',
});

const authLink = setContext((_, { headers }: any) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const Client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default Client

/*
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { env } from '../../contants/api.constant'

const link = createUploadLink({ uri: env.apiUrlGraphql })

const Client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
})

export default Client
*/

