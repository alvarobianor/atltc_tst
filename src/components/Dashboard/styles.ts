import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "915px",
  small: "600px",
});

export const Container = styled.div``;
export const ContainerPagination = styled.div`
  margin: 0.5rem;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 1rem;

  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;

  ${media.greaterThan("large")`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem 1rem;
   
  `}

  ${media.between("medium", "large")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem 1rem;
   
  `}

  ${media.between("small", "medium")`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem 1rem;
  `} 
  
  ${media.lessThan("small")`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem 1rem;
    

  `}
`;
