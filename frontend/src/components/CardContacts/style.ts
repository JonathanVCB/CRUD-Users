import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Grey-4);
  padding: 1rem;
  > h5 {
    font-size: 0.938rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
  > p {
    font-size: 0.938rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
`;

export const DivDelete = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  > img {
    cursor: pointer;
  }
  > p {
    color: var(--Grey-0);
    cursor: pointer;
  }
  > p:hover {
    transform: scale(1.1);
  }

  @media (min-width: 500px) {
    width: 30%;
  }
  @media (min-width: 800px) {
    width: 15%;
  }
  @media (min-width: 1024px) {
    width: 22%;
  }
  @media (min-width: 1300px) {
    width: 15%;
  }
`;
