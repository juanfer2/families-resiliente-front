import Client from '../../services/graphqlService/graphql.service.service'

import {
  GET_PROFESSIONALS_START,
  GET_PROFESSIONALS_SUCCESS,
  GET_PROFESSIONALS_ERROR,
} from '../../contants/professionals'

import { gql } from '@apollo/client';

const GET_PROFESSIONALS_QUERY = gql`
  query {
    professionals{
      id
      name
      familyDocuments{
        id
        code
      }
    }
  }
`;

export const getProfessionals = () => {
  return (dispatch: any) => {
    try{
      dispatch({ type: GET_PROFESSIONALS_START })
      Client.query({
        query: GET_PROFESSIONALS_QUERY,
      }).then((data: any) => {
        dispatch({ payload: data.data.professionals, type: GET_PROFESSIONALS_SUCCESS })
      }).catch((error: Error)=> {
        dispatch({ error: error, type: GET_PROFESSIONALS_ERROR })
      });
    } catch (error) {
      dispatch({ error: error, type: GET_PROFESSIONALS_ERROR })
    }
  }
}
