import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--darkBlue);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--lightBlue);

    color: #fff;

    border-radius: 0.25rem;
    border: 0;

    font-size: 1rem;
    margin-top: 1.5rem;

    transition: filter 0.5s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Flag = styled.img`
  margin-top: 0.625rem;
  width: 9.375rem;
  height: 9.375rem;
`;

export const Text = styled.h3`
  font: "Roboto", sans-serif;
  color: var(--lightBlue);
  margin-bottom: 5px;
`;

export const Space = styled.div`
  display: flex;
  width: 0.5rem;
  height: 0.5rem;
`;

export const ContainerButtonsType = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;
