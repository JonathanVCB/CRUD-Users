import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid var(--Grey-3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

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
  > h2 {
    color: var(--Grey-0);
    background-color: var(--Grey-3);
    padding: 1rem;
    padding: 0.8rem 1.7rem;
    cursor: pointer;
    transition: 0.5s;
  }
  > h2:hover {
    background-color: var(--Grey-2);
  }

  @media (min-width: 1024px) {
    padding: 0 25%;
  }
`;

export const DivBio = styled.div`
  width: 100%;
  height: 140px;
  border-bottom: 1px solid var(--Grey-3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  > h1 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--Grey-0);
  }

  > p {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--Grey-1);
  }
  @media (min-width: 1024px) {
    padding: 0 25%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
export const DivAdd = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
  > button {
    background-color: var(--Grey-3);
    border: none;
    transition: 0.7s;
    color: white;
    width: content;
    height: 32px;
  }
  > button:hover {
    background-color: var(--Grey-2);
  }
  > button > img {
    object-fit: contain;
  }
  @media (min-width: 1024px) {
    padding: 0 25%;
  }
`;

export const MainContain = styled.main`
  height: 50%;
  margin-top: 1rem;
  padding: 2rem;
  @media (min-width: 1024px) {
    padding: 0 25%;
  }
`;

export const ListTechs = styled.ul`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--Grey-3);
  padding: 0.8rem;
`;
