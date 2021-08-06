import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const media = generateMedia({
  huge: "1440px",
  large: "1170px",
  medium: "915px",
  small: "600px",
});

export const ContainerHeader = styled.div`
  width: 100%;
`;

export const TitleHeader = styled.h1`
  width: 100%;
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: var(--white);
  text-align: center;

  ${media.greaterThan("large")`
  font-size: 3rem;
    
  `}

  ${media.between("medium", "large")`
  font-size: 2.8rem;


  `}

  ${media.between("small", "medium")`
  font-size: 2.6rem;
   
  `} 
  
  ${media.lessThan("small")`
  font-size: 2.4rem;

  `}
`;

export const ContentHeader = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: var(--lightBlue);
`;
