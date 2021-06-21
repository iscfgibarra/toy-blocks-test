import { BLOCK_STATUS_FAILURE, BLOCK_STATUS_SUCCESS, BLOCK_STATUS_LOADING } from "../constants/actionTypes";
import initialState from "./initialState";


const  getInitialBlockState = () => {
  return initialState().blocks;
}

export default function blocksReducer(state = getInitialBlockState(), action){
  switch (action.type) {
    case BLOCK_STATUS_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
        list: []
      }
    case BLOCK_STATUS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        list: action.payload
      }
    case BLOCK_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        list: []
      }
    default:
      return state
  }
}
