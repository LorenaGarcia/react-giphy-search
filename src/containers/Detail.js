import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";

import * as Actions from "../actions/GiphyActions";
import Gif from "../components/GitDetail";
import { Spinner } from "react-bootstrap";

const Detail = (props) => {
  const { gif } = useParams();

  useEffect(() => {
    props.actions.requestGifItem(gif);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gif]);

  if (!props.gifItem) return <Spinner animation="border" />;

  return (
    <div>
      <Gif gif={props.gifItem} />
    </div>
  );
};

function mapStateToProps({ gifItem }) {
  return {
    gifItem: gifItem.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
