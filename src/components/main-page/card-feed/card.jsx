import React from "react";

import {
  Card,
  FeedPhoto,
  Photo,
  FeedText,
  ClientText,
  ClientName,
} from "./card-style.js";

const CardFeed = (props) => {
  return (
    <Card>
      <FeedPhoto>
        <Photo />
      </FeedPhoto>
      <FeedText>
        <ClientText>{props.text}</ClientText>
        <ClientName>{props.name}</ClientName>
        <ClientName>{props.company}</ClientName>
      </FeedText>
    </Card>
  );
};

export default CardFeed;
