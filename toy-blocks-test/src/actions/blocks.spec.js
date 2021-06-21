import * as ActionTypes from "../constants/actionTypes";
import * as ActionCreators from "./blocks";
import mockFetch from "cross-fetch";

jest.mock("cross-fetch");

describe("Action blocks", () => {
  const dispatch = jest.fn();

  afterAll(() => {
    dispatch.mockClear()
    mockFetch.mockClear()
  })

  const node = {
    url: "http://localhost:3002",
    online: false,
    name: null,
  };

  const blocks = {
    "data": [
      {
        "id": "5",
        "type": "blocks",
        "attributes": {
          "index": 1,
          "timestamp": 1530679678,
          "data": "The Human Torch",
          "previous-hash": "KsmmdGrKVDr43/OYlM/oFzr7oh6wHG+uM9UpRyIoVe8=",
          "hash": "oHkxOJWOKy02vA9r4iRHVqTgqT+Afc6OYFcNYzyhGEc="
        }
      }]
  }

  it("should fetch the block status", async () => {
    mockFetch.mockReturnValueOnce(
      Promise.resolve({
        status: 200,
        json() {
          return Promise.resolve(blocks);
        },
      })
    );

    await ActionCreators.checkBlockStatus(node)(dispatch);

    const expected = [
      {
        type: ActionTypes.BLOCK_STATUS_LOADING,
        payload: null,
      },
      {
        type: ActionTypes.BLOCK_STATUS_SUCCESS,
        payload: [{
          id: "005",
          description: "The Human Torch"
         }
        ]
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
  });

  it("should fail to fetch the blocks", async () => {
    mockFetch.mockReturnValueOnce(
      Promise.resolve({
        status: 400,
      })
    );

    await ActionCreators.checkBlockStatus(node)(dispatch);
    const expected = [
      {
        type: ActionTypes.BLOCK_STATUS_LOADING,
        payload: null,
      },
      {
        type: ActionTypes.BLOCK_STATUS_FAILURE,
        payload: `Can't load blocks`,
      },
    ];

    expect(dispatch.mock.calls.flat()).toEqual(expected);
  });

})
