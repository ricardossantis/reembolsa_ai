import React from "react";

import {
  Card,
  FeedPhoto,
  FeedText,
  ClientText,
  ClientName,
  Picture
} from "./card-style.js";

const CardFeed = (props) => {
  return (
    <Card>
      <FeedPhoto>
        <Picture src={props.image} alt={"photo profile"}/>
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
