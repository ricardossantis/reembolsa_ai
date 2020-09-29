import React from "react";
import styled from "styled-components";
import { GithubFilled } from "@ant-design/icons";

const CardFeed = () => {
  return (
    <MaxFeed>
      <Card>
        <FeedPhoto>
          <Photo />
        </FeedPhoto>
        <FeedText>
          <ClientText>
            {" "}
            Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
            posuere. Proin pellentesque pellentesque felis, eget gravida nulla
            rutrum luctus. Praesent et massa a diam laoreet feugiat. Suspendisse
            urna massa, ornare vitae augue eget, tristique vestibulum velit.
            Nullam et pulvinar ante.{" "}
          </ClientText>
          <ClientName>Cristine Ferreira Fardo Balsini</ClientName>
          <ClientName>Kenzie Academy Brazil</ClientName>
        </FeedText>
      </Card>
      <Card>
        <FeedPhoto>
          <Photo />
        </FeedPhoto>
        <FeedText>
          <ClientText>
            {" "}
            Proin vulputate nisi ornare purus elementum, eu pellentesque mauris
            posuere. Proin pellentesque pellentesque felis, eget gravida nulla
            rutrum luctus. Praesent et massa a diam laoreet feugiat. Suspendisse
            urna massa, ornare vitae augue eget, tristique vestibulum velit.
            Nullam et pulvinar ante.{" "}
          </ClientText>
          <ClientName>Cristine Ferreira Fardo Balsini</ClientName>
          <ClientName>Kenzie Academy Brazil</ClientName>
        </FeedText>
      </Card>
    </MaxFeed>
  );
};

export default CardFeed;

const MaxFeed = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Card = styled.div`
  position: relative;
  width: 329px;
  height: 424px;
`;
const FeedPhoto = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 81px;
  height: 90px;
  background: #ffffff;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
const Photo = styled(GithubFilled)`
  font-size: 4rem;
  color: #365083;
`;
const FeedText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-left: 2rem;
  width: 229px;
  height: 324px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`;

const ClientText = styled.div`
  margin-top: 2.5rem;
  font-weight: normal;
  font-size: 15px;
  padding: 0.5rem;
  line-height: 1.3rem;
  text-align: center;
`;
const ClientName = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;

  color: #000000;
`;
