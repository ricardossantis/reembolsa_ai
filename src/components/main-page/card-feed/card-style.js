import styled from "styled-components";
import { GithubFilled } from "@ant-design/icons";

export const Card = styled.div`
  padding: 2rem;
`;
export const FeedPhoto = styled.div`
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
export const Photo = styled(GithubFilled)`
  font-size: 4rem;
  color: #365083;
`;
export const FeedText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 3rem;
  margin-left: 2rem;
  width: 230px;
  height: 344px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
`;

export const ClientText = styled.div`
  margin-top: 2.5rem;
  font-weight: normal;
  font-size: 15px;
  padding: 0.5rem;
  line-height: 1.3rem;
  text-align: center;
`;
export const ClientName = styled.div`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #000000;
`;

export const MaxFeed = styled.div`
  background-color: #365083;
  display: flex;
  justify-content: space-around;
`;
export const MinFeed = styled.div`
  background-color: #365083;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
