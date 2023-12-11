import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  @media screen and (max-width: 768px) {
    /* text-align: start; */
  }
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;

  height: 9.6rem;

  @media screen and (max-width: 768px) {
    height: 5rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
