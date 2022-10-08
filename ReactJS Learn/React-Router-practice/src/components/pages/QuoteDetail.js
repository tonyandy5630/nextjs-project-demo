import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comment from "../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import { getSingleQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
import { useEffect } from "react";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedData,
    error,
  } = useHttp(getSingleQuote, true);
  const params = useParams();
  const match = useRouteMatch();
  useEffect(() => {
    sendRequest(params.quotesId);
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }
  if (!loadedData.text) {
    return <p> No Quote Found</p>;
  }

  return (
    <React.Fragment>
      <HighlightedQuote text={loadedData.text} author={loadedData.author} />
      <Route path={`/quotes/${params.quotesId}`} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${params.quotesId}/comments`}>
            Show comment
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comment />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetail;
