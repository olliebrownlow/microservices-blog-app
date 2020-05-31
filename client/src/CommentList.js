import React from "react";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    return <li key={comments.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
