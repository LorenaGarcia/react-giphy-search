import { SEARCH_GIFS, TRENDING_GIFS } from "../actions/GiphyActions";

const initialState = {
  data: [],
};

export default function gifList(state = initialState, action) {
  switch (action.type) {
    case SEARCH_GIFS:
      return {
        ...state,
        data: action.payload.data,
      };
    case TRENDING_GIFS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
}
