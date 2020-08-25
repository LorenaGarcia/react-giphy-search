import axios from "axios";

const apiKey = "z7EE8CMj9RXF0UzvoF7SDWMlCPOV6C8c";

export const SEARCH_GIFS = "SEARCH_GIFS";
export const TRENDING_GIFS = "SEARCH_GIFS";
export const REQUEST_GIFITEM = "REQUEST_GIFITEM";
export const GIFS_ERROR = "GIFS_ERROR";

export const searchGifs = (search = null) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search.replace(
        /\s/g,
        "+"
      )}&limit=50&offset=0&rating=g&lang=en`
    );

    dispatch({
      type: "SEARCH_GIFS",
      payload: res.data,
      gif: search,
    });
  } catch (e) {
    dispatch({
      type: "GIFS_ERROR",
    });
  }
};

export const trendingGifs = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=50`
    );

    dispatch({
      type: "SEARCH_GIFS",
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: "GIFS_ERROR",
    });
  }
};

export const requestGifItem = (id = null) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`
    );

    dispatch({
      type: "REQUEST_GIFITEM",
      payload: res.data,
      gif: id,
    });
  } catch (e) {
    dispatch({
      type: "GIFS_ERROR",
    });
  }
};
