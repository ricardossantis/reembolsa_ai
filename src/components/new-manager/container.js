import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  height: 100vh;
  @media (max-width: 670px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #365083;
    margin-top: -7rem;
  }
`;
export { Container };
