import styled from "styled-components";

export const SectionModal = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const DivContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: var(--Grey-3);
  padding: 1rem;
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1300px) {
    width: 45%;
  }
  @media (min-width: 1500px) {
    width: 40%;
  }
`;

export const HeaderModal = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--Grey-2);
  padding: 0.7rem;

  > h6 {
    font-size: 0.702rem;
    font-weight: 700;
    color: var(--Grey-0);
  }
  > button {
    background-color: var(--Grey-2);
    color: var(--Grey-1);
    border: none;
  }
`;

export const FormModal = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    font-size: 0.611rem;
    font-weight: 400;
    color: var(--Grey-0);
  }

  > input {
    background-color: var(--Grey-2);
    border: none;
    padding: 0.7rem;
    outline-color: var(--Grey-0);
    color: var(--Grey-0);
  }

  input::placeholder {
    font-size: 0.611rem;
    font-weight: 400;
    color: var(--Grey-0);
  }

  > select {
    background-color: var(--Grey-2);
    color: var(--Grey-0);
    border: none;
    padding: 0.7rem;
  }
  > button {
    width: 100%;
    padding: 0.8rem 1rem;
    background-color: var(--Color-primary);
    border: none;
    border-radius: 4px;
    color: #fff;
  }
`;
