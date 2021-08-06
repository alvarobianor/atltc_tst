import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

interface PropsButton {
  disabled?: boolean;
}

export const Box = styled.div`
  background-color: var(--darkBlue);
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.25rem;
`;

export const BoxTransparent = styled.div`
  width: 15rem;
  height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonSC = styled(Button)`
  width: 2rem;
  cursor: "pointer";
  text-align: "left";
  padding: 0.5rem;
  text-decoration-color: var(--white);
  border-radius: 50%;
`;

export const IconCustom = styled(Icon)<PropsButton>`
  color: ${({ disabled }) => (disabled ? "gray" : "white")};
  cursor: ${({ disabled }) => (disabled ? "block" : "pointer")}; ;
`;

export const Infos = styled.div`
  margin-top: 0.5rem;
`;

export const TextInfos = styled.p`
  font-size: 1rem;
  color: var(--darkBlue);
`;
