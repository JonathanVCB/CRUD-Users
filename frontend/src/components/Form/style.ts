import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    font-size: 0.611rem;
    font-weight: 400;
    color: var(--Grey-0);
  }

  > input {
    width: 100%;
    background-color: var(--Grey-2);
    border: none;
    padding: 0.8rem;
    font-size: 0.814rem;
    font-weight: 400;
    color: var(--Grey-0);
    outline-color: var(--Grey-0);
    box-sizing: border-box;
    border-radius: 3.3px;
  }
  > input::placeholder {
    font-size: 0.814rem;
    font-weight: 400;
    color: var(--Grey-1);
  }

  > select {
    width: 100%;
    background-color: var(--Grey-2);
    border: none;
    padding: 0.8rem;
    font-size: 0.814rem;
    font-weight: 400;
    color: var(--Grey-1);
    outline-color: var(--Grey-0);
    box-sizing: border-box;
    border-radius: 3.3px;
  }

  > button {
    width: 100%;
    padding: 0.8rem 1rem;
    background-color: var(--Color-primary);
    border: none;
    border-radius: 4px;
    color: #fff;
  }
  > button:hover {
    background-color: var(--Color-primary-Focus);
  }
  > span {
    font-size: 0.725rem;
    color: var(--Negative);
  }
`;
