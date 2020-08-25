import { REQUEST_GIFITEM } from "../actions/GiphyActions";

const initialState = {
  data: {},
};

export default function gifItem(state = initialState, action) {
  switch (action.type) {
    case REQUEST_GIFITEM:
      const { data } = action.payload;
      const { images, title, id } = data;
      const { url } = images.downsized_medium;
      const gifItem = { title, id, url };

      return { ...state, data: gifItem };
    default:
      return state;
  }
}
