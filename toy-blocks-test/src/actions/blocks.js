import fetch from "cross-fetch";
import {BLOCK_STATUS_FAILURE, BLOCK_STATUS_LOADING, BLOCK_STATUS_SUCCESS} from "../constants/actionTypes";


const checkBlocksStatusLoading = () => {
  return {
    type: BLOCK_STATUS_LOADING,
    payload: null
  }
}

const checkBlockStatusSuccess = (blocks) => {
  return {
    type: BLOCK_STATUS_SUCCESS,
    payload: blocks
  }
}

const checkBlockStatusFailure = (error) => {
  return {
    type: BLOCK_STATUS_FAILURE,
    payload: error
  }
}

export function checkBlockStatus(node) {
  return async (dispatch) => {
    try {
      dispatch(checkBlocksStatusLoading());
      const result = await fetch(`${node.url}/api/v1/blocks`);

      if (result.status >= 400) {
        dispatch(checkBlockStatusFailure(`Can't load blocks`));
        return;
      }

      const json = await result.json();

      let blocks = json.data.map( b => ({
        id: b.id.padStart(3,'0'),
        description:  b.attributes.data
      }));

      dispatch(checkBlockStatusSuccess(blocks));
    } catch (err) {
      dispatch(checkBlockStatusFailure(`Can't load blocks`));
    }
  };
}
