import { combineReducers } from "redux";
import GifList from "./GifList";
import GifItem from "./GifItem";

const rootReducer = combineReducers({
  gifList: GifList,
  gifItem: GifItem,
});

export default rootReducer;
