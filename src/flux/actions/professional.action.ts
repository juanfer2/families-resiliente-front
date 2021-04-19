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

const startGetProfessionals = () =>{
  return { type: GET_PROFESSIONALS_START }
}

const successGetProfessionals = (payload: any) =>{
  return { payload, type: GET_PROFESSIONALS_SUCCESS }
}

const errorGetProfessionals = (error: Error) =>{
  return { error, type: GET_PROFESSIONALS_ERROR }
}

export const getProfessionals = () => {
  return (dispatch: any) => {
    try{
      dispatch(startGetProfessionals())
      Client.query({
        query: GET_PROFESSIONALS_QUERY,
      }).then((data: any) => {
        console.log(data)
        dispatch(successGetProfessionals(data.professionals))
      }).catch((error: Error)=> {
        dispatch(errorGetProfessionals(error))
      });
    } catch (error) {
      dispatch(errorGetProfessionals(error))
    }
  }
}
