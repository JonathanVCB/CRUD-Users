import styled from "styled-components";

export const SectionLogin = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const DivImage = styled.div`
  width: max-content;

  > img {
    object-fit: contain;
    margin: 0 auto;
  }
`;

export const Main = styled.main`
  width: 90%;
  margin: 0 auto;
  height: max-content;
  padding: 3rem 1rem;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: var(--Grey-3);
  border-radius: 4px;

  > h1 {
    font-size: 0.902rem;
    font-weight: 700;
    color: var(--Grey-0);
  }

  @media (min-width: 750px) {
    width: 80%;
  }
  @media (min-width: 950px) {
    width: 70%;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  @media (min-width: 1450px) {
    width: 40%;
  }
`;

export const DivGoRegister = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > p {
    font-size: 0.601rem;
    font-weight: 600;
    color: var(--Grey-1);
  }
  > a {
    font-size: 0.802rem;
    font-weight: 500;
    color: var(--Grey-0);
    background-color: var(--Grey-1);
    border-radius: 4px;
    width: 90%;
    padding: 0.8rem 1rem;
    text-align: center;
    text-decoration: none;
  }
  > a:hover {
    background-color: var(--Grey-2);
  }
`;
