import React from "react";
import styled from "styled-components";

const CardFeed = () => {
  return (
    <Card>
      <FeedPhoto>teste</FeedPhoto>
      <FeedText>
        <ClientText>
          {" "}
          Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
          posuere. Proin pellentesque pellentesque felis, eget gravida nulla
          rutrum luctus. Praesent et massa a diam laoreet feugiat. Suspendisse
          urna massa, ornare vitae augue eget, tristique vestibulum velit.
          Nullam et pulvinar ante.{" "}
        </ClientText>
        <ClientName>Cristine Fardo Balsini Salão & Estética Fardo</ClientName>
      </FeedText>
    </Card>
  );
};

export default CardFeed;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border: 1px solid black;
  width: 329px;
  height: 424px;
`;
const FeedPhoto = styled.div`
  width: 81px;
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
const FeedText = styled.div`
  width: 229px;
  height: 324px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`;

const ClientText = styled.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;
const ClientName = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #000000;
`;
