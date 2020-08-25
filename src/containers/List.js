import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as Actions from "../actions/GiphyActions";
import Search from "../components/Search";
import GifList from "../components/GifList";

const List = ({ actions, gifs }) => {
  const params = useParams();

  return (
    <div>
      <Search
        onSearchChange={actions.searchGifs}
        onSearchEmpty={actions.trendingGifs}
      />
      <GifList gifs={gifs} />
    </div>
  );
};

function mapStateToProps({ gifList }) {
  return {
    gifs: gifList.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
