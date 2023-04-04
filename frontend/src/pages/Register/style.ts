import styled from "styled-components";

export const SectionRegister = styled.section`
  width: 90%;
  height: max-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const DivBack = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 0;
  > img {
    object-fit: contain;
  }

  > a {
    background-color: var(--Grey-3);
    color: var(--Grey-0);
    text-decoration: none;
    padding: 1rem;
    padding: 0.8rem 1.7rem;
    font-size: 0.6rem;
    font-weight: 600;
    border-radius: 4px;
  }
  > a:hover {
    background-color: var(--Grey-2);
  }
`;

export const MainReg = styled.main`
  width: 100%;
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
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
  > span {
    font-size: 0.6rem;
    font-weight: 400;
    color: var(--Grey-1);
  }
`;
