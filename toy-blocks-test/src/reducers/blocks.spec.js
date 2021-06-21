import blocksReducer from "./blocks";
import { BLOCK_STATUS_FAILURE, BLOCK_STATUS_SUCCESS, BLOCK_STATUS_LOADING } from "../constants/actionTypes";
import initialState from "./initialState";

const getInitialBlocksState = () => {
  return initialState().blocks
}

const blocksActionFailure = {
  type: BLOCK_STATUS_FAILURE,
  payload: 'error'
}

const blocksActionSuccess = {
  type: BLOCK_STATUS_SUCCESS,
  payload: [1,2,3]
}

const blocksActionLoading = {
  type: BLOCK_STATUS_LOADING,
  payload: null
}

describe('Actions Tests', () => {
  describe('Action Creators', () => {


    it('Blocks Success Action', () => {
      const reducer = blocksReducer(getInitialBlocksState(), blocksActionSuccess)

      const expected = { error: null, isLoading: false, list: [1,2,3] }
      expect(reducer).toEqual(expected)
    })

    it('Blocks IsLoading Action', () => {
      const reducer = blocksReducer(getInitialBlocksState(), blocksActionLoading)

      const expected = { error: null, isLoading: true, list: [] }
      expect(reducer).toEqual(expected)
    })

    it('Blocks Failure Action1', () => {
      const reducer = blocksReducer(getInitialBlocksState(), blocksActionFailure)

      const expected = { list: [], isLoading: false, error: 'error' }
      expect(reducer).toEqual(expected)
    })
  })
})
