import {
  GET_PROFESSIONALS_START,
  GET_PROFESSIONALS_SUCCESS,
  GET_PROFESSIONALS_ERROR,
} from '../../contants/professionals'

import {ProfessionalsState, ActionProfessionalsType} from '../../types'

const initialState: ProfessionalsState = {
  professionals: [],
  error: null,
  loanding: false
}

export default function(state: ProfessionalsState = initialState, action: ActionProfessionalsType){
  switch (action.type) {
    case GET_PROFESSIONALS_START:
      return {...state,  loanding: true, professionals: null}
    case GET_PROFESSIONALS_SUCCESS:
          return {...state,  professionals: action.payload, loanding: false}
    case GET_PROFESSIONALS_ERROR:
        return {...state,  error: action.error, loanding: false};
    default:
      return state
  }
}
